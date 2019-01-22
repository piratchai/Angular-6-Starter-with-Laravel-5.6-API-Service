<?php
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class Helpers{

    private $config_keys        = [
        '_server_name',
        '_extension',
        '_server_dir',
        '_data_dir',
        '_conf_name',
        '_conf_server_name'
    ];

    private $server_array       = ['nginx','apache2'];
    private $exct_exctensions   = ['.local.conf'];

    /**
     * hasKeyConfig  Check if a keys really exists
     *
     * @param string $key
     * @return boolean
     */
    private function hasKeyConfig($key){
        if(in_array($key,$this->config_keys)){
            return true;
        }else{
            return false;
        }
    }

    /**
     * checkServer Check Servers name.
     * @param string $value //The value taket from $config
     * @return void
     */
    private function  checkServer($value){
        if( !in_array( $value, $this->server_array) ){
            echo "\n We except these values " . implode(",",$this->server_array) ."\n";
        }
        return $value;
    }

    /**
     * checkExctension function , Check if extension is a valid value.
     *
     * @param string $value
     * @return void
     */
    public function checkExctension($value){

        if( !in_array( $value, $this->server_array) ){
            echo "\n We except these values " . implode(",",$this->exct_exctensions) ."\n";
        }
        return $value;
    }

    /**
     * addValue function , DEfault function for check config values
     * We check before some values and keys before add taht values to variables which will be used
     * to script
     *
     * @param string $value
     * @param string $key
     * @return void
     */
    public function  addValue($value,$key){

        if(!$this->hasKeyConfig($key)){  
            "\n We except these keys on [_config] " . implode(",", $this->config_keys ) ."\n";
        }
        switch($value){

            case '_extension';
                return $this->checkExctension($value);
            break;
            case '_server':
                return $this->checkServer($value);
            break;
            default:
                return $value;
            break; 
        }
    }

}

class AutoServerConf extends Helpers{

    public $_server_name    = "nginx";
    public $_extension      = ".local.conf";
    public $_server_dir  = [
        'nginx'     =>"/etc/nginx/sites-enabled/",
        'apache2'   =>"/etc/apache2/sites-enabled/"
    ];
    public $_data_dir           = "_data/";
    public $_conf_name          = "app-default";
    public $_conf_server_name   = "app-default";

    public function __construct($config=false){

        if(is_array($config)){

            foreach($config as $key => $conf){
                $this->{$key} = $this->addValue(
                    $conf,
                    $key
                );
            }
        }else{
            echo "\nWe except an array config.\n";
        }
            
        
    }

    /**
     * main function The Engine of this scritp
     * @return void
     */
    public function main(){
        $finalize = false;
        $this->authToLinux();
        if($this->checkFileOldFile()){
            $this->rmFile();

            if(!$this->checkFileOldFile()){
                $this->cpFile();
            }

        }else{
            $this->cpFile();
        }
        if( $this->checkServerDir() ){
            if($this->checkFileNewFile()){
                $finalize = true;
            }
    
            if($finalize){
                echo $this->finalize();
            }
        }

    }

    /**
     * authToLinux function , Before we can use the script must login with root User
     * @return void
     */
    public function authToLinux(){
        $out = exec(" sudo su  2>&1 1> /dev/null");
        echo $out;
    }

    /**
     * checkFileOldFile function, We check if the file exist and then we can delete him
     * @return boolean
     */
    public function checkFileOldFile(){
        if(file_exists($this->_server_dir[$this->_server_name].$this->_conf_server_name.$this->_extension)){
            return true;
        }else{
            return false;
        }
    }
    /**
     * checkFileNewFile function, After create the new file on server , check if it is created
     * After that we will be are sure that there is no error.
     * @return boolean
     */
    public function checkFileNewFile(){
        if(file_exists($this->_server_dir[$this->_server_name].$this->_conf_name.$this->_extension)){
            return true;
        }else{
            return false;
        }
    }

    /**
     * cpFile function, Copying the new file chenged from data directory to server directory
     * @return void
     */
    public function cpFile(){
        if( empty( $this->_conf_name )  ){
            echo "\nThe new file name is empty,Please check the documentatione.\n";
        }else{
            $file   = $this->_data_dir.$this->_conf_name.$this->_extension;
            $out    = exec("sudo cp " .$file . " " .  $this->_server_dir[$this->_server_name] );
            echo $out;
        }
    }
    /**
     * rmFile function, Delete the old conf file before use the new file.
     * @return void
     */
    public function rmFile(){
        if( empty( $this->_conf_server_name ) ){
            echo "\nThe old file is empty,Please check the documentatione.\n";
        }else{
            $out = exec("sudo rm -r  " . $this->_server_dir[$this->_server_name].$this->_conf_server_name.$this->_extension );
            echo $out;
        }
    }
    /**
     * checkServerDir function Check if the server directory exist
     * @return void
     */
    public function checkServerDir(){
        if(is_dir($this->_server_dir[$this->_server_name])){
            return true;
        }else{
            echo "\nAre you sure that directory exists " . $this->_server_dir[$this->_server_name]."\n";
        }
    }
    /**
     * finalize function, Printing some details and messages
     *
     * @return void
     */
    public function finalize(){
        $output = exec("sudo service ".$this->_server_name." restart 2>&1 1> /dev/null");
        echo "File Updated Sucessfully\n";
        echo "We go to update the nginx server  now\n";
        echo "Restarting.......\n";
       
        echo $output;
    }
    
}


$action     = (isset($argv[1])?$argv[1]:(null));

switch($action){
    case 'start':
        $start  = new AutoServerConf($_config);
        $start->main();
    break;
    case 'help':
        echo "\nThe comand to use for:\n";
        echo "\n1) php confautomatize start \n\n";
    break;
    default:
            passthru('sudo su');
                
            passthru('service nginx restart ');
           
            echo "\nPlease use:  php confautomatize help \n\n";
    break;

    
}

// function PsExec($commandJob){
//     $command = $commandJob . ' > /dev/null 2>&1 & echo $!';
//     exec($command, $op);
//     $pid = (int) $op[0];
//     if ($pid != "")
//         return $pid;
// }