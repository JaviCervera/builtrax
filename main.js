
//${CONFIG_BEGIN}
CFG_BINARY_FILES="*.bin|*.dat|*.obj|*.b3d|*.mtl|*.x|*.3ds;*.bin|*.dat";
CFG_BRL_DATABUFFER_IMPLEMENTED="1";
CFG_BRL_GAMETARGET_IMPLEMENTED="1";
CFG_BRL_STREAM_IMPLEMENTED="1";
CFG_BRL_THREAD_IMPLEMENTED="1";
CFG_CD="";
CFG_CONFIG="release";
CFG_GLFW_GCC_LIB_OPTS="-lopenal";
CFG_GLFW_WINDOW_HEIGHT="512";
CFG_GLFW_WINDOW_RESIZABLE="1";
CFG_GLFW_WINDOW_TITLE="Builtrax";
CFG_GLFW_WINDOW_WIDTH="512";
CFG_HOST="linux";
CFG_HTML5_APP_FILENAME="index.html";
CFG_HTML5_APP_ICON="";
CFG_HTML5_APP_TITLE="Builtrax";
CFG_HTML5_CANVAS_HEIGHT="512";
CFG_HTML5_CANVAS_RESIZE_MODE="1";
CFG_HTML5_CANVAS_WIDTH="512";
CFG_HTML5_CONSOLE_SHOW="1";
CFG_HTML5_WEBAUDIO_ENABLED="1";
CFG_IMAGE_FILES="*.png|*.jpg|*.bmp|*.tga;*.png|*.jpg";
CFG_LANG="js";
CFG_MODPATH="";
CFG_MOJO_AUTO_SUSPEND_ENABLED="1";
CFG_MOJO_DRIVER_IMPLEMENTED="1";
CFG_MUSIC_FILES="*.wav|*.ogg|*.mp3|*.m4a";
CFG_OPENGL_DEPTH_BUFFER_ENABLED="1";
CFG_OPENGL_GLES20_ENABLED="1";
CFG_SAFEMODE="0";
CFG_SOUND_FILES="*.wav|*.ogg|*.mp3|*.m4a";
CFG_TARGET="html5";
CFG_TEXT_FILES="*.txt|*.xml|*.json";
//${CONFIG_END}

//${METADATA_BEGIN}
var META_DATA="[mojo_font.png];type=image/png;width=864;height=13;\n[01.png];type=image/png;width=64;height=64;\n[02.png];type=image/png;width=64;height=64;\n[03.png];type=image/png;width=64;height=64;\n[04.png];type=image/png;width=64;height=64;\n[05.png];type=image/png;width=64;height=64;\n[06.png];type=image/png;width=64;height=64;\n[07.png];type=image/png;width=64;height=64;\n[8-bit-hud_8.png];type=image/png;width=128;height=128;\n[flagpole.png];type=image/png;width=32;height=16;\n[run.png];type=image/png;width=8;height=8;\n";
//${METADATA_END}

//${TRANSCODE_BEGIN}

// Javascript Cerberus runtime.
//
// Placed into the public domain 24/02/2011.
// No warranty implied; use at your own risk.

//***** JavaScript Runtime *****

var D2R=0.017453292519943295;
var R2D=57.29577951308232;

var err_info="";
var err_stack=[];

var dbg_index=0;

function push_err(){
	err_stack.push( err_info );
}

function pop_err(){
	err_info=err_stack.pop();
}

function stackTrace(){
	if( !err_info.length ) return "";
	var str=err_info+"\n";
	for( var i=err_stack.length-1;i>0;--i ){
		str+=err_stack[i]+"\n";
	}
	return str;
}

function print( str ){
	var cons=document.getElementById( "GameConsole" );
	if( cons ){
		cons.value+=str+"\n";
		cons.scrollTop=cons.scrollHeight-cons.clientHeight;
	}else if( window.console!=undefined ){
		window.console.log( str );
	}
	return 0;
}

function alertError( err ){
	if( typeof(err)=="string" && err=="" ) return;
	alert( "Cerberus Runtime Error : "+err.toString()+"\n\n"+stackTrace() );
}

function error( err ){
	throw err;
}

//function debugLog( str ){
//	if( window.console!=undefined ) window.console.log( str );
//}

function debugLog( str ){
	var cons=document.getElementById( "GameConsole" );
	if( cons ){
		cons.value+=str+"\n";
		cons.scrollTop=cons.scrollHeight-cons.clientHeight;
	}else if( window.console!=undefined ){
		window.console.log( str );
	}
	return 0;
}

function debugStop(){
	debugger;	//	error( "STOP" );
}

function dbg_object( obj ){
	if( obj ) return obj;
	error( "Null object access" );
}

function dbg_charCodeAt( str,index ){
	if( index<0 || index>=str.length ) error( "Character index out of range" );
	return str.charCodeAt( index );
}

function dbg_array( arr,index ){
	if( index<0 || index>=arr.length ) error( "Array index out of range" );
	dbg_index=index;
	return arr;
}

function new_bool_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=false;
	return arr;
}

function new_number_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=0;
	return arr;
}

function new_string_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]='';
	return arr;
}

function new_array_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=[];
	return arr;
}

function new_object_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=null;
	return arr;
}

function resize_bool_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=false;
	return arr;
}

function resize_number_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=0;
	return arr;
}

function resize_string_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]="";
	return arr;
}

function resize_array_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=[];
	return arr;
}

function resize_object_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=null;
	return arr;
}

function string_compare( lhs,rhs ){
	var n=Math.min( lhs.length,rhs.length ),i,t;
	for( i=0;i<n;++i ){
		t=lhs.charCodeAt(i)-rhs.charCodeAt(i);
		if( t ) return t;
	}
	return lhs.length-rhs.length;
}

function string_replace( str,find,rep ){	//no unregex replace all?!?
	var i=0;
	for(;;){
		i=str.indexOf( find,i );
		if( i==-1 ) return str;
		str=str.substring( 0,i )+rep+str.substring( i+find.length );
		i+=rep.length;
	}
}

function string_trim( str ){
	var i=0,i2=str.length;
	while( i<i2 && str.charCodeAt(i)<=32 ) i+=1;
	while( i2>i && str.charCodeAt(i2-1)<=32 ) i2-=1;
	return str.slice( i,i2 );
}

function string_startswith( str,substr ){
	return substr.length<=str.length && str.slice(0,substr.length)==substr;
}

function string_endswith( str,substr ){
	return substr.length<=str.length && str.slice(str.length-substr.length,str.length)==substr;
}

function string_tochars( str ){
	var arr=new Array( str.length );
	for( var i=0;i<str.length;++i ) arr[i]=str.charCodeAt(i);
	return arr;
}

function string_fromchars( chars ){
	var str="",i;
	for( i=0;i<chars.length;++i ){
		str+=String.fromCharCode( chars[i] );
	}
	return str;
}

function object_downcast( obj,clas ){
	if( obj instanceof clas ) return obj;
	return null;
}

function object_implements( obj,iface ){
	if( obj && obj.implments && obj.implments[iface] ) return obj;
	return null;
}

function extend_class( clas ){
	var tmp=function(){};
	tmp.prototype=clas.prototype;
	return new tmp;
}

function ThrowableObject(){
}

ThrowableObject.prototype.toString=function(){ 
	return "Uncaught Cerberus Exception"; 
}


function BBGameEvent(){}
BBGameEvent.KeyDown=1;
BBGameEvent.KeyUp=2;
BBGameEvent.KeyChar=3;
BBGameEvent.MouseDown=4;
BBGameEvent.MouseUp=5;
BBGameEvent.MouseMove=6;
BBGameEvent.TouchDown=7;
BBGameEvent.TouchUp=8;
BBGameEvent.TouchMove=9;
BBGameEvent.MotionAccel=10;

function BBGameDelegate(){}
BBGameDelegate.prototype.StartGame=function(){}
BBGameDelegate.prototype.SuspendGame=function(){}
BBGameDelegate.prototype.ResumeGame=function(){}
BBGameDelegate.prototype.UpdateGame=function(){}
BBGameDelegate.prototype.RenderGame=function(){}
BBGameDelegate.prototype.KeyEvent=function( ev,data ){}
BBGameDelegate.prototype.MouseEvent=function( ev,data,x,y,z ){}
BBGameDelegate.prototype.TouchEvent=function( ev,data,x,y ){}
BBGameDelegate.prototype.MotionEvent=function( ev,data,x,y,z ){}
BBGameDelegate.prototype.DiscardGraphics=function(){}

function BBDisplayMode( width,height ){
	this.width=width;
	this.height=height;
}

function BBGame(){
	BBGame._game=this;
	this._delegate=null;
	this._keyboardEnabled=false;
	this._updateRate=0;
	this._started=false;
	this._suspended=false;
	this._debugExs=(CFG_CONFIG=="debug");
	this._startms=Date.now();
}

BBGame.Game=function(){
	return BBGame._game;
}

BBGame.prototype.SetDelegate=function( delegate ){
	this._delegate=delegate;
}

BBGame.prototype.Delegate=function(){
	return this._delegate;
}

BBGame.prototype.SetUpdateRate=function( updateRate ){
	this._updateRate=updateRate;
}

BBGame.prototype.SetKeyboardEnabled=function( keyboardEnabled ){
	this._keyboardEnabled=keyboardEnabled;
}

BBGame.prototype.Started=function(){
	return this._started;
}

BBGame.prototype.Suspended=function(){
	return this._suspended;
}

BBGame.prototype.Millisecs=function(){
	return Date.now()-this._startms;
}

BBGame.prototype.GetDate=function( date ){
	var n=date.length;
	if( n>0 ){
		var t=new Date();
		date[0]=t.getFullYear();
		if( n>1 ){
			date[1]=t.getMonth()+1;
			if( n>2 ){
				date[2]=t.getDate();
				if( n>3 ){
					date[3]=t.getHours();
					if( n>4 ){
						date[4]=t.getMinutes();
						if( n>5 ){
							date[5]=t.getSeconds();
							if( n>6 ){
								date[6]=t.getMilliseconds();
							}
						}
					}
				}
			}
		}
	}
}

BBGame.prototype.SaveState=function( state ){
	localStorage.setItem( "cerberusstate@"+document.URL,state );	//key can't start with dot in Chrome!
	return 1;
}

BBGame.prototype.LoadState=function(){
	var state=localStorage.getItem( "cerberusstate@"+document.URL );
	if( state ) return state;
	return "";
}

BBGame.prototype.LoadString=function( path ){

	var xhr=new XMLHttpRequest();
	xhr.open( "GET",this.PathToUrl( path ),false );
	
//	if( navigator.userAgent.indexOf( "Chrome/48." )>0 ){
//		xhr.setRequestHeader( "If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT" );
//	}
	
	xhr.send( null );
	
	if( xhr.status==200 || xhr.status==0 ) return xhr.responseText;
	
	return "";
}

BBGame.prototype.CountJoysticks=function( update ){
	return 0;
}

BBGame.prototype.PollJoystick=function( port,joyx,joyy,joyz,buttons ){
	return false;
}

BBGame.prototype.OpenUrl=function( url ){
	window.location=url;
}

BBGame.prototype.SetMouseVisible=function( visible ){
	if( visible ){
		this._canvas.style.cursor='default';	
	}else{
		this._canvas.style.cursor="url('data:image/cur;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA55ZXBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOeWVxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnllcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9////////////////////+////////f/////////8%3D'), auto";
	}
}

BBGame.prototype.GetDeviceWidth=function(){
	return 0;
}

BBGame.prototype.GetDeviceHeight=function(){
	return 0;
}

BBGame.prototype.GetDeviceWindowWidth=function(){
	return this.GetDeviceWidth();
}

BBGame.prototype.GetDeviceWindowHeight=function(){
	return this.GetDeviceHeight();
}

BBGame.prototype.SetDeviceWindow=function( width,height,flags ){
}

BBGame.prototype.GetDisplayModes=function(){
	return new Array();
}

BBGame.prototype.GetDesktopMode=function(){
	return null;
}

BBGame.prototype.SetSwapInterval=function( interval ){
}

BBGame.prototype.PathToFilePath=function( path ){
	return "";
}

//***** js Game *****

BBGame.prototype.PathToUrl=function( path ){
	return path;
}

BBGame.prototype.LoadData=function( path ){

	var xhr=new XMLHttpRequest();
	xhr.open( "GET",this.PathToUrl( path ),false );

	if( xhr.overrideMimeType ) xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
	
//	if( navigator.userAgent.indexOf( "Chrome/48." )>0 ){
//		xhr.setRequestHeader( "If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT" );
//	}

	xhr.send( null );
	if( xhr.status!=200 && xhr.status!=0 ) return null;

	var r=xhr.responseText;
	var buf=new ArrayBuffer( r.length );
	var bytes=new Int8Array( buf );
	for( var i=0;i<r.length;++i ){
		bytes[i]=r.charCodeAt( i );
	}
	return buf;
}

//***** INTERNAL ******

BBGame.prototype.Die=function( ex ){

	this._delegate=new BBGameDelegate();
	
	if( !ex.toString() ){
		return;
	}
	
	if( this._debugExs ){
		print( "Cerberus Runtime Error : "+ex.toString() );
		print( stackTrace() );
	}
	
	throw ex;
}

BBGame.prototype.StartGame=function(){

	if( this._started ) return;
	this._started=true;
	
	if( this._debugExs ){
		try{
			this._delegate.StartGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.StartGame();
	}
}

BBGame.prototype.SuspendGame=function(){

	if( !this._started || this._suspended ) return;
	this._suspended=true;
	
	if( this._debugExs ){
		try{
			this._delegate.SuspendGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.SuspendGame();
	}
}

BBGame.prototype.ResumeGame=function(){

	if( !this._started || !this._suspended ) return;
	this._suspended=false;
	
	if( this._debugExs ){
		try{
			this._delegate.ResumeGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.ResumeGame();
	}
}

BBGame.prototype.UpdateGame=function(){

	if( !this._started || this._suspended ) return;

	if( this._debugExs ){
		try{
			this._delegate.UpdateGame();
		}catch( ex ){
			this.Die( ex );
		}	
	}else{
		this._delegate.UpdateGame();
	}
}

BBGame.prototype.RenderGame=function(){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.RenderGame();
		}catch( ex ){
			this.Die( ex );
		}	
	}else{
		this._delegate.RenderGame();
	}
}

BBGame.prototype.KeyEvent=function( ev,data ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.KeyEvent( ev,data );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.KeyEvent( ev,data );
	}
}

BBGame.prototype.MouseEvent=function( ev,data,x,y,z ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.MouseEvent( ev,data,x,y,z );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.MouseEvent( ev,data,x,y,z );
	}
}

BBGame.prototype.TouchEvent=function( ev,data,x,y ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.TouchEvent( ev,data,x,y );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.TouchEvent( ev,data,x,y );
	}
}

BBGame.prototype.MotionEvent=function( ev,data,x,y,z ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.MotionEvent( ev,data,x,y,z );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.MotionEvent( ev,data,x,y,z );
	}
}

BBGame.prototype.DiscardGraphics=function(){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.DiscardGraphics();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.DiscardGraphics();
	}
}


var webglGraphicsSeq=1;

function BBHtml5Game( canvas ){

	BBGame.call( this );
	BBHtml5Game._game=this;
	this._canvas=canvas;
	this._loading=0;
	this._timerSeq=0;
	this._gl=null;
	
	if( CFG_OPENGL_GLES20_ENABLED=="1" ){

		//can't get these to fire!
		canvas.addEventListener( "webglcontextlost",function( event ){
			event.preventDefault();
//			print( "WebGL context lost!" );
		},false );

		canvas.addEventListener( "webglcontextrestored",function( event ){
			++webglGraphicsSeq;
//			print( "WebGL context restored!" );
		},false );

		var attrs={ alpha:false };
	
		this._gl=this._canvas.getContext( "webgl",attrs );

		if( !this._gl ) this._gl=this._canvas.getContext( "experimental-webgl",attrs );
		
		if( !this._gl ) this.Die( "Can't create WebGL" );
		
		gl=this._gl;
	}
	
	// --- start gamepad api by skn3 ---------
	this._gamepads = null;
	this._gamepadLookup = [-1,-1,-1,-1];//support 4 gamepads
	var that = this;
	window.addEventListener("gamepadconnected", function(e) {
		that.connectGamepad(e.gamepad);
	});
	
	window.addEventListener("gamepaddisconnected", function(e) {
		that.disconnectGamepad(e.gamepad);
	});
	
	//need to process already connected gamepads (before page was loaded)
	var gamepads = this.getGamepads();
	if (gamepads && gamepads.length > 0) {
		for(var index=0;index < gamepads.length;index++) {
			this.connectGamepad(gamepads[index]);
		}
	}
	// --- end gamepad api by skn3 ---------
}

BBHtml5Game.prototype=extend_class( BBGame );

BBHtml5Game.Html5Game=function(){
	return BBHtml5Game._game;
}

// --- start gamepad api by skn3 ---------
BBHtml5Game.prototype.getGamepads = function() {
	return navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
}

BBHtml5Game.prototype.connectGamepad = function(gamepad) {
	if (!gamepad) {
		return false;
	}
	
	//check if this is a standard gamepad
	if (gamepad.mapping == "standard") {
		//yup so lets add it to an array of valid gamepads
		//find empty controller slot
		var slot = -1;
		for(var index = 0;index < this._gamepadLookup.length;index++) {
			if (this._gamepadLookup[index] == -1) {
				slot = index;
				break;
			}
		}
		
		//can we add this?
		if (slot != -1) {
			this._gamepadLookup[slot] = gamepad.index;
			
			//console.log("gamepad at html5 index "+gamepad.index+" mapped to Cerberus gamepad unit "+slot);
		}
	} else {
		console.log('Cerberus has ignored gamepad at raw port #'+gamepad.index+' with unrecognised mapping scheme \''+gamepad.mapping+'\'.');
	}
}

BBHtml5Game.prototype.disconnectGamepad = function(gamepad) {
	if (!gamepad) {
		return false;
	}
	
	//scan all gamepads for matching index
	for(var index = 0;index < this._gamepadLookup.length;index++) {
		if (this._gamepadLookup[index] == gamepad.index) {
			//remove this gamepad
			this._gamepadLookup[index] = -1
			break;
		}
	}
}

BBHtml5Game.prototype.PollJoystick=function(port, joyx, joyy, joyz, buttons){
	//is this the first gamepad being polled
	if (port == 0) {
		//yes it is so we use the web api to get all gamepad info
		//we can then use this in subsequent calls to PollJoystick
		this._gamepads = this.getGamepads();
	}
	
	//dont bother processing if nothing to process
	if (!this._gamepads) {
	  return false;
	}
	
	//so use the Cerberus port to find the correct raw data
	var index = this._gamepadLookup[port];
	if (index == -1) {
		return false;
	}

	var gamepad = this._gamepads[index];
	if (!gamepad) {
		return false;
	}
	//so now process gamepad axis/buttons according to the standard mappings
	//https://w3c.github.io/gamepad/#remapping
	
	//left stick axis
	joyx[0] = gamepad.axes[0];
	joyy[0] = -gamepad.axes[1];
	
	//right stick axis
	joyx[1] = gamepad.axes[2];
	joyy[1] = -gamepad.axes[3];
	
	//left trigger
	joyz[0] = gamepad.buttons[6] ? gamepad.buttons[6].value : 0.0;
	
	//right trigger
	joyz[1] = gamepad.buttons[7] ? gamepad.buttons[7].value : 0.0;
	
	//clear button states
	for(var index = 0;index <32;index++) {
		buttons[index] = false;
	}
	
	//map html5 "standard" mapping to Cerberuss joy codes
	/*
	Const JOY_A=0
	Const JOY_B=1
	Const JOY_X=2
	Const JOY_Y=3
	Const JOY_LB=4
	Const JOY_RB=5
	Const JOY_BACK=6
	Const JOY_START=7
	Const JOY_LEFT=8
	Const JOY_UP=9
	Const JOY_RIGHT=10
	Const JOY_DOWN=11
	Const JOY_LSB=12
	Const JOY_RSB=13
	Const JOY_MENU=14
	*/
	buttons[0] = gamepad.buttons[0] && gamepad.buttons[0].pressed;
	buttons[1] = gamepad.buttons[1] && gamepad.buttons[1].pressed;
	buttons[2] = gamepad.buttons[2] && gamepad.buttons[2].pressed;
	buttons[3] = gamepad.buttons[3] && gamepad.buttons[3].pressed;
	buttons[4] = gamepad.buttons[4] && gamepad.buttons[4].pressed;
	buttons[5] = gamepad.buttons[5] && gamepad.buttons[5].pressed;
	buttons[6] = gamepad.buttons[8] && gamepad.buttons[8].pressed;
	buttons[7] = gamepad.buttons[9] && gamepad.buttons[9].pressed;
	buttons[8] = gamepad.buttons[14] && gamepad.buttons[14].pressed;
	buttons[9] = gamepad.buttons[12] && gamepad.buttons[12].pressed;
	buttons[10] = gamepad.buttons[15] && gamepad.buttons[15].pressed;
	buttons[11] = gamepad.buttons[13] && gamepad.buttons[13].pressed;
	buttons[12] = gamepad.buttons[10] && gamepad.buttons[10].pressed;
	buttons[13] = gamepad.buttons[11] && gamepad.buttons[11].pressed;
	buttons[14] = gamepad.buttons[16] && gamepad.buttons[16].pressed;
	
	//success
	return true
}
// --- end gamepad api by skn3 ---------


BBHtml5Game.prototype.ValidateUpdateTimer=function(){

	++this._timerSeq;
	if( this._suspended ) return;
	
	var game=this;
	var seq=game._timerSeq;
	
	var maxUpdates=4;
	var updateRate=this._updateRate;
	
	if( !updateRate ){

		var reqAnimFrame=(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame);
	
		if( reqAnimFrame ){
			function animate(){
				if( seq!=game._timerSeq ) return;
	
				game.UpdateGame();
				if( seq!=game._timerSeq ) return;
	
				reqAnimFrame( animate );
				game.RenderGame();
			}
			reqAnimFrame( animate );
			return;
		}
		
		maxUpdates=1;
		updateRate=60;
	}
	
	var updatePeriod=1000.0/updateRate;
	var nextUpdate=0;

	function timeElapsed(){
		if( seq!=game._timerSeq ) return;
		
		if( !nextUpdate ) nextUpdate=Date.now();
		
		for( var i=0;i<maxUpdates;++i ){
		
			game.UpdateGame();
			if( seq!=game._timerSeq ) return;
			
			nextUpdate+=updatePeriod;
			var delay=nextUpdate-Date.now();
			
			if( delay>0 ){
				setTimeout( timeElapsed,delay );
				game.RenderGame();
				return;
			}
		}
		nextUpdate=0;
		setTimeout( timeElapsed,0 );
		game.RenderGame();
	}

	setTimeout( timeElapsed,0 );
}

//***** BBGame methods *****

BBHtml5Game.prototype.SetUpdateRate=function( updateRate ){

	BBGame.prototype.SetUpdateRate.call( this,updateRate );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.GetMetaData=function( path,key ){
	if( path.indexOf( "cerberus://data/" )!=0 ) return "";
	path=path.slice(16);

	var i=META_DATA.indexOf( "["+path+"]" );
	if( i==-1 ) return "";
	i+=path.length+2;

	var e=META_DATA.indexOf( "\n",i );
	if( e==-1 ) e=META_DATA.length;

	i=META_DATA.indexOf( ";"+key+"=",i )
	if( i==-1 || i>=e ) return "";
	i+=key.length+2;

	e=META_DATA.indexOf( ";",i );
	if( e==-1 ) return "";

	return META_DATA.slice( i,e );
}

BBHtml5Game.prototype.PathToUrl=function( path ){
	if( path.indexOf( "cerberus:" )!=0 ){
		return path;
	}else if( path.indexOf( "cerberus://data/" )==0 ) {
		return "data/"+path.slice( 16 );
	}
	return "";
}

BBHtml5Game.prototype.GetLoading=function(){
	return this._loading;
}

BBHtml5Game.prototype.IncLoading=function(){
	++this._loading;
	return this._loading;
}

BBHtml5Game.prototype.DecLoading=function(){
	--this._loading;
	return this._loading;
}

BBHtml5Game.prototype.GetCanvas=function(){
	return this._canvas;
}

BBHtml5Game.prototype.GetWebGL=function(){
	return this._gl;
}

BBHtml5Game.prototype.GetDeviceWidth=function(){
	return this._canvas.width;
}

BBHtml5Game.prototype.GetDeviceHeight=function(){
	return this._canvas.height;
}

//***** INTERNAL *****

BBHtml5Game.prototype.UpdateGame=function(){

	if( !this._loading ) BBGame.prototype.UpdateGame.call( this );
}

BBHtml5Game.prototype.SuspendGame=function(){

	BBGame.prototype.SuspendGame.call( this );
	
	BBGame.prototype.RenderGame.call( this );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.ResumeGame=function(){

	BBGame.prototype.ResumeGame.call( this );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.Run=function(){

	var game=this;
	var canvas=game._canvas;
	
	var xscale=1;
	var yscale=1;
	
	var touchIds=new Array( 32 );
	for( i=0;i<32;++i ) touchIds[i]=-1;
	
	function eatEvent( e ){
		if( e.stopPropagation ){
			e.stopPropagation();
			e.preventDefault();
		}else{
			e.cancelBubble=true;
			e.returnValue=false;
		}
	}
	
	function keyToChar( key ){
		switch( key ){
		case 8:case 9:case 13:case 27:case 32:return key;
		case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 45:return key|0x10000;
		case 46:return 127;
		}
		return 0;
	}
	
	function mouseX( e ){
		var x=e.clientX+document.body.scrollLeft;
		var c=canvas;
		while( c ){
			x-=c.offsetLeft;
			c=c.offsetParent;
		}
		return x*xscale;
	}
	
	function mouseY( e ){
		var y=e.clientY+document.body.scrollTop;
		var c=canvas;
		while( c ){
			y-=c.offsetTop;
			c=c.offsetParent;
		}
		return y*yscale;
	}

	function touchX( touch ){
		var x=touch.pageX;
		var c=canvas;
		while( c ){
			x-=c.offsetLeft;
			c=c.offsetParent;
		}
		return x*xscale;
	}			
	
	function touchY( touch ){
		var y=touch.pageY;
		var c=canvas;
		while( c ){
			y-=c.offsetTop;
			c=c.offsetParent;
		}
		return y*yscale;
	}
	
	canvas.onkeydown=function( e ){
		game.KeyEvent( BBGameEvent.KeyDown,e.keyCode );
		var chr=keyToChar( e.keyCode );
		if( chr ) game.KeyEvent( BBGameEvent.KeyChar,chr );
		if( e.keyCode<48 || (e.keyCode>111 && e.keyCode<122) ) eatEvent( e );
	}

	canvas.onkeyup=function( e ){
		game.KeyEvent( BBGameEvent.KeyUp,e.keyCode );
	}

	canvas.onkeypress=function( e ){
		if( e.charCode ){
			game.KeyEvent( BBGameEvent.KeyChar,e.charCode );
		}else if( e.which ){
			game.KeyEvent( BBGameEvent.KeyChar,e.which );
		}
	}

	canvas.onmousedown=function( e ){
		switch( e.button ){
		case 0:game.MouseEvent( BBGameEvent.MouseDown,0,mouseX(e),mouseY(e) );break;
		case 1:game.MouseEvent( BBGameEvent.MouseDown,2,mouseX(e),mouseY(e) );break;
		case 2:game.MouseEvent( BBGameEvent.MouseDown,1,mouseX(e),mouseY(e) );break;
		}
		eatEvent( e );
	}
	
	canvas.onmouseup=function( e ){
		switch( e.button ){
		case 0:game.MouseEvent( BBGameEvent.MouseUp,0,mouseX(e),mouseY(e) );break;
		case 1:game.MouseEvent( BBGameEvent.MouseUp,2,mouseX(e),mouseY(e) );break;
		case 2:game.MouseEvent( BBGameEvent.MouseUp,1,mouseX(e),mouseY(e) );break;
		}
		eatEvent( e );
	}
	
	canvas.onmousemove=function( e ){
		game.MouseEvent( BBGameEvent.MouseMove,-1,mouseX(e),mouseY(e),0 );
		eatEvent( e );
	}

	canvas.onwheel=function( e ){
		var amount = 0;
		if(e.deltaY < 0){
			amount = 1;
		}else if(e.deltaY > 0){
			amount = -1;
		}
		game.MouseEvent( BBGameEvent.MouseMove, -1, mouseX(e), mouseY(e), amount);
		eatEvent( e );
	}

	canvas.onmouseout=function( e ){
		game.MouseEvent( BBGameEvent.MouseUp,0,mouseX(e),mouseY(e) );
		game.MouseEvent( BBGameEvent.MouseUp,1,mouseX(e),mouseY(e) );
		game.MouseEvent( BBGameEvent.MouseUp,2,mouseX(e),mouseY(e) );
		eatEvent( e );
	}
	
	canvas.onclick=function( e ){
		if( game.Suspended() ){
			canvas.focus();
		}
		eatEvent( e );
		return;
	}
	
	canvas.oncontextmenu=function( e ){
		return false;
	}
	
	canvas.ontouchstart=function( e ){
		if( game.Suspended() ){
			canvas.focus();
		}
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=-1 ) continue;
				touchIds[j]=touch.identifier;
				game.TouchEvent( BBGameEvent.TouchDown,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	canvas.ontouchmove=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=touch.identifier ) continue;
				game.TouchEvent( BBGameEvent.TouchMove,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	canvas.ontouchend=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=touch.identifier ) continue;
				touchIds[j]=-1;
				game.TouchEvent( BBGameEvent.TouchUp,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	window.ondevicemotion=function( e ){
		var tx=e.accelerationIncludingGravity.x/9.81;
		var ty=e.accelerationIncludingGravity.y/9.81;
		var tz=e.accelerationIncludingGravity.z/9.81;
		var x,y;
		switch( window.orientation ){
		case   0:x=+tx;y=-ty;break;
		case 180:x=-tx;y=+ty;break;
		case  90:x=-ty;y=-tx;break;
		case -90:x=+ty;y=+tx;break;
		}
		game.MotionEvent( BBGameEvent.MotionAccel,0,x,y,tz );
		eatEvent( e );
	}

	canvas.onfocus=function( e ){
		if( CFG_MOJO_AUTO_SUSPEND_ENABLED=="1" ){
			game.ResumeGame();
		}else{
			game.ValidateUpdateTimer();
		}
	}
	
	canvas.onblur=function( e ){
		for( var i=0;i<256;++i ) game.KeyEvent( BBGameEvent.KeyUp,i );
		if( CFG_MOJO_AUTO_SUSPEND_ENABLED=="1" ){
			game.SuspendGame();
		}
	}

	canvas.updateSize=function(){
		xscale=canvas.width/canvas.clientWidth;
		yscale=canvas.height/canvas.clientHeight;
		game.RenderGame();
	}
	
	canvas.updateSize();
	
	canvas.focus();
	
	game.StartGame();
	
	game.RenderGame();
}


function BBCerberusGame( canvas ){
	BBHtml5Game.call( this,canvas );
}

BBCerberusGame.prototype=extend_class( BBHtml5Game );

BBCerberusGame.Main=function( canvas ){

	var game=new BBCerberusGame( canvas );

	try{

		bbInit();
		bbMain();

	}catch( ex ){
	
		game.Die( ex );
		return;
	}

	if( !game.Delegate() ) return;
	
	game.Run();
}


// HTML5 mojo runtime.
//
// Copyright 2011 Mark Sibly, all rights reserved.
// No warranty implied; use at your own risk.

// ***** gxtkGraphics class *****

function gxtkGraphics(){
	this.game=BBHtml5Game.Html5Game();
	this.canvas=this.game.GetCanvas()
	this.width=this.canvas.width;
	this.height=this.canvas.height;
	this.gl=null;
	this.gc=this.canvas.getContext( '2d' );
	this.tmpCanvas=null;
	this.r=255;
	this.b=255;
	this.g=255;
	this.white=true;
	this.color="rgb(255,255,255)"
	this.alpha=1;
	this.blend="source-over";
	this.ix=1;this.iy=0;
	this.jx=0;this.jy=1;
	this.tx=0;this.ty=0;
	this.tformed=false;
	this.scissorX=0;
	this.scissorY=0;
	this.scissorWidth=0;
	this.scissorHeight=0;
	this.clipped=false;
}

gxtkGraphics.prototype.BeginRender=function(){
	this.width=this.canvas.width;
	this.height=this.canvas.height;
	if( !this.gc ) return 0;
	this.gc.save();
	if( this.game.GetLoading() ) return 2;
	return 1;
}

gxtkGraphics.prototype.EndRender=function(){
	if( this.gc ) this.gc.restore();
}

gxtkGraphics.prototype.Width=function(){
	return this.width;
}

gxtkGraphics.prototype.Height=function(){
	return this.height;
}

gxtkGraphics.prototype.LoadSurface=function( path ){
	var game=this.game;

	var ty=game.GetMetaData( path,"type" );
	if( ty.indexOf( "image/" )!=0 ) return null;
	
	game.IncLoading();

	var image=new Image();
	image.onload=function(){ game.DecLoading(); }
	image.onerror=function(){ game.DecLoading(); }
	image.meta_width=parseInt( game.GetMetaData( path,"width" ) );
	image.meta_height=parseInt( game.GetMetaData( path,"height" ) );
	image.src=game.PathToUrl( path );

	return new gxtkSurface( image,this );
}

gxtkGraphics.prototype.CreateSurface=function( width,height ){
	var canvas=document.createElement( 'canvas' );
	
	canvas.width=width;
	canvas.height=height;
	canvas.meta_width=width;
	canvas.meta_height=height;
	canvas.complete=true;
	
	var surface=new gxtkSurface( canvas,this );
	
	surface.gc=canvas.getContext( '2d' );
	
	return surface;
}

gxtkGraphics.prototype.SetAlpha=function( alpha ){
	this.alpha=alpha;
	this.gc.globalAlpha=alpha;
}

gxtkGraphics.prototype.SetColor=function( r,g,b ){
	this.r=r;
	this.g=g;
	this.b=b;
	this.white=(r==255 && g==255 && b==255);
	this.color="rgb("+(r|0)+","+(g|0)+","+(b|0)+")";
	this.gc.fillStyle=this.color;
	this.gc.strokeStyle=this.color;
}

gxtkGraphics.prototype.SetBlend=function( blend ){
	switch( blend ){
	case 1:
		this.blend="lighter";
		break;
	default:
		this.blend="source-over";
	}
	this.gc.globalCompositeOperation=this.blend;
}

gxtkGraphics.prototype.SetScissor=function( x,y,w,h ){
	this.scissorX=x;
	this.scissorY=y;
	this.scissorWidth=w;
	this.scissorHeight=h;
	this.clipped=(x!=0 || y!=0 || w!=this.canvas.width || h!=this.canvas.height);
	this.gc.restore();
	this.gc.save();
	if( this.clipped ){
		this.gc.beginPath();
		this.gc.rect( x,y,w,h );
		this.gc.clip();
		this.gc.closePath();
	}
	this.gc.fillStyle=this.color;
	this.gc.strokeStyle=this.color;	
	this.gc.globalAlpha=this.alpha;	
	this.gc.globalCompositeOperation=this.blend;
	if( this.tformed ) this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
}

gxtkGraphics.prototype.SetMatrix=function( ix,iy,jx,jy,tx,ty ){
	this.ix=ix;this.iy=iy;
	this.jx=jx;this.jy=jy;
	this.tx=tx;this.ty=ty;
	this.gc.setTransform( ix,iy,jx,jy,tx,ty );
	this.tformed=(ix!=1 || iy!=0 || jx!=0 || jy!=1 || tx!=0 || ty!=0);
}

gxtkGraphics.prototype.Cls=function( r,g,b ){
	if( this.tformed ) this.gc.setTransform( 1,0,0,1,0,0 );
	this.gc.fillStyle="rgb("+(r|0)+","+(g|0)+","+(b|0)+")";
	this.gc.globalAlpha=1;
	this.gc.globalCompositeOperation="source-over";
	this.gc.fillRect( 0,0,this.canvas.width,this.canvas.height );
	this.gc.fillStyle=this.color;
	this.gc.globalAlpha=this.alpha;
	this.gc.globalCompositeOperation=this.blend;
	if( this.tformed ) this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
}

gxtkGraphics.prototype.DrawPoint=function( x,y ){
	if( this.tformed ){
		var px=x;
		x=px * this.ix + y * this.jx + this.tx;
		y=px * this.iy + y * this.jy + this.ty;
		this.gc.setTransform( 1,0,0,1,0,0 );
		this.gc.fillRect( x,y,1,1 );
		this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
	}else{
		this.gc.fillRect( x,y,1,1 );
	}
}

gxtkGraphics.prototype.DrawRect=function( x,y,w,h ){
	if( w<0 ){ x+=w;w=-w; }
	if( h<0 ){ y+=h;h=-h; }
	if( w<=0 || h<=0 ) return;
	//
	this.gc.fillRect( x,y,w,h );
}

gxtkGraphics.prototype.DrawLine=function( x1,y1,x2,y2 ){
	if( this.tformed ){
		var x1_t=x1 * this.ix + y1 * this.jx + this.tx;
		var y1_t=x1 * this.iy + y1 * this.jy + this.ty;
		var x2_t=x2 * this.ix + y2 * this.jx + this.tx;
		var y2_t=x2 * this.iy + y2 * this.jy + this.ty;
		this.gc.setTransform( 1,0,0,1,0,0 );
	  	this.gc.beginPath();
	  	this.gc.moveTo( x1_t,y1_t );
	  	this.gc.lineTo( x2_t,y2_t );
	  	this.gc.stroke();
	  	this.gc.closePath();
		this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
	}else{
	  	this.gc.beginPath();
	  	this.gc.moveTo( x1,y1 );
	  	this.gc.lineTo( x2,y2 );
	  	this.gc.stroke();
	  	this.gc.closePath();
	}
}

gxtkGraphics.prototype.DrawOval=function( x,y,w,h ){
	if( w<0 ){ x+=w;w=-w; }
	if( h<0 ){ y+=h;h=-h; }
	if( w<=0 || h<=0 ) return;
	//
  	var w2=w/2,h2=h/2;
	this.gc.save();
	this.gc.translate( x+w2,y+h2 );
	this.gc.scale( w2,h2 );
  	this.gc.beginPath();
	this.gc.arc( 0,0,1,0,Math.PI*2,false );
	this.gc.fill();
  	this.gc.closePath();
	this.gc.restore();
}

gxtkGraphics.prototype.DrawPoly=function( verts ){
	if( verts.length<2 ) return;
	this.gc.beginPath();
	this.gc.moveTo( verts[0],verts[1] );
	for( var i=2;i<verts.length;i+=2 ){
		this.gc.lineTo( verts[i],verts[i+1] );
	}
	this.gc.fill();
	this.gc.closePath();
}

gxtkGraphics.prototype.DrawPoly2=function( verts,surface,srx,srcy ){
	if( verts.length<4 ) return;
	this.gc.beginPath();
	this.gc.moveTo( verts[0],verts[1] );
	for( var i=4;i<verts.length;i+=4 ){
		this.gc.lineTo( verts[i],verts[i+1] );
	}
	this.gc.fill();
	this.gc.closePath();
}

gxtkGraphics.prototype.DrawSurface=function( surface,x,y ){
	if( !surface.image.complete ) return;
	
	if( this.white ){
		this.gc.drawImage( surface.image,x,y );
		return;
	}
	
	this.DrawImageTinted( surface.image,x,y,0,0,surface.swidth,surface.sheight );
}

gxtkGraphics.prototype.DrawSurface2=function( surface,x,y,srcx,srcy,srcw,srch ){
	if( !surface.image.complete ) return;

	if( srcw<0 ){ srcx+=srcw;srcw=-srcw; }
	if( srch<0 ){ srcy+=srch;srch=-srch; }
	if( srcw<=0 || srch<=0 ) return;

	if( this.white ){
		this.gc.drawImage( surface.image,srcx,srcy,srcw,srch,x,y,srcw,srch );
		return;
	}
	
	this.DrawImageTinted( surface.image,x,y,srcx,srcy,srcw,srch  );
}

gxtkGraphics.prototype.DrawImageTinted=function( image,dx,dy,sx,sy,sw,sh ){

	if( !this.tmpCanvas ){
		this.tmpCanvas=document.createElement( "canvas" );
	}

	if( sw>this.tmpCanvas.width || sh>this.tmpCanvas.height ){
		this.tmpCanvas.width=Math.max( sw,this.tmpCanvas.width );
		this.tmpCanvas.height=Math.max( sh,this.tmpCanvas.height );
	}
	
	var tmpGC=this.tmpCanvas.getContext( "2d" );
	tmpGC.globalCompositeOperation="copy";
	
	tmpGC.drawImage( image,sx,sy,sw,sh,0,0,sw,sh );
	
	var imgData=tmpGC.getImageData( 0,0,sw,sh );
	
	var p=imgData.data,sz=sw*sh*4,i;
	
	for( i=0;i<sz;i+=4 ){
		p[i]=p[i]*this.r/255;
		p[i+1]=p[i+1]*this.g/255;
		p[i+2]=p[i+2]*this.b/255;
	}
	
	tmpGC.putImageData( imgData,0,0 );
	
	this.gc.drawImage( this.tmpCanvas,0,0,sw,sh,dx,dy,sw,sh );
}

gxtkGraphics.prototype.ReadPixels=function( pixels,x,y,width,height,offset,pitch ){

	var imgData=this.gc.getImageData( x,y,width,height );
	
	var p=imgData.data,i=0,j=offset,px,py;
	
	for( py=0;py<height;++py ){
		for( px=0;px<width;++px ){
			pixels[j++]=(p[i+3]<<24)|(p[i]<<16)|(p[i+1]<<8)|p[i+2];
			i+=4;
		}
		j+=pitch-width;
	}
}

gxtkGraphics.prototype.WritePixels2=function( surface,pixels,x,y,width,height,offset,pitch ){

	if( !surface.gc ){
		if( !surface.image.complete ) return;
		var canvas=document.createElement( "canvas" );
		canvas.width=surface.swidth;
		canvas.height=surface.sheight;
		surface.gc=canvas.getContext( "2d" );
		surface.gc.globalCompositeOperation="copy";
		surface.gc.drawImage( surface.image,0,0 );
		surface.image=canvas;
	}

	var imgData=surface.gc.createImageData( width,height );

	var p=imgData.data,i=0,j=offset,px,py,argb;
	
	for( py=0;py<height;++py ){
		for( px=0;px<width;++px ){
			argb=pixels[j++];
			p[i]=(argb>>16) & 0xff;
			p[i+1]=(argb>>8) & 0xff;
			p[i+2]=argb & 0xff;
			p[i+3]=(argb>>24) & 0xff;
			i+=4;
		}
		j+=pitch-width;
	}
	
	surface.gc.putImageData( imgData,x,y );
}

// ***** gxtkSurface class *****

function gxtkSurface( image,graphics ){
	this.image=image;
	this.graphics=graphics;
	this.swidth=image.meta_width;
	this.sheight=image.meta_height;
}

// ***** GXTK API *****

gxtkSurface.prototype.Discard=function(){
	if( this.image ){
		this.image=null;
	}
}

gxtkSurface.prototype.Width=function(){
	return this.swidth;
}

gxtkSurface.prototype.Height=function(){
	return this.sheight;
}

gxtkSurface.prototype.Loaded=function(){
	return this.image.complete;
}

gxtkSurface.prototype.OnUnsafeLoadComplete=function(){
}

if( CFG_HTML5_WEBAUDIO_ENABLED=="1" && (window.AudioContext || window.webkitAudioContext) ){

//print( "Using WebAudio!" );

// ***** WebAudio *****

var wa=null;

// ***** WebAudio gxtkSample *****

var gxtkSample=function(){
	this.waBuffer=null;
	this.state=0;
}

gxtkSample.prototype.Load=function( path ){
	if( this.state ) return false;

	var req=new XMLHttpRequest();
	
	req.open( "get",BBGame.Game().PathToUrl( path ),true );
	req.responseType="arraybuffer";
	
	var abuf=this;
	
	req.onload=function(){
		wa.decodeAudioData( req.response,function( buffer ){
			//success!
			abuf.waBuffer=buffer;
			abuf.state=1;
		},function(){
			abuf.state=-1;
		} );
	}
	
	req.onerror=function(){
		abuf.state=-1;
	}
	
	req.send();
	
	this.state=2;
			
	return true;
}

gxtkSample.prototype.Discard=function(){
}

// ***** WebAudio gxtkChannel *****

var gxtkChannel=function(){
	this.buffer=null;
	this.flags=0;
	this.volume=1;
	this.pan=0;
	this.rate=1;
	this.waSource=null;
	this.waPan=wa.create
	this.waGain=wa.createGain();
	this.waGain.connect( wa.destination );
	this.waPanner=wa.createPanner();
	this.waPanner.rolloffFactor=0;
	this.waPanner.panningModel="equalpower";
	this.waPanner.connect( this.waGain );
	this.startTime=0;
	this.offset=0;
	this.state=0;
}

// ***** WebAudio gxtkAudio *****

var gxtkAudio=function(){

	if( !wa ){
		window.AudioContext=window.AudioContext || window.webkitAudioContext;
		wa=new AudioContext();
	}
	
	this.okay=true;
	this.music=null;
	this.musicState=0;
	this.musicVolume=1;
	this.channels=new Array();
	for( var i=0;i<32;++i ){
		this.channels[i]=new gxtkChannel();
	}
}

gxtkAudio.prototype.Suspend=function(){
	if( this.MusicState()==1 ) this.music.pause();
	for( var i=0;i<32;++i ){
		var chan=this.channels[i];
		if( chan.state!=1 ) continue;
		this.PauseChannel( i );
		chan.state=5;
	}
}

gxtkAudio.prototype.Resume=function(){
	if( this.MusicState()==1 ) this.music.play();
	for( var i=0;i<32;++i ){
		var chan=this.channels[i];
		if( chan.state!=5 ) continue;
		chan.state=2;
		this.ResumeChannel( i );
	}
}

gxtkAudio.prototype.LoadSample=function( path ){

	var sample=new gxtkSample();
	if( !sample.Load( BBHtml5Game.Html5Game().PathToUrl( path ) ) ) return null;
	
	return sample;
}

gxtkAudio.prototype.PlaySample=function( buffer,channel,flags ){

	if( buffer.state!=1 ) return;

	var chan=this.channels[channel];
	
	if( chan.state ){
		chan.waSource.onended=null
		try {
			chan.waSource.stop( 0 );
			chan.state = 0			
		} catch (err) {			
		}
	}
	
	chan.buffer=buffer;
	chan.flags=flags;

	chan.waSource=wa.createBufferSource();
	chan.waSource.buffer=buffer.waBuffer;
	chan.waSource.playbackRate.value=chan.rate;
	chan.waSource.loop=(flags&1)!=0;
	chan.waSource.connect( chan.waPanner );
	
	chan.waSource.onended=function( e ){
		chan.waSource=null;
		chan.state=0;
	}

	chan.offset=0;	
	chan.startTime=wa.currentTime;
	chan.waSource.start( 0 );

	chan.state=1;
}

gxtkAudio.prototype.StopChannel=function( channel ){

	var chan=this.channels[channel];
	if( !chan.state ) return;
	
	if( chan.state==1 ){
		chan.waSource.onended=null;
		try {
			chan.waSource.stop( 0 );
		} catch (err) {			
		}
		chan.waSource=null;
	}

	chan.state=0;
}

gxtkAudio.prototype.PauseChannel=function( channel ){

	var chan=this.channels[channel];
	if( chan.state!=1 ) return;
	
	chan.offset=(chan.offset+(wa.currentTime-chan.startTime)*chan.rate)%chan.buffer.waBuffer.duration;
	
	chan.waSource.onended=null;
	try {
		chan.waSource.stop( 0 );
	} catch (err) {			
	}
	chan.waSource=null;
	
	chan.state=2;
}

gxtkAudio.prototype.ResumeChannel=function( channel ){

	var chan=this.channels[channel];
	if( chan.state!=2 ) return;
	
	chan.waSource=wa.createBufferSource();
	chan.waSource.buffer=chan.buffer.waBuffer;
	chan.waSource.playbackRate.value=chan.rate;
	chan.waSource.loop=(chan.flags&1)!=0;
	chan.waSource.connect( chan.waPanner );
	
	chan.waSource.onended=function( e ){
		chan.waSource=null;
		chan.state=0;
	}
	
	chan.startTime=wa.currentTime;
	chan.waSource.start( 0,chan.offset );

	chan.state=1;
}

gxtkAudio.prototype.ChannelState=function( channel ){
	return this.channels[channel].state & 3;
}

gxtkAudio.prototype.SetVolume=function( channel,volume ){
	var chan=this.channels[channel];

	chan.volume=volume;
	
	chan.waGain.gain.value=volume;
}

gxtkAudio.prototype.SetPan=function( channel,pan ){
	var chan=this.channels[channel];

	chan.pan=pan;
	
	var sin=Math.sin( pan*3.14159265359/2 );
	var cos=Math.cos( pan*3.14159265359/2 );
	
	chan.waPanner.setPosition( sin,0,-cos );
}

gxtkAudio.prototype.SetRate=function( channel,rate ){

	var chan=this.channels[channel];

	if( chan.state==1 ){
		//update offset for pause/resume
		var time=wa.currentTime;
		chan.offset=(chan.offset+(time-chan.startTime)*chan.rate)%chan.buffer.waBuffer.duration;
		chan.startTime=time;
	}

	chan.rate=rate;
	
	if( chan.waSource ) chan.waSource.playbackRate.value=rate;
}

gxtkAudio.prototype.PlayMusic=function( path,flags ){
	if( this.musicState ) this.music.pause();
	this.music=new Audio( BBGame.Game().PathToUrl( path ) );
	this.music.loop=(flags&1)!=0;
	this.music.play();
	this.musicState=1;
}

gxtkAudio.prototype.StopMusic=function(){
	if( !this.musicState ) return;
	this.music.pause();
	this.music=null;
	this.musicState=0;
}

gxtkAudio.prototype.PauseMusic=function(){
	if( this.musicState!=1 ) return;
	this.music.pause();
	this.musicState=2;
}

gxtkAudio.prototype.ResumeMusic=function(){
	if( this.musicState!=2 ) return;
	this.music.play();
	this.musicState=1;
}

gxtkAudio.prototype.MusicState=function(){
	if( this.musicState==1 && this.music.ended && !this.music.loop ){
		this.music=null;
		this.musicState=0;
	}
	return this.musicState;
}

gxtkAudio.prototype.SetMusicVolume=function( volume ){
	this.musicVolume=volume;
	if( this.musicState ) this.music.volume=volume;
}

}else{

//print( "Using OldAudio!" );

// ***** gxtkChannel class *****

var gxtkChannel=function(){
	this.sample=null;
	this.audio=null;
	this.volume=1;
	this.pan=0;
	this.rate=1;
	this.flags=0;
	this.state=0;
}

// ***** gxtkAudio class *****

var gxtkAudio=function(){
	this.game=BBHtml5Game.Html5Game();
	this.okay=typeof(Audio)!="undefined";
	this.music=null;
	this.channels=new Array(33);
	for( var i=0;i<33;++i ){
		this.channels[i]=new gxtkChannel();
		if( !this.okay ) this.channels[i].state=-1;
	}
}

gxtkAudio.prototype.Suspend=function(){
	var i;
	for( i=0;i<33;++i ){
		var chan=this.channels[i];
		if( chan.state==1 ){
			if( chan.audio.ended && !chan.audio.loop ){
				chan.state=0;
			}else{
				chan.audio.pause();
				chan.state=3;
			}
		}
	}
}

gxtkAudio.prototype.Resume=function(){
	var i;
	for( i=0;i<33;++i ){
		var chan=this.channels[i];
		if( chan.state==3 ){
			chan.audio.play();
			chan.state=1;
		}
	}
}

gxtkAudio.prototype.LoadSample=function( path ){
	if( !this.okay ) return null;

	var audio=new Audio( this.game.PathToUrl( path ) );
	if( !audio ) return null;
	
	return new gxtkSample( audio );
}

gxtkAudio.prototype.PlaySample=function( sample,channel,flags ){
	if( !this.okay ) return;
	
	var chan=this.channels[channel];

	if( chan.state>0 ){
		chan.audio.pause();
		chan.state=0;
	}
	
	for( var i=0;i<33;++i ){
		var chan2=this.channels[i];
		if( chan2.state==1 && chan2.audio.ended && !chan2.audio.loop ) chan.state=0;
		if( chan2.state==0 && chan2.sample ){
			chan2.sample.FreeAudio( chan2.audio );
			chan2.sample=null;
			chan2.audio=null;
		}
	}

	var audio=sample.AllocAudio();
	if( !audio ) return;

	audio.loop=(flags&1)!=0;
	audio.volume=chan.volume;
	audio.play();

	chan.sample=sample;
	chan.audio=audio;
	chan.flags=flags;
	chan.state=1;
}

gxtkAudio.prototype.StopChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state>0 ){
		chan.audio.pause();
		chan.state=0;
	}
}

gxtkAudio.prototype.PauseChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state==1 ){
		if( chan.audio.ended && !chan.audio.loop ){
			chan.state=0;
		}else{
			chan.audio.pause();
			chan.state=2;
		}
	}
}

gxtkAudio.prototype.ResumeChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state==2 ){
		chan.audio.play();
		chan.state=1;
	}
}

gxtkAudio.prototype.ChannelState=function( channel ){
	var chan=this.channels[channel];
	if( chan.state==1 && chan.audio.ended && !chan.audio.loop ) chan.state=0;
	if( chan.state==3 ) return 1;
	return chan.state;
}

gxtkAudio.prototype.SetVolume=function( channel,volume ){
	var chan=this.channels[channel];
	if( chan.state>0 ) chan.audio.volume=volume;
	chan.volume=volume;
}

gxtkAudio.prototype.SetPan=function( channel,pan ){
	var chan=this.channels[channel];
	chan.pan=pan;
}

gxtkAudio.prototype.SetRate=function( channel,rate ){
	var chan=this.channels[channel];
	chan.rate=rate;
}

gxtkAudio.prototype.PlayMusic=function( path,flags ){
	this.StopMusic();
	
	this.music=this.LoadSample( path );
	if( !this.music ) return;
	
	this.PlaySample( this.music,32,flags );
}

gxtkAudio.prototype.StopMusic=function(){
	this.StopChannel( 32 );

	if( this.music ){
		this.music.Discard();
		this.music=null;
	}
}

gxtkAudio.prototype.PauseMusic=function(){
	this.PauseChannel( 32 );
}

gxtkAudio.prototype.ResumeMusic=function(){
	this.ResumeChannel( 32 );
}

gxtkAudio.prototype.MusicState=function(){
	return this.ChannelState( 32 );
}

gxtkAudio.prototype.SetMusicVolume=function( volume ){
	this.SetVolume( 32,volume );
}

// ***** gxtkSample class *****

//function gxtkSample( audio ){
var gxtkSample=function( audio ){
	this.audio=audio;
	this.free=new Array();
	this.insts=new Array();
}

gxtkSample.prototype.FreeAudio=function( audio ){
	this.free.push( audio );
}

gxtkSample.prototype.AllocAudio=function(){
	var audio;
	while( this.free.length ){
		audio=this.free.pop();
		try{
			audio.currentTime=0;
			return audio;
		}catch( ex ){
//			print( "AUDIO ERROR1!" );
		}
	}
	
	//Max out?
	if( this.insts.length==8 ) return null;
	
	audio=new Audio( this.audio.src );
	
	//yucky loop handler for firefox!
	//
	audio.addEventListener( 'ended',function(){
		if( this.loop ){
			try{
				this.currentTime=0;
				this.play();
			}catch( ex ){
//				print( "AUDIO ERROR2!" );
			}
		}
	},false );

	this.insts.push( audio );
	return audio;
}

gxtkSample.prototype.Discard=function(){
}

}


function BBThread(){
	this.result=null;
	this.running=false;
}

BBThread.prototype.Start=function(){
	this.result=null;
	this.running=true;
	this.Run__UNSAFE__();
}

BBThread.prototype.IsRunning=function(){
	return this.running;
}

BBThread.prototype.Result=function(){
	return this.result;
}

BBThread.prototype.Run__UNSAFE__=function(){
	this.running=false;
}


function BBDataBuffer(){
	this.arrayBuffer=null;
	this.length=0;
}

BBDataBuffer.tbuf=new ArrayBuffer(4);
BBDataBuffer.tbytes=new Int8Array( BBDataBuffer.tbuf );
BBDataBuffer.tshorts=new Int16Array( BBDataBuffer.tbuf );
BBDataBuffer.tints=new Int32Array( BBDataBuffer.tbuf );
BBDataBuffer.tfloats=new Float32Array( BBDataBuffer.tbuf );

BBDataBuffer.prototype._Init=function( buffer ){
  
  this.length=buffer.byteLength;
  
  if (buffer.byteLength != Math.ceil(buffer.byteLength / 4) * 4)
  {
    var new_buffer = new ArrayBuffer(Math.ceil(buffer.byteLength / 4) * 4);
    var src = new Int8Array(buffer);
    var dst = new Int8Array(new_buffer);
    for (var i = 0; i < this.length; i++) {
      dst[i] = src[i];
    }
    buffer = new_buffer;    
  }

	this.arrayBuffer=buffer;
	this.bytes=new Int8Array( buffer );	
	this.shorts=new Int16Array( buffer,0,this.length/2 );	
	this.ints=new Int32Array( buffer,0,this.length/4 );	
	this.floats=new Float32Array( buffer,0,this.length/4 );
}

BBDataBuffer.prototype._New=function( length ){
	if( this.arrayBuffer ) return false;
	
	var buf=new ArrayBuffer( length );
	if( !buf ) return false;
	
	this._Init( buf );
	return true;
}

BBDataBuffer.prototype._Load=function( path ){
	if( this.arrayBuffer ) return false;
	
	var buf=BBGame.Game().LoadData( path );
	if( !buf ) return false;
	
	this._Init( buf );
	return true;
}

BBDataBuffer.prototype._LoadAsync=function( path,thread ){

	var buf=this;
	
	var xhr=new XMLHttpRequest();
	xhr.open( "GET",BBGame.Game().PathToUrl( path ),true );
	xhr.responseType="arraybuffer";
	
	xhr.onload=function(e){
		if( this.status==200 || this.status==0 ){
			buf._Init( xhr.response );
			thread.result=buf;
		}
		thread.running=false;
	}
	
	xhr.onerror=function(e){
		thread.running=false;
	}
	
	xhr.send();
}


BBDataBuffer.prototype.GetArrayBuffer=function(){
	return this.arrayBuffer;
}

BBDataBuffer.prototype.Length=function(){
	return this.length;
}

BBDataBuffer.prototype.Discard=function(){
	if( this.arrayBuffer ){
		this.arrayBuffer=null;
		this.length=0;
	}
}

BBDataBuffer.prototype.PokeByte=function( addr,value ){
	this.bytes[addr]=value;
}

BBDataBuffer.prototype.PokeShort=function( addr,value ){
	if( addr&1 ){
		BBDataBuffer.tshorts[0]=value;
		this.bytes[addr]=BBDataBuffer.tbytes[0];
		this.bytes[addr+1]=BBDataBuffer.tbytes[1];
		return;
	}
	this.shorts[addr>>1]=value;
}

BBDataBuffer.prototype.PokeInt=function( addr,value ){
	if( addr&3 ){
		BBDataBuffer.tints[0]=value;
		this.bytes[addr]=BBDataBuffer.tbytes[0];
		this.bytes[addr+1]=BBDataBuffer.tbytes[1];
		this.bytes[addr+2]=BBDataBuffer.tbytes[2];
		this.bytes[addr+3]=BBDataBuffer.tbytes[3];
		return;
	}
	this.ints[addr>>2]=value;
}

BBDataBuffer.prototype.PokeFloat=function( addr,value ){
	if( addr&3 ){
		BBDataBuffer.tfloats[0]=value;
		this.bytes[addr]=BBDataBuffer.tbytes[0];
		this.bytes[addr+1]=BBDataBuffer.tbytes[1];
		this.bytes[addr+2]=BBDataBuffer.tbytes[2];
		this.bytes[addr+3]=BBDataBuffer.tbytes[3];
		return;
	}
	this.floats[addr>>2]=value;
}

BBDataBuffer.prototype.PeekByte=function( addr ){
	return this.bytes[addr];
}

BBDataBuffer.prototype.PeekShort=function( addr ){
	if( addr&1 ){
		BBDataBuffer.tbytes[0]=this.bytes[addr];
		BBDataBuffer.tbytes[1]=this.bytes[addr+1];
		return BBDataBuffer.tshorts[0];
	}
	return this.shorts[addr>>1];
}

BBDataBuffer.prototype.PeekInt=function( addr ){
	if( addr&3 ){
		BBDataBuffer.tbytes[0]=this.bytes[addr];
		BBDataBuffer.tbytes[1]=this.bytes[addr+1];
		BBDataBuffer.tbytes[2]=this.bytes[addr+2];
		BBDataBuffer.tbytes[3]=this.bytes[addr+3];
		return BBDataBuffer.tints[0];
	}
	return this.ints[addr>>2];
}

BBDataBuffer.prototype.PeekFloat=function( addr ){
	if( addr&3 ){
		BBDataBuffer.tbytes[0]=this.bytes[addr];
		BBDataBuffer.tbytes[1]=this.bytes[addr+1];
		BBDataBuffer.tbytes[2]=this.bytes[addr+2];
		BBDataBuffer.tbytes[3]=this.bytes[addr+3];
		return BBDataBuffer.tfloats[0];
	}
	return this.floats[addr>>2];
}


function BBStream(){
}

BBStream.prototype.Eof=function(){
	return 0;
}

BBStream.prototype.Close=function(){
}

BBStream.prototype.Length=function(){
	return 0;
}

BBStream.prototype.Position=function(){
	return 0;
}

BBStream.prototype.Seek=function( position ){
	return 0;
}

BBStream.prototype.Read=function( buffer,offset,count ){
	return 0;
}

BBStream.prototype.Write=function( buffer,offset,count ){
	return 0;
}


var bb_texs_loading=0;

function BBLoadStaticTexImage( path,info ){

	var game=BBHtml5Game.Html5Game();

	var ty=game.GetMetaData( path,"type" );
	if( ty.indexOf( "image/" )!=0 ) return null;
	
	if( info.length>0 ) info[0]=parseInt( game.GetMetaData( path,"width" ) );
	if( info.length>1 ) info[1]=parseInt( game.GetMetaData( path,"height" ) );
	
	var img=new Image();
	img.src=game.PathToUrl( path );
	
	return img;
}

function BBTextureLoading( tex ){
	return tex && tex._loading;
}

function BBTexturesLoading(){
	return bb_texs_loading;
}

function _glGenerateMipmap( target ){

	var tex=gl.getParameter( gl.TEXTURE_BINDING_2D );
	
	if( tex && tex._loading ){
		tex._genmipmap=true;
	}else{
		gl.generateMipmap( target );
	}
}

function _glBindTexture( target,tex ){
	if( tex ){
		gl.bindTexture( target,tex );
	}else{
		gl.bindTexture( target,null );
	}
}

function _glTexImage2D( target,level,internalformat,width,height,border,format,type,pixels ){

	gl.texImage2D( target,level,internalformat,width,height,border,format,type,pixels ? new Uint8Array(pixels.arrayBuffer) : null );
}

function _glTexImage2D2( target,level,internalformat,format,type,img ){

	if( img.complete ){
		gl.pixelStorei( gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true );	
		gl.texImage2D( target,level,internalformat,format,type,img );
		gl.pixelStorei( gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false );	
		return;
	}
	
	var tex=gl.getParameter( gl.TEXTURE_BINDING_2D );
	if( 	tex._loading ){
		tex._loading+=1;
	}else{
		tex._loading=1;
	}

	bb_texs_loading+=1;
	
	var onload=function(){
	
		var tmp=gl.getParameter( gl.TEXTURE_BINDING_2D );
		gl.bindTexture( target,tex );
		
		gl.pixelStorei( gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true );	
		gl.texImage2D( target,level,internalformat,format,type,img );
		gl.pixelStorei( gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false );	

		if( tex._genmipmap && tex._loading==1 ){
			gl.generateMipmap( target );
			tex._genmipmap=false;
		}
		gl.bindTexture( target,tmp );
		
		img.removeEventListener( "load",onload );
		tex._loading-=1;
		
		bb_texs_loading-=1;
	}
	
	img.addEventListener( "load",onload );
}

function _glTexImage2D3( target,level,internalformat,format,type,path ){

	var game=BBHtml5Game.Html5Game();

	var ty=game.GetMetaData( path,"type" );
	if( ty.indexOf( "image/" )!=0 ) return null;
	
	var img=new Image();
	img.src=game.PathToUrl( path );
	
	_glTexImage2D2( target,level,internalformat,format,type,img );
}

function _glTexSubImage2D( target,level,xoffset,yoffset,width,height,format,type,data,dataOffset ){

	gl.texSubImage2D( target,level,xoffset,yoffset,width,height,format,type,new Uint8Array( data.arrayBuffer,dataOffset ) );
	
}

function _glTexSubImage2D2( target,level,xoffset,yoffset,format,type,img ){

	if( img.complete ){
		gl.texSubImage2D( target,level,xoffset,yoffset,format,type,img );
		return;
	}
	
	var tex=gl.getParameter( gl.TEXTURE_BINDING_2D );
	if( 	tex._loading>0 ){
		tex._loading+=1;
	}else{
		tex._loading=1;
	}
	
	bb_texs_loading+=1;

	var onload=function(){
	
		var tmp=gl.getParameter( gl.TEXTURE_BINDING_2D );
		gl.bindTexture( target,tex );

		gl.pixelStorei( gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true );	
		gl.texSubImage2D( target,level,xoffset,yoffset,format,type,img );
		gl.pixelStorei( gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false );

		if( tex._genmipmap && tex._loading==1 ){
			gl.generateMipmap( target );
			tex._genmipmap=false;
		}
		gl.bindTexture( target,tmp );
		
		img.removeEventListener( "load",onload );
		tex._loading-=1;
		
		bb_texs_loading-=1;
	}
	
	img.addEventListener( "load",onload );
}

function _glTexSubImage2D3( target,level,xoffset,yoffset,format,type,path ){

	var game=BBHtml5Game.Html5Game();

	var ty=game.GetMetaData( path,"type" );
	if( ty.indexOf( "image/" )!=0 ) return null;
	
	var img=new Image();
	img.src=game.PathToUrl( path );
	
	_glTexSubImage2D2( target,level,xoffset,yoffset,format,type,img );
}

// Dodgy code to convert 'any' to i,f,iv,fv...
//
function _mkf( p ){
	if( typeof(p)=="boolean" ) return p?1.0:0.0;
	if( typeof(p)=="number" ) return p;
	return 0.0;
}

function _mki( p ){
	if( typeof(p)=="boolean" ) return p?1:0;
	if( typeof(p)=="number" ) return p|0;
	if( typeof(p)=="object" ) return p;
	return 0;
}

function _mkb( p ){
	if( typeof(p)=="boolean" ) return p;
	if( typeof(p)=="number" ) return p!=0;
	return false;
}

function _mkfv( p,params ){
	if( !params || !params.length ) return;
	if( (p instanceof Array) || (p instanceof Int32Array) || (p instanceof Float32Array) ){
		var n=Math.min( params.length,p.length );
		for( var i=0;i<n;++i ){
			params[i]=_mkf(p[i]);
		}
	}else{
		params[0]=_mkf(p);
	}
}

function _mkiv( p,params ){
	if( !params || !params.length ) return;
	if( (p instanceof Array) || (p instanceof Int32Array) || (p instanceof Float32Array) ){
		var n=Math.min( params.length,p.length );
		for( var i=0;i<n;++i ){
			params[i]=_mki(p[i]);
		}
	}else{
		params[0]=_mki(p);
	}
}

function _mkbv( p,params ){
	if( !params || !params.length ) return;
	if( (p instanceof Array) || (p instanceof Int32Array) || (p instanceof Float32Array) ){
		var n=Math.min( params.length,p.length );
		for( var i=0;i<n;++i ){
			params[i]=_mkb(p[i]);
		}
	}else{
		params[0]=_mkb(p);
	}
}

function _glBufferData( target,size,data,usage ){
	if( !data ){
		gl.bufferData( target,size,usage );
	}else if( size==data.size ){
		gl.bufferData( target,data.arrayBuffer,usage );
	}else{
		gl.bufferData( target,new Int8Array( data.arrayBuffer,0,size ),usage );
	}
}

function _glBufferSubData( target,offset,size,data,dataOffset ){
	if( size==data.size && dataOffset==0 ){
		gl.bufferSubData( target,offset,data.arrayBuffer );
	}else{
		gl.bufferSubData( target,offset,new Int8Array( data.arrayBuffer,dataOffset,size ) );
	}
}


function _glClearDepthf( depth ){
	gl.clearDepth( depth );
}

function _glDepthRange( zNear,zFar ){
	gl.depthRange( zNear,zFar );
}

function _glGetActiveAttrib( program,index,size,type,name ){
	var info=gl.getActiveAttrib( program,index );
	if( size && size.length ) size[0]=info.size;
	if( type && type.length ) type[0]=info.type;
	if( name && name.length ) name[0]=info.name;
}

function _glGetActiveUniform( program,index,size,type,name ){
	var info=gl.getActiveUniform( program,index );
	if( size && size.length ) size[0]=info.size;
	if( type && type.length ) type[0]=info.type;
	if( name && name.length ) name[0]=info.name;
}

function _glGetAttachedShaders( program, maxcount, count, shaders ){
	var t=gl.getAttachedShaders();
	if( count && count.length ) count[0]=t.length;
	if( shaders ){
		var n=t.length;
		if( maxcount<n ) n=maxcount;
		if( shaders.length<n ) n=shaders.length;
		for( var i=0;i<n;++i ) shaders[i]=t[i];
	}
}

function _glGetBooleanv( pname,params ){
	_mkbv( gl.getParameter( pname ),params );
}

function _glGetBufferParameteriv( target, pname, params ){
	_mkiv( gl.glGetBufferParameter( target,pname ),params );
}

function _glGetFloatv( pname,params ){
	_mkfv( gl.getParameter( pname ),params );
}

function _glGetFramebufferAttachmentParameteriv( target, attachment, pname, params ){
	_mkiv( gl.getFrameBufferAttachmentParameter( target,attachment,pname ),params );
}

function _glGetIntegerv( pname, params ){
	_mkiv( gl.getParameter( pname ),params );
}

function _glGetProgramiv( program, pname, params ){
	_mkiv( gl.getProgramParameter( program,pname ),params );
}

function _glGetRenderbufferParameteriv( target, pname, params ){
	_mkiv( gl.getRenderbufferParameter( target,pname ),params );
}

function _glGetShaderiv( shader, pname, params ){
	_mkiv( gl.getShaderParameter( shader,pname ),params );
}

function _glGetString( pname ){
	var p=gl.getParameter( pname );
	if( typeof(p)=="string" ) return p;
	return "";
}

function _glGetTexParameterfv( target, pname, params ){
	_mkfv( gl.getTexParameter( target,pname ),params );
}

function _glGetTexParameteriv( target, pname, params ){
	_mkiv( gl.getTexParameter( target,pname ),params );
}

function _glGetUniformfv( program, location, params ){
	_mkfv( gl.getUniform( program,location ),params );
}

function _glGetUniformiv( program, location, params ){
	_mkiv( gl.getUniform( program,location ),params );
}

function _glGetUniformLocation( program, name ){
	var l=gl.getUniformLocation( program,name );
	if( l ) return l;
	return -1;
}

function _glGetVertexAttribfv( index, pname, params ){
	_mkfv( gl.getVertexAttrib( index,pname ),params );
}

function _glGetVertexAttribiv( index, pname, params ){
	_mkiv( gl.getVertexAttrib( index,pname ),params );
}

function _glReadPixels( x,y,width,height,format,type,data,dataOffset ){
	gl.readPixels( x,y,width,height,format,type,new Uint8Array( data.arrayBuffer,dataOffset,data.length-dataOffset ) );
}

function _glBindBuffer( target,buffer ){
	if( buffer ){
		gl.bindBuffer( target,buffer );
	}else{
		gl.bindBuffer( target,null );
	}
}

function _glBindFramebuffer( target,framebuffer ){
	if( framebuffer ){
		gl.bindFramebuffer( target,framebuffer );
	}else{
		gl.bindFramebuffer( target,null );
	}
}

function _glBindRenderbuffer( target,renderbuffer ){
	if( renderbuffer ){
		gl.bindRenderbuffer( target,renderbuffer );
	}else{
		gl.bindRenderbuffer( target,null );
	}
}

function _glUniform1fv( location, count, v ){
	if( v.length==count ){
		gl.uniform1fv( location,v );
	}else{
		gl.uniform1fv( location,v.slice(0,cont) );
	}
}

function _glUniform1iv( location, count, v ){
	if( v.length==count ){
		gl.uniform1iv( location,v );
	}else{
		gl.uniform1iv( location,v.slice(0,cont) );
	}
}

function _glUniform2fv( location, count, v ){
	var n=count*2;
	if( v.length==n ){
		gl.uniform2fv( location,v );
	}else{
		gl.uniform2fv( location,v.slice(0,n) );
	}
}

function _glUniform2iv( location, count, v ){
	var n=count*2;
	if( v.length==n ){
		gl.uniform2iv( location,v );
	}else{
		gl.uniform2iv( location,v.slice(0,n) );
	}
}

function _glUniform3fv( location, count, v ){
	var n=count*3;
	if( v.length==n ){
		gl.uniform3fv( location,v );
	}else{
		gl.uniform3fv( location,v.slice(0,n) );
	}
}

function _glUniform3iv( location, count, v ){
	var n=count*3;
	if( v.length==n ){
		gl.uniform3iv( location,v );
	}else{
		gl.uniform3iv( location,v.slice(0,n) );
	}
}

function _glUniform4fv( location, count, v ){
	var n=count*4;
	if( v.length==n ){
		gl.uniform4fv( location,v );
	}else{
		gl.uniform4fv( location,v.slice(0,n) );
	}
}

function _glUniform4iv( location, count, v ){
	var n=count*4;
	if( v.length==n ){
		gl.uniform4iv( location,v );
	}else{
		gl.uniform4iv( location,v.slice(0,n) );
	}
}

function _glUniformMatrix2fv( location, count, transpose, value ){
	var n=count*4;
	if( value.length==n ){
		gl.uniformMatrix2fv( location,transpose,value );
	}else{
		gl.uniformMatrix2fv( location,transpose,value.slice(0,n) );
	}
}

function _glUniformMatrix3fv( location, count, transpose, value ){
	var n=count*9;
	if( value.length==n ){
		gl.uniformMatrix3fv( location,transpose,value );
	}else{
		gl.uniformMatrix3fv( location,transpose,value.slice(0,n) );
	}
}

function _glUniformMatrix4fv( location, count, transpose, value ){
	var n=count*16;
	if( value.length==n ){
		gl.uniformMatrix4fv( location,transpose,value );
	}else{
		gl.uniformMatrix4fv( location,transpose,value.slice(0,n) );
	}
}

function c_App(){
	Object.call(this);
}
c_App.m_new=function(){
	if((bb_app__app)!=null){
		error("App has already been created");
	}
	bb_app__app=this;
	bb_app__delegate=c_GameDelegate2.m_new.call(new c_GameDelegate2);
	bb_app__game.SetDelegate(bb_app__delegate);
	return this;
}
c_App.prototype.p_OnResize=function(){
	return 0;
}
c_App.prototype.p_OnCreate=function(){
	return 0;
}
c_App.prototype.p_OnSuspend=function(){
	return 0;
}
c_App.prototype.p_OnResume=function(){
	return 0;
}
c_App.prototype.p_OnUpdate=function(){
	return 0;
}
c_App.prototype.p_OnLoading=function(){
	return 0;
}
c_App.prototype.p_OnRender=function(){
	return 0;
}
c_App.prototype.p_OnClose=function(){
	bb_app_EndApp();
	return 0;
}
c_App.prototype.p_OnBack=function(){
	this.p_OnClose();
	return 0;
}
c_App.prototype.p_OnFileDrop=function(t_filename){
	return 0;
}
function c_BuiltraxApp(){
	c_App.call(this);
	this.m_mCurrentLevel=0;
	this.m_mInGame=false;
	this.m_mMusicSound=null;
	this.m_mClickSound=null;
	this.m_mWrongClickSound=null;
	this.m_mWinSound=null;
	this.m_mLoseSound=null;
	this.m_mFont=null;
	this.m_mCam=null;
	this.m_mButton=null;
	this.m_mBackgroundText=null;
	this.m_mForegroundText=null;
	this.m_mVersionText=null;
	this.m_mScreenRect=null;
	this.m_mLevel=null;
	this.m_mCar=null;
	this.m_mFlag=null;
	this.implments={c_AnimatorDelegate:1,c_GameDelegate:1,c_WidgetDelegate:1};
}
c_BuiltraxApp.prototype=extend_class(c_App);
c_BuiltraxApp.m_new=function(){
	c_App.m_new.call(this);
	return this;
}
c_BuiltraxApp.prototype.p_PresentText=function(t_text,t_animatorName){
	this.m_mForegroundText.p_Text2(t_text);
	this.m_mForegroundText.p_X(-this.m_mForegroundText.p_Width());
	this.m_mForegroundText.p_Y(((64-this.m_mForegroundText.p_Height())/2)|0);
	this.m_mForegroundText.p_Visible2(true);
	c_WidgetPositionAnimator.m_new.call(new c_WidgetPositionAnimator,(this.m_mForegroundText),(((64-this.m_mForegroundText.p_Width())/2)|0),this.m_mForegroundText.p_Y2(),t_animatorName,0.2,0.0,(this));
	this.m_mBackgroundText.p_Text2(t_text);
	this.m_mBackgroundText.p_X(64);
	this.m_mBackgroundText.p_Y((((64-this.m_mBackgroundText.p_Height())/2)|0)+1);
	this.m_mBackgroundText.p_Visible2(true);
	c_WidgetPositionAnimator.m_new.call(new c_WidgetPositionAnimator,(this.m_mBackgroundText),(((64-this.m_mBackgroundText.p_Width())/2)|0)+1,this.m_mBackgroundText.p_Y2(),"",0.2,0.0,null);
}
c_BuiltraxApp.prototype.p_ReloadLevel=function(){
	if(this.m_mLevel!=null){
		this.m_mLevel.p_Discard();
	}
	if(this.m_mCar!=null){
		this.m_mCar.p_Discard();
	}
	if(this.m_mFlag!=null){
		this.m_mFlag.p_Discard();
	}
	this.m_mLevel=c_Level.m_Load(this.m_mCurrentLevel);
	if(this.m_mLevel==null){
		this.m_mCurrentLevel=1;
		this.m_mLevel=c_Level.m_Load(this.m_mCurrentLevel);
	}
	this.m_mCar=c_Car.m_new.call(new c_Car,this.m_mLevel.p_CarTile(),(this));
	this.m_mFlag=c_FlagPole.m_new.call(new c_FlagPole,this.m_mLevel.p_FlagTile());
	this.p_PresentText("Level "+String(this.m_mCurrentLevel),"LevelText");
}
c_BuiltraxApp.prototype.p_OnCreate=function(){
	bb_app_SetUpdateRate(20);
	bb_app_SetSwapInterval(1);
	bb_random_Seed=bb_app_Millisecs();
	if(!c_World.m_Init(4)){
		bb_app_EndApp();
	}
	c_World.m_SunRotation(45.0,-135.0);
	this.m_mCurrentLevel=1;
	this.m_mInGame=false;
	this.m_mMusicSound=bb_audio_LoadSound("music.ogg");
	this.m_mClickSound=bb_audio_LoadSound("click.ogg");
	this.m_mWrongClickSound=bb_audio_LoadSound("wrongclick.ogg");
	this.m_mWinSound=bb_audio_LoadSound("win.ogg");
	this.m_mLoseSound=bb_audio_LoadSound("lose.ogg");
	this.m_mFont=c_Font2.m_Load("8-bit-hud_8.fnt.dat",true);
	this.m_mCam=c_Camera.m_new.call(new c_Camera,null);
	this.m_mCam.p_FovY2(35.0);
	this.m_mCam.p_Viewport(0,0,64,64);
	this.m_mCam.p_Framebuffer2(c_Framebuffer.m_new.call(new c_Framebuffer,64,64,true));
	this.m_mCam.p_Position2(1.0,0.0,1.0);
	this.m_mCam.p_Rotate(45.0,-45.0,0.0);
	this.m_mCam.p_Move(0.0,0.0,-7.0,true);
	this.m_mCam.p_Position2(this.m_mCam.p_WorldX(),this.m_mCam.p_WorldY()-0.5,this.m_mCam.p_WorldZ());
	this.m_mButton=(c_TextureWidget.m_new.call(new c_TextureWidget,c_Texture.m_Load2("run.png",3,true),57,54,(this)));
	this.m_mBackgroundText=c_TextWidget.m_new.call(new c_TextWidget,this.m_mFont,"",0,0,null);
	this.m_mBackgroundText.p_Color(c_Color2.m_Multiply(-256,0.25));
	this.m_mBackgroundText.p_Visible2(false);
	this.m_mForegroundText=c_TextWidget.m_new.call(new c_TextWidget,this.m_mFont,"",0,0,null);
	this.m_mForegroundText.p_Color(-256);
	this.m_mForegroundText.p_Visible2(false);
	this.m_mVersionText=c_TextWidget.m_new.call(new c_TextWidget,this.m_mFont,"V 0 . 7",2,53,null);
	this.m_mScreenRect=c_ScreenRect.m_Calculate();
	this.p_ReloadLevel();
	return 0;
}
c_BuiltraxApp.prototype.p_UpdatePick=function(){
	var t_ratio=64.0/(this.m_mScreenRect.m_Width);
	if(((bb_input_MouseHit(0))!=0) && c_World.m_CameraPick(this.m_mCam,(((bb_input_MouseX()-(this.m_mScreenRect.m_X))*t_ratio)|0),(((bb_input_MouseY()-(this.m_mScreenRect.m_Y))*t_ratio)|0))){
		if(this.m_mLevel.p_MoveTile(c_Tile.m_FromEntity(c_World.m_PickedEntity()))){
			bb_audio_PlaySound(this.m_mClickSound,1,0);
		}else{
			bb_audio_PlaySound(this.m_mWrongClickSound,1,0);
		}
	}
}
c_BuiltraxApp.prototype.p_UpdateButton=function(t_mouseX,t_mouseY){
	this.m_mButton.p_Visible2(this.m_mInGame && !this.m_mCar.p_Moving() && this.m_mLevel.p_CarHasEntry());
	if(this.m_mButton.p_IsHovered(t_mouseX,t_mouseY)){
		this.m_mButton.p_Color(-16711936);
	}else{
		this.m_mButton.p_Color(c_Color2.m_Multiply(-16711936,0.5));
	}
}
c_BuiltraxApp.prototype.p_OnUpdate=function(){
	this.m_mScreenRect=c_ScreenRect.m_Calculate();
	var t_mouseX=this.m_mScreenRect.p_ScreenX((bb_input_MouseX())|0);
	var t_mouseY=this.m_mScreenRect.p_ScreenY((bb_input_MouseY())|0);
	if(this.m_mInGame){
		this.p_UpdatePick();
	}
	this.p_UpdateButton(t_mouseX,t_mouseY);
	c_Animator.m_UpdateAll();
	c_Widget.m_UpdateAll(t_mouseX,t_mouseY,this.m_mInGame && bb_input_MouseHit(0)!=0);
	c_World.m_Update();
	return 0;
}
c_BuiltraxApp.prototype.p_OnRender=function(){
	if(bb_audio_ChannelState(0)!=1){
		bb_audio_PlaySound(this.m_mMusicSound,0,1);
		bb_audio_SetChannelVolume(0,0.5);
	}
	c_World.m_Render();
	this.m_mCam.p_Framebuffer().p_Use();
	c_Graphics.m_Setup2D(0,0,64,64);
	c_Widget.m_DrawAll();
	c_Framebuffer.m_UseScreen();
	c_Graphics.m_Setup2D(0,0,bb_app_DeviceWidth(),bb_app_DeviceHeight());
	c_Graphics.m_Clear(-16777216);
	this.m_mCam.p_Framebuffer().p_ColorTexture2().p_Draw2((this.m_mScreenRect.m_X),(this.m_mScreenRect.m_Y),(this.m_mScreenRect.m_Width),(-this.m_mScreenRect.m_Height),0.0,0.0,0.0,0.0);
	return 0;
}
c_BuiltraxApp.prototype.p_DiscardText=function(t_delay,t_animatorName){
	c_WidgetPositionAnimator.m_new.call(new c_WidgetPositionAnimator,(this.m_mForegroundText),-this.m_mForegroundText.p_Width(),this.m_mForegroundText.p_Y2(),t_animatorName,0.2,(t_delay),(this));
	c_WidgetPositionAnimator.m_new.call(new c_WidgetPositionAnimator,(this.m_mBackgroundText),64,this.m_mBackgroundText.p_Y2(),"",0.2,(t_delay),null);
}
c_BuiltraxApp.prototype.p_LoadNextLevel=function(){
	this.m_mCurrentLevel+=1;
	this.p_ReloadLevel();
}
c_BuiltraxApp.prototype.p_OnAnimatorEnd=function(t_animator){
	var t_1=t_animator.p_Name();
	if(t_1=="LevelText"){
		this.p_DiscardText(1,"DiscardLevelText");
	}else{
		if(t_1=="DiscardLevelText"){
			this.m_mInGame=true;
		}else{
			if(t_1=="Win"){
				this.p_DiscardText(2,"DiscardWin");
			}else{
				if(t_1=="Lose"){
					this.p_DiscardText(2,"DiscardLose");
				}else{
					if(t_1=="DiscardWin"){
						this.p_LoadNextLevel();
					}else{
						if(t_1=="DiscardLose"){
							this.p_ReloadLevel();
						}
					}
				}
			}
		}
	}
}
c_BuiltraxApp.prototype.p_OnClick=function(t_widget){
	this.m_mInGame=false;
	this.m_mCar.p_SetPath(this.m_mLevel.p_CalculatePathToFlag(),this.m_mLevel.p_FlagTile());
}
c_BuiltraxApp.prototype.p_OnWin=function(){
	bb_audio_PlaySound(this.m_mWinSound,2,0);
	this.p_PresentText("YOU WIN !","Win");
}
c_BuiltraxApp.prototype.p_OnLose=function(){
	bb_audio_PlaySound(this.m_mLoseSound,2,0);
	this.p_PresentText("YOU LOSE","Lose");
}
var bb_app__app=null;
function c_GameDelegate2(){
	BBGameDelegate.call(this);
	this.m__graphics=null;
	this.m__audio=null;
	this.m__input=null;
}
c_GameDelegate2.prototype=extend_class(BBGameDelegate);
c_GameDelegate2.m_new=function(){
	return this;
}
c_GameDelegate2.prototype.StartGame=function(){
	this.m__graphics=(new gxtkGraphics);
	bb_graphics_SetGraphicsDevice(this.m__graphics);
	bb_graphics_SetFont(null);
	this.m__audio=(new gxtkAudio);
	bb_audio_SetAudioDevice(this.m__audio);
	this.m__input=c_InputDevice.m_new.call(new c_InputDevice);
	bb_input_SetInputDevice(this.m__input);
	bb_app_ValidateDeviceWindow(false);
	bb_app_EnumDisplayModes();
	bb_app__app.p_OnCreate();
}
c_GameDelegate2.prototype.SuspendGame=function(){
	bb_app__app.p_OnSuspend();
	this.m__audio.Suspend();
}
c_GameDelegate2.prototype.ResumeGame=function(){
	this.m__audio.Resume();
	bb_app__app.p_OnResume();
}
c_GameDelegate2.prototype.UpdateGame=function(){
	bb_app_ValidateDeviceWindow(true);
	this.m__input.p_BeginUpdate();
	bb_app__app.p_OnUpdate();
	this.m__input.p_EndUpdate();
}
c_GameDelegate2.prototype.RenderGame=function(){
	bb_app_ValidateDeviceWindow(true);
	var t_mode=this.m__graphics.BeginRender();
	if((t_mode)!=0){
		bb_graphics_BeginRender();
	}
	if(t_mode==2){
		bb_app__app.p_OnLoading();
	}else{
		bb_app__app.p_OnRender();
	}
	if((t_mode)!=0){
		bb_graphics_EndRender();
	}
	this.m__graphics.EndRender();
}
c_GameDelegate2.prototype.KeyEvent=function(t_event,t_data){
	this.m__input.p_KeyEvent(t_event,t_data);
	if(t_event!=1){
		return;
	}
	var t_1=t_data;
	if(t_1==432){
		bb_app__app.p_OnClose();
	}else{
		if(t_1==416){
			bb_app__app.p_OnBack();
		}
	}
}
c_GameDelegate2.prototype.MouseEvent=function(t_event,t_data,t_x,t_y,t_z){
	this.m__input.p_MouseEvent(t_event,t_data,t_x,t_y,t_z);
}
c_GameDelegate2.prototype.TouchEvent=function(t_event,t_data,t_x,t_y){
	this.m__input.p_TouchEvent(t_event,t_data,t_x,t_y);
}
c_GameDelegate2.prototype.MotionEvent=function(t_event,t_data,t_x,t_y,t_z){
	this.m__input.p_MotionEvent(t_event,t_data,t_x,t_y,t_z);
}
c_GameDelegate2.prototype.DiscardGraphics=function(){
	this.m__graphics.DiscardGraphics();
}
c_GameDelegate2.prototype.FileDropEvent=function(t_filename){
	bb_app__app.p_OnFileDrop(t_filename);
}
var bb_app__delegate=null;
var bb_app__game=null;
function bbMain(){
	c_BuiltraxApp.m_new.call(new c_BuiltraxApp);
	return 0;
}
var bb_graphics_device=null;
function bb_graphics_SetGraphicsDevice(t_dev){
	bb_graphics_device=t_dev;
	return 0;
}
function c_Font(){
	Object.call(this);
	this.m__pages=[];
	this.m__pageCount=0;
	this.m__firstChar=0;
	this.m__height=.0;
	this.m__charMap=c_IntMap.m_new.call(new c_IntMap);
}
c_Font.m_new=function(t_pages,t_pageCount,t_chars,t_firstChar,t_height){
	this.m__pages=t_pages;
	this.m__pageCount=t_pageCount;
	this.m__firstChar=t_firstChar;
	this.m__height=t_height;
	this.m__charMap=t_chars;
	return this;
}
c_Font.m_new2=function(){
	return this;
}
c_Font.m_Load=function(t_path,t_firstChar,t_numChars,t_padded){
	var t_image=bb_graphics_LoadImage(t_path,1,c_Image.m_DefaultFlags);
	var t__pages=new_object_array(1);
	t__pages[0]=t_image;
	var t__charMap=c_IntMap.m_new.call(new c_IntMap);
	var t__pageCount=1;
	if(!((t_image)!=null)){
		return null;
	}
	var t_cellWidth=((t_image.p_Width()/t_numChars)|0);
	var t_cellHeight=t_image.p_Height();
	var t_glyphX=0;
	var t_glyphY=0;
	var t_glyphWidth=t_cellWidth;
	var t_glyphHeight=t_cellHeight;
	if(t_padded==true){
		t_glyphX+=1;
		t_glyphY+=1;
		t_glyphWidth-=2;
		t_glyphHeight-=2;
	}
	var t_w=((t_image.p_Width()/t_cellWidth)|0);
	var t_h=((t_image.p_Height()/t_cellHeight)|0);
	for(var t_i=0;t_i<t_numChars;t_i=t_i+1){
		var t_y=((t_i/t_w)|0);
		var t_x=t_i % t_w;
		var t_glyph=c_Glyph.m_new.call(new c_Glyph,0,t_firstChar+t_i,t_x*t_cellWidth+t_glyphX,t_y*t_cellHeight+t_glyphY,t_glyphWidth,t_glyphHeight,t_glyphWidth);
		t__charMap.p_Add(t_firstChar+t_i,t_glyph);
	}
	return c_Font.m_new.call(new c_Font,t__pages,t__pageCount,t__charMap,t_firstChar,(t_glyphHeight));
}
c_Font.m_Load2=function(t_path,t_cellWidth,t_cellHeight,t_glyphX,t_glyphY,t_glyphWidth,t_glyphHeight,t_firstChar,t_numChars){
	var t_image=bb_graphics_LoadImage(t_path,1,c_Image.m_DefaultFlags);
	var t__pages=new_object_array(1);
	t__pages[0]=t_image;
	var t__charMap=c_IntMap.m_new.call(new c_IntMap);
	var t__pageCount=1;
	if(!((t_image)!=null)){
		return null;
	}
	var t_w=((t_image.p_Width()/t_cellWidth)|0);
	var t_h=((t_image.p_Height()/t_cellHeight)|0);
	for(var t_i=0;t_i<t_numChars;t_i=t_i+1){
		var t_y=((t_i/t_w)|0);
		var t_x=t_i % t_w;
		var t_glyph=c_Glyph.m_new.call(new c_Glyph,0,t_firstChar+t_i,t_x*t_cellWidth+t_glyphX,t_y*t_cellHeight+t_glyphY,t_glyphWidth,t_glyphHeight,t_glyphWidth);
		t__charMap.p_Add(t_firstChar+t_i,t_glyph);
	}
	return c_Font.m_new.call(new c_Font,t__pages,t__pageCount,t__charMap,t_firstChar,(t_glyphHeight));
}
c_Font.m_Load3=function(t_url,t_flags){
	var t_iniText="";
	var t_pageNum=0;
	var t_idnum=0;
	var t_tmpChar=null;
	var t_plLen=0;
	var t_lines=[];
	var t_filename="";
	var t_lineHeight=0;
	var t__pages=[];
	var t__charMap=c_IntMap.m_new.call(new c_IntMap);
	var t__pageCount=0;
	var t_path="";
	if(t_url.indexOf("/",0)>-1){
		var t_pl=t_url.split("/");
		t_plLen=t_pl.length;
		for(var t_pi=0;t_pi<=t_plLen-2;t_pi=t_pi+1){
			t_path=t_path+t_pl[t_pi]+"/";
		}
	}
	if(t_url.indexOf(".txt",0)>0 || t_url.indexOf(".fnt",0)>0){
		t_iniText=bb_app_LoadString(t_url);
	}
	t_lines=t_iniText.split(String.fromCharCode(13)+String.fromCharCode(10));
	if(t_lines.length<2){
		t_lines=t_iniText.split(String.fromCharCode(10));
	}
	var t_=t_lines;
	var t_2=0;
	while(t_2<t_.length){
		var t_line=t_[t_2];
		t_2=t_2+1;
		t_line=string_trim(t_line);
		if(string_startswith(t_line,"info") || t_line==""){
			continue;
		}
		if(string_startswith(t_line,"padding")){
			continue;
		}
		if(string_startswith(t_line,"common")){
			var t_commondata=t_line.split(String.fromCharCode(32));
			var t_3=t_commondata;
			var t_4=0;
			while(t_4<t_3.length){
				var t_common=t_3[t_4];
				t_4=t_4+1;
				if(string_startswith(t_common,"lineHeight=")){
					var t_lnh=t_common.split("=");
					t_lnh[1]=string_trim(t_lnh[1]);
					t_lineHeight=parseInt((t_lnh[1]),10);
				}
				if(string_startswith(t_common,"pages=")){
					var t_lnh2=t_common.split("=");
					t_lnh2[1]=string_trim(t_lnh2[1]);
					t__pageCount=parseInt((t_lnh2[1]),10);
					t__pages=new_object_array(t__pageCount);
				}
			}
		}
		if(string_startswith(t_line,"page")){
			var t_pagedata=t_line.split(String.fromCharCode(32));
			var t_5=t_pagedata;
			var t_6=0;
			while(t_6<t_5.length){
				var t_data=t_5[t_6];
				t_6=t_6+1;
				if(string_startswith(t_data,"file=")){
					var t_fn=t_data.split("=");
					t_fn[1]=string_trim(t_fn[1]);
					t_filename=t_fn[1];
					if(t_filename.charCodeAt(0)==34){
						t_filename=t_filename.slice(1,t_filename.length-1);
					}
					t_filename=t_path+string_trim(t_filename);
					t__pages[t_pageNum]=bb_graphics_LoadImage(t_filename,1,t_flags);
					t_pageNum=t_pageNum+1;
				}
			}
		}
		if(string_startswith(t_line,"chars")){
			continue;
		}
		if(string_startswith(t_line,"char")){
			t_tmpChar=c_Glyph.m_new2.call(new c_Glyph);
			var t_linedata=t_line.split(String.fromCharCode(32));
			var t_7=t_linedata;
			var t_8=0;
			while(t_8<t_7.length){
				var t_data2=t_7[t_8];
				t_8=t_8+1;
				if(string_startswith(t_data2,"id=")){
					var t_idc=t_data2.split("=");
					t_idc[1]=string_trim(t_idc[1]);
					t_tmpChar.m_id=parseInt((t_idc[1]),10);
				}
				if(string_startswith(t_data2,"x=")){
					var t_xc=t_data2.split("=");
					t_xc[1]=string_trim(t_xc[1]);
					t_tmpChar.m_x=parseInt((t_xc[1]),10);
				}
				if(string_startswith(t_data2,"y=")){
					var t_yc=t_data2.split("=");
					t_yc[1]=string_trim(t_yc[1]);
					t_tmpChar.m_y=parseInt((t_yc[1]),10);
				}
				if(string_startswith(t_data2,"width=")){
					var t_wc=t_data2.split("=");
					t_wc[1]=string_trim(t_wc[1]);
					t_tmpChar.m_width=parseInt((t_wc[1]),10);
				}
				if(string_startswith(t_data2,"height=")){
					var t_hc=t_data2.split("=");
					t_hc[1]=string_trim(t_hc[1]);
					t_tmpChar.m_height=parseInt((t_hc[1]),10);
				}
				if(string_startswith(t_data2,"xoffset=")){
					var t_xoc=t_data2.split("=");
					t_xoc[1]=string_trim(t_xoc[1]);
					t_tmpChar.m_xoff=parseInt((t_xoc[1]),10);
				}
				if(string_startswith(t_data2,"yoffset=")){
					var t_yoc=t_data2.split("=");
					t_yoc[1]=string_trim(t_yoc[1]);
					t_tmpChar.m_yoff=parseInt((t_yoc[1]),10);
				}
				if(string_startswith(t_data2,"xadvance=")){
					var t_advc=t_data2.split("=");
					t_advc[1]=string_trim(t_advc[1]);
					t_tmpChar.m_advance=parseInt((t_advc[1]),10);
				}
				if(string_startswith(t_data2,"page=")){
					var t_advc2=t_data2.split("=");
					t_advc2[1]=string_trim(t_advc2[1]);
					t_tmpChar.m_page=parseInt((t_advc2[1]),10);
				}
			}
			t__charMap.p_Add(t_tmpChar.m_id,t_tmpChar);
		}
		continue;
	}
	return c_Font.m_new.call(new c_Font,t__pages,t__pageCount,t__charMap,-1,(t_lineHeight));
}
function c_GraphicsContext(){
	Object.call(this);
	this.m_defaultFont=null;
	this.m_font=null;
	this.m_matrixSp=0;
	this.m_ix=1.0;
	this.m_iy=.0;
	this.m_jx=.0;
	this.m_jy=1.0;
	this.m_tx=.0;
	this.m_ty=.0;
	this.m_tformed=0;
	this.m_matDirty=0;
	this.m_color_r=.0;
	this.m_color_g=.0;
	this.m_color_b=.0;
	this.m_alpha=.0;
	this.m_blend=0;
	this.m_scissor_x=.0;
	this.m_scissor_y=.0;
	this.m_scissor_width=.0;
	this.m_scissor_height=.0;
}
c_GraphicsContext.m_new=function(){
	return this;
}
var bb_graphics_context=null;
function c_Image(){
	Object.call(this);
	this.m_surface=null;
	this.m_width=0;
	this.m_height=0;
	this.m_frames=[];
	this.m_flags=0;
	this.m_tx=.0;
	this.m_ty=.0;
	this.m_source=null;
}
c_Image.m_DefaultFlags=0;
c_Image.m_new=function(){
	return this;
}
c_Image.prototype.p_SetHandle=function(t_tx,t_ty){
	this.m_tx=t_tx;
	this.m_ty=t_ty;
	this.m_flags=this.m_flags&-2;
	return 0;
}
c_Image.prototype.p_ApplyFlags=function(t_iflags){
	this.m_flags=t_iflags;
	if((this.m_flags&2)!=0){
		var t_=this.m_frames;
		var t_2=0;
		while(t_2<t_.length){
			var t_f=t_[t_2];
			t_2=t_2+1;
			t_f.m_x+=1;
		}
		this.m_width-=2;
	}
	if((this.m_flags&4)!=0){
		var t_3=this.m_frames;
		var t_4=0;
		while(t_4<t_3.length){
			var t_f2=t_3[t_4];
			t_4=t_4+1;
			t_f2.m_y+=1;
		}
		this.m_height-=2;
	}
	if((this.m_flags&1)!=0){
		this.p_SetHandle((this.m_width)/2.0,(this.m_height)/2.0);
	}
	if(this.m_frames.length==1 && this.m_frames[0].m_x==0 && this.m_frames[0].m_y==0 && this.m_width==this.m_surface.Width() && this.m_height==this.m_surface.Height()){
		this.m_flags|=65536;
	}
	return 0;
}
c_Image.prototype.p_Init=function(t_surf,t_nframes,t_iflags){
	if((this.m_surface)!=null){
		error("Image already initialized");
	}
	this.m_surface=t_surf;
	this.m_width=((this.m_surface.Width()/t_nframes)|0);
	this.m_height=this.m_surface.Height();
	this.m_frames=new_object_array(t_nframes);
	for(var t_i=0;t_i<t_nframes;t_i=t_i+1){
		this.m_frames[t_i]=c_Frame.m_new.call(new c_Frame,t_i*this.m_width,0);
	}
	this.p_ApplyFlags(t_iflags);
	return this;
}
c_Image.prototype.p_Init2=function(t_surf,t_x,t_y,t_iwidth,t_iheight,t_nframes,t_iflags,t_src,t_srcx,t_srcy,t_srcw,t_srch){
	if((this.m_surface)!=null){
		error("Image already initialized");
	}
	this.m_surface=t_surf;
	this.m_source=t_src;
	this.m_width=t_iwidth;
	this.m_height=t_iheight;
	this.m_frames=new_object_array(t_nframes);
	var t_ix=t_x;
	var t_iy=t_y;
	for(var t_i=0;t_i<t_nframes;t_i=t_i+1){
		if(t_ix+this.m_width>t_srcw){
			t_ix=0;
			t_iy+=this.m_height;
		}
		if(t_ix+this.m_width>t_srcw || t_iy+this.m_height>t_srch){
			error("Image frame outside surface");
		}
		this.m_frames[t_i]=c_Frame.m_new.call(new c_Frame,t_ix+t_srcx,t_iy+t_srcy);
		t_ix+=this.m_width;
	}
	this.p_ApplyFlags(t_iflags);
	return this;
}
c_Image.prototype.p_Width=function(){
	return this.m_width;
}
c_Image.prototype.p_Height=function(){
	return this.m_height;
}
c_Image.prototype.p_Discard=function(){
	if(((this.m_surface)!=null) && !((this.m_source)!=null)){
		this.m_surface.Discard();
		this.m_surface=null;
	}
	return 0;
}
function bb_data_FixDataPath(t_path){
	var t_i=t_path.indexOf(":/",0);
	if(t_i!=-1 && t_path.indexOf("/",0)==t_i+1){
		return t_path;
	}
	if(string_startswith(t_path,"./") || string_startswith(t_path,"/")){
		return t_path;
	}
	return "cerberus://data/"+t_path;
}
function c_Frame(){
	Object.call(this);
	this.m_x=0;
	this.m_y=0;
}
c_Frame.m_new=function(t_x,t_y){
	this.m_x=t_x;
	this.m_y=t_y;
	return this;
}
c_Frame.m_new2=function(){
	return this;
}
function bb_lang_DebugLog(t_message){
	var t_b=0;
	return 0;
}
function bb_graphics_LoadImage(t_path,t_frameCount,t_flags){
	var t_surf=bb_graphics_device.LoadSurface(bb_data_FixDataPath(t_path));
	if((t_surf)!=null){
		return (c_Image.m_new.call(new c_Image)).p_Init(t_surf,t_frameCount,t_flags);
	}else{
		bb_lang_DebugLog("Error - Unable to load image: "+t_path);
	}
	return null;
}
function bb_graphics_LoadImage2(t_path,t_frameWidth,t_frameHeight,t_frameCount,t_flags){
	var t_surf=bb_graphics_device.LoadSurface(bb_data_FixDataPath(t_path));
	if((t_surf)!=null){
		return (c_Image.m_new.call(new c_Image)).p_Init2(t_surf,0,0,t_frameWidth,t_frameHeight,t_frameCount,t_flags,null,0,0,t_surf.Width(),t_surf.Height());
	}else{
		bb_lang_DebugLog("Error - Unable to load image: "+t_path);
	}
	return null;
}
function c_Glyph(){
	Object.call(this);
	this.m_page=0;
	this.m_id=0;
	this.m_x=0;
	this.m_y=0;
	this.m_width=0;
	this.m_height=0;
	this.m_advance=0;
	this.m_xoff=0;
	this.m_yoff=0;
}
c_Glyph.m_new=function(t_page,t_id,t_x,t_y,t_width,t_height,t_advance){
	this.m_page=t_page;
	this.m_id=t_id;
	this.m_x=t_x;
	this.m_y=t_y;
	this.m_width=t_width;
	this.m_height=t_height;
	this.m_advance=t_advance;
	this.m_xoff=0;
	this.m_yoff=0;
	return this;
}
c_Glyph.m_new2=function(){
	return this;
}
function c_Map(){
	Object.call(this);
	this.m_root=null;
}
c_Map.m_new=function(){
	return this;
}
c_Map.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map.prototype.p_RotateLeft=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map.prototype.p_RotateRight=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map.prototype.p_InsertFixup=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map.prototype.p_Add=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return false;
			}
		}
	}
	t_node=c_Node.m_new.call(new c_Node,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
function c_IntMap(){
	c_Map.call(this);
}
c_IntMap.prototype=extend_class(c_Map);
c_IntMap.m_new=function(){
	c_Map.m_new.call(this);
	return this;
}
c_IntMap.prototype.p_Compare=function(t_lhs,t_rhs){
	return t_lhs-t_rhs;
}
function c_Node(){
	Object.call(this);
	this.m_key=0;
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node.m_new2=function(){
	return this;
}
function bb_app_LoadString(t_path){
	return bb_app__game.LoadString(bb_data_FixDataPath(t_path));
}
function bb_graphics_SetFont(t_font){
	if(!((t_font)!=null)){
		if(!((bb_graphics_context.m_defaultFont)!=null)){
			bb_graphics_context.m_defaultFont=c_Font.m_Load("mojo_font.png",32,96,true);
		}
		t_font=bb_graphics_context.m_defaultFont;
	}
	bb_graphics_context.m_font=t_font;
}
var bb_audio_device=null;
function bb_audio_SetAudioDevice(t_dev){
	bb_audio_device=t_dev;
	return 0;
}
function c_InputDevice(){
	Object.call(this);
	this.m__joyStates=new_object_array(4);
	this.m__keyDown=new_bool_array(512);
	this.m__keyHitPut=0;
	this.m__keyHitQueue=new_number_array(33);
	this.m__keyHit=new_number_array(512);
	this.m__charGet=0;
	this.m__charPut=0;
	this.m__charQueue=new_number_array(32);
	this.m__mouseX=.0;
	this.m__mouseY=.0;
	this.m__mouseZ=.0;
	this.m__touchX=new_number_array(32);
	this.m__touchY=new_number_array(32);
	this.m__accelX=.0;
	this.m__accelY=.0;
	this.m__accelZ=.0;
}
c_InputDevice.m_new=function(){
	for(var t_i=0;t_i<4;t_i=t_i+1){
		this.m__joyStates[t_i]=c_JoyState.m_new.call(new c_JoyState);
	}
	return this;
}
c_InputDevice.prototype.p_PutKeyHit=function(t_key){
	if(this.m__keyHitPut==this.m__keyHitQueue.length){
		return;
	}
	this.m__keyHit[t_key]+=1;
	this.m__keyHitQueue[this.m__keyHitPut]=t_key;
	this.m__keyHitPut+=1;
}
c_InputDevice.prototype.p_BeginUpdate=function(){
	for(var t_i=0;t_i<4;t_i=t_i+1){
		var t_state=this.m__joyStates[t_i];
		if(!BBGame.Game().PollJoystick(t_i,t_state.m_joyx,t_state.m_joyy,t_state.m_joyz,t_state.m_buttons)){
			break;
		}
		for(var t_j=0;t_j<32;t_j=t_j+1){
			var t_key=256+t_i*32+t_j;
			if(t_state.m_buttons[t_j]){
				if(!this.m__keyDown[t_key]){
					this.m__keyDown[t_key]=true;
					this.p_PutKeyHit(t_key);
				}
			}else{
				this.m__keyDown[t_key]=false;
			}
		}
	}
}
c_InputDevice.prototype.p_EndUpdate=function(){
	for(var t_i=0;t_i<this.m__keyHitPut;t_i=t_i+1){
		this.m__keyHit[this.m__keyHitQueue[t_i]]=0;
	}
	this.m__keyHitPut=0;
	this.m__charGet=0;
	this.m__charPut=0;
}
c_InputDevice.prototype.p_KeyEvent=function(t_event,t_data){
	var t_1=t_event;
	if(t_1==1){
		if(!this.m__keyDown[t_data]){
			this.m__keyDown[t_data]=true;
			this.p_PutKeyHit(t_data);
			if(t_data==1){
				this.m__keyDown[384]=true;
				this.p_PutKeyHit(384);
			}else{
				if(t_data==384){
					this.m__keyDown[1]=true;
					this.p_PutKeyHit(1);
				}
			}
		}
	}else{
		if(t_1==2){
			if(this.m__keyDown[t_data]){
				this.m__keyDown[t_data]=false;
				if(t_data==1){
					this.m__keyDown[384]=false;
				}else{
					if(t_data==384){
						this.m__keyDown[1]=false;
					}
				}
			}
		}else{
			if(t_1==3){
				if(this.m__charPut<this.m__charQueue.length){
					this.m__charQueue[this.m__charPut]=t_data;
					this.m__charPut+=1;
				}
			}
		}
	}
}
c_InputDevice.prototype.p_MouseEvent=function(t_event,t_data,t_x,t_y,t_z){
	var t_2=t_event;
	if(t_2==4){
		this.p_KeyEvent(1,1+t_data);
	}else{
		if(t_2==5){
			this.p_KeyEvent(2,1+t_data);
			return;
		}else{
			if(t_2==6){
			}else{
				return;
			}
		}
	}
	this.m__mouseX=t_x;
	this.m__mouseY=t_y;
	this.m__mouseZ=t_z;
	this.m__touchX[0]=t_x;
	this.m__touchY[0]=t_y;
}
c_InputDevice.prototype.p_TouchEvent=function(t_event,t_data,t_x,t_y){
	var t_3=t_event;
	if(t_3==7){
		this.p_KeyEvent(1,384+t_data);
	}else{
		if(t_3==8){
			this.p_KeyEvent(2,384+t_data);
			return;
		}else{
			if(t_3==9){
			}else{
				return;
			}
		}
	}
	this.m__touchX[t_data]=t_x;
	this.m__touchY[t_data]=t_y;
	if(t_data==0){
		this.m__mouseX=t_x;
		this.m__mouseY=t_y;
	}
}
c_InputDevice.prototype.p_MotionEvent=function(t_event,t_data,t_x,t_y,t_z){
	var t_4=t_event;
	if(t_4==10){
	}else{
		return;
	}
	this.m__accelX=t_x;
	this.m__accelY=t_y;
	this.m__accelZ=t_z;
}
c_InputDevice.prototype.p_MouseX=function(){
	return this.m__mouseX;
}
c_InputDevice.prototype.p_MouseY=function(){
	return this.m__mouseY;
}
c_InputDevice.prototype.p_KeyHit=function(t_key){
	if(t_key>0 && t_key<512){
		return this.m__keyHit[t_key];
	}
	return 0;
}
function c_JoyState(){
	Object.call(this);
	this.m_joyx=new_number_array(2);
	this.m_joyy=new_number_array(2);
	this.m_joyz=new_number_array(2);
	this.m_buttons=new_bool_array(32);
}
c_JoyState.m_new=function(){
	return this;
}
var bb_input_device=null;
function bb_input_SetInputDevice(t_dev){
	bb_input_device=t_dev;
	return 0;
}
var bb_app__devWidth=0;
var bb_app__devHeight=0;
var bb_app__devWinWidth=0;
var bb_app__devWinHeight=0;
function bb_app_ValidateDeviceWindow(t_notifyApp){
	var t_winW=bb_app__game.GetDeviceWindowWidth();
	var t_winH=bb_app__game.GetDeviceWindowHeight();
	var t_w=bb_app__game.GetDeviceWidth();
	var t_h=bb_app__game.GetDeviceHeight();
	if(t_w==bb_app__devWidth && t_h==bb_app__devHeight && t_winW==bb_app__devWinWidth && t_winH==bb_app__devWinHeight){
		return;
	}
	bb_app__devWidth=t_w;
	bb_app__devHeight=t_h;
	bb_app__devWinWidth=t_winW;
	bb_app__devWinHeight=t_winH;
	if(t_notifyApp){
		bb_app__app.p_OnResize();
	}
}
function c_DisplayMode(){
	Object.call(this);
	this.m__width=0;
	this.m__height=0;
}
c_DisplayMode.m_new=function(t_width,t_height){
	this.m__width=t_width;
	this.m__height=t_height;
	return this;
}
c_DisplayMode.m_new2=function(){
	return this;
}
function c_Map2(){
	Object.call(this);
	this.m_root=null;
}
c_Map2.m_new=function(){
	return this;
}
c_Map2.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map2.prototype.p_FindNode=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map2.prototype.p_Contains=function(t_key){
	return this.p_FindNode(t_key)!=null;
}
c_Map2.prototype.p_RotateLeft2=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map2.prototype.p_RotateRight2=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map2.prototype.p_InsertFixup2=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft2(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight2(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight2(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft2(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map2.prototype.p_Set=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				t_node.m_value=t_value;
				return false;
			}
		}
	}
	t_node=c_Node2.m_new.call(new c_Node2,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup2(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
c_Map2.prototype.p_Insert=function(t_key,t_value){
	return this.p_Set(t_key,t_value);
}
function c_IntMap2(){
	c_Map2.call(this);
}
c_IntMap2.prototype=extend_class(c_Map2);
c_IntMap2.m_new=function(){
	c_Map2.m_new.call(this);
	return this;
}
c_IntMap2.prototype.p_Compare=function(t_lhs,t_rhs){
	return t_lhs-t_rhs;
}
function c_Stack(){
	Object.call(this);
	this.m_data=[];
	this.m_length=0;
}
c_Stack.m_new=function(){
	return this;
}
c_Stack.m_new2=function(t_data){
	this.m_data=t_data.slice(0);
	this.m_length=t_data.length;
	return this;
}
c_Stack.prototype.p_Push=function(t_value){
	if(this.m_length==this.m_data.length){
		this.m_data=resize_object_array(this.m_data,this.m_length*2+10);
	}
	this.m_data[this.m_length]=t_value;
	this.m_length+=1;
}
c_Stack.prototype.p_Push2=function(t_values,t_offset,t_count){
	for(var t_i=0;t_i<t_count;t_i=t_i+1){
		this.p_Push(t_values[t_offset+t_i]);
	}
}
c_Stack.prototype.p_Push3=function(t_values,t_offset){
	this.p_Push2(t_values,t_offset,t_values.length-t_offset);
}
c_Stack.prototype.p_ToArray=function(){
	var t_t=new_object_array(this.m_length);
	for(var t_i=0;t_i<this.m_length;t_i=t_i+1){
		t_t[t_i]=this.m_data[t_i];
	}
	return t_t;
}
function c_Node2(){
	Object.call(this);
	this.m_key=0;
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node2.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node2.m_new2=function(){
	return this;
}
var bb_app__displayModes=[];
var bb_app__desktopMode=null;
function bb_app_DeviceWidth(){
	return bb_app__devWidth;
}
function bb_app_DeviceHeight(){
	return bb_app__devHeight;
}
function bb_app_EnumDisplayModes(){
	var t_modes=bb_app__game.GetDisplayModes();
	var t_mmap=c_IntMap2.m_new.call(new c_IntMap2);
	var t_mstack=c_Stack.m_new.call(new c_Stack);
	for(var t_i=0;t_i<t_modes.length;t_i=t_i+1){
		var t_w=t_modes[t_i].width;
		var t_h=t_modes[t_i].height;
		var t_size=t_w<<16|t_h;
		if(t_mmap.p_Contains(t_size)){
		}else{
			var t_mode=c_DisplayMode.m_new.call(new c_DisplayMode,t_modes[t_i].width,t_modes[t_i].height);
			t_mmap.p_Insert(t_size,t_mode);
			t_mstack.p_Push(t_mode);
		}
	}
	bb_app__displayModes=t_mstack.p_ToArray();
	var t_mode2=bb_app__game.GetDesktopMode();
	if((t_mode2)!=null){
		bb_app__desktopMode=c_DisplayMode.m_new.call(new c_DisplayMode,t_mode2.width,t_mode2.height);
	}else{
		bb_app__desktopMode=c_DisplayMode.m_new.call(new c_DisplayMode,bb_app_DeviceWidth(),bb_app_DeviceHeight());
	}
}
var bb_graphics_renderDevice=null;
function bb_graphics_SetMatrix(t_ix,t_iy,t_jx,t_jy,t_tx,t_ty){
	bb_graphics_context.m_ix=t_ix;
	bb_graphics_context.m_iy=t_iy;
	bb_graphics_context.m_jx=t_jx;
	bb_graphics_context.m_jy=t_jy;
	bb_graphics_context.m_tx=t_tx;
	bb_graphics_context.m_ty=t_ty;
	bb_graphics_context.m_tformed=((t_ix!=1.0 || t_iy!=0.0 || t_jx!=0.0 || t_jy!=1.0 || t_tx!=0.0 || t_ty!=0.0)?1:0);
	bb_graphics_context.m_matDirty=1;
	return 0;
}
function bb_graphics_SetMatrix2(t_m){
	bb_graphics_SetMatrix(t_m[0],t_m[1],t_m[2],t_m[3],t_m[4],t_m[5]);
	return 0;
}
function bb_graphics_SetColor(t_r,t_g,t_b){
	bb_graphics_context.m_color_r=t_r;
	bb_graphics_context.m_color_g=t_g;
	bb_graphics_context.m_color_b=t_b;
	bb_graphics_renderDevice.SetColor(t_r,t_g,t_b);
	return 0;
}
function bb_graphics_SetColor2(t_rgb){
	bb_graphics_context.m_color_r=(t_rgb>>16&255);
	bb_graphics_context.m_color_g=(t_rgb>>8&255);
	bb_graphics_context.m_color_b=(t_rgb&255);
	bb_graphics_renderDevice.SetColor(bb_graphics_context.m_color_r,bb_graphics_context.m_color_g,bb_graphics_context.m_color_b);
	return 0;
}
function c_Color(){
	Object.call(this);
	this.m_r=0;
	this.m_g=0;
	this.m_b=0;
}
function bb_graphics_SetColor3(t_col){
	bb_graphics_context.m_color_r=(t_col.m_r);
	bb_graphics_context.m_color_g=(t_col.m_g);
	bb_graphics_context.m_color_b=(t_col.m_b);
	bb_graphics_renderDevice.SetColor(bb_graphics_context.m_color_r,bb_graphics_context.m_color_g,bb_graphics_context.m_color_b);
	bb_graphics_renderDevice.SetAlpha(bb_graphics_context.m_alpha);
	return 0;
}
function bb_graphics_SetAlpha(t_alpha){
	bb_graphics_context.m_alpha=t_alpha;
	bb_graphics_renderDevice.SetAlpha(t_alpha);
	return 0;
}
function bb_graphics_SetBlend(t_blend){
	bb_graphics_context.m_blend=t_blend;
	bb_graphics_renderDevice.SetBlend(t_blend);
	return 0;
}
function bb_graphics_SetScissor(t_x,t_y,t_width,t_height){
	bb_graphics_context.m_scissor_x=t_x;
	bb_graphics_context.m_scissor_y=t_y;
	bb_graphics_context.m_scissor_width=t_width;
	bb_graphics_context.m_scissor_height=t_height;
	bb_graphics_renderDevice.SetScissor(((t_x)|0),((t_y)|0),((t_width)|0),((t_height)|0));
	return 0;
}
function bb_graphics_BeginRender(){
	bb_graphics_renderDevice=bb_graphics_device;
	bb_graphics_context.m_matrixSp=0;
	bb_graphics_SetMatrix(1.0,0.0,0.0,1.0,0.0,0.0);
	bb_graphics_SetColor(255.0,255.0,255.0);
	bb_graphics_SetAlpha(1.0);
	bb_graphics_SetBlend(0);
	bb_graphics_SetScissor(0.0,0.0,(bb_app_DeviceWidth()),(bb_app_DeviceHeight()));
	return 0;
}
function bb_graphics_EndRender(){
	bb_graphics_renderDevice=null;
	return 0;
}
function c_BBGameEvent(){
	Object.call(this);
}
function bb_app_EndApp(){
	error("");
}
var bb_app__updateRate=0;
function bb_app_SetUpdateRate(t_hertz){
	bb_app__updateRate=t_hertz;
	bb_app__game.SetUpdateRate(t_hertz);
}
function bb_app_SetSwapInterval(t_interval){
	bb_app__game.SetSwapInterval(t_interval);
}
function bb_app_Millisecs(){
	return bb_app__game.Millisecs();
}
var bb_random_Seed=0;
function c_World(){
	Object.call(this);
}
c_World.m_mSkybox=null;
c_World.m_mSunPitch=0;
c_World.m_mSunYaw=0;
c_World.m_SunRotation=function(t_pitch,t_yaw){
	c_World.m_mSunPitch=t_pitch;
	c_World.m_mSunYaw=t_yaw;
}
c_World.m_mSunColor=0;
c_World.m_SunColor=function(){
	return c_World.m_mSunColor;
}
c_World.m_SunColor2=function(t_color){
	c_World.m_mSunColor=t_color;
}
c_World.m_mAmbient=0;
c_World.m_Ambient=function(){
	return c_World.m_mAmbient;
}
c_World.m_Ambient2=function(t_amb){
	c_World.m_mAmbient=t_amb;
}
c_World.m_mFogEnabled=false;
c_World.m_FogEnabled=function(){
	return c_World.m_mFogEnabled;
}
c_World.m_FogEnabled2=function(t_enabled){
	c_World.m_mFogEnabled=t_enabled;
}
c_World.m_mFogMin=0;
c_World.m_FogMinDistance=function(){
	return c_World.m_mFogMin;
}
c_World.m_FogMinDistance2=function(t_minDist){
	c_World.m_mFogMin=t_minDist;
}
c_World.m_mFogMax=0;
c_World.m_FogMaxDistance=function(){
	return c_World.m_mFogMax;
}
c_World.m_FogMaxDistance2=function(t_maxDist){
	c_World.m_mFogMax=t_maxDist;
}
c_World.m_mFogColor=0;
c_World.m_FogColor=function(){
	return c_World.m_mFogColor;
}
c_World.m_FogColor2=function(t_color){
	c_World.m_mFogColor=t_color;
}
c_World.m_mSeparateDepthPass=false;
c_World.m_SeparateDepthPass=function(){
	return c_World.m_mSeparateDepthPass;
}
c_World.m_SeparateDepthPass2=function(t_enable){
	c_World.m_mSeparateDepthPass=t_enable;
}
c_World.m_mShadowsEnabled=false;
c_World.m_Shadows=function(){
	return c_World.m_mShadowsEnabled;
}
c_World.m_mFramebuffer=null;
c_World.m_mShadowsRange=0;
c_World.m_mShadowsSunDist=0;
c_World.m_Shadows2=function(t_enable,t_range,t_sunDistance,t_shadowTexSize){
	c_World.m_mShadowsEnabled=t_enable;
	if((c_World.m_mFramebuffer)!=null){
		c_World.m_mFramebuffer.p_Discard();
	}
	if(t_enable){
		if(t_sunDistance==0.0){
			t_sunDistance=t_range*0.5;
		}
		if(t_shadowTexSize<=0){
			t_shadowTexSize=1024;
		}
		c_World.m_mShadowsRange=t_range;
		c_World.m_mShadowsSunDist=t_sunDistance;
		t_shadowTexSize=bb_math_Min(t_shadowTexSize,c_Graphics.m_MaxTextureSize());
		c_World.m_mFramebuffer=c_Framebuffer.m_new.call(new c_Framebuffer,t_shadowTexSize,t_shadowTexSize,true);
	}
}
c_World.m_mLastMillisecs=0;
c_World.m_Init=function(t_numLights){
	if(t_numLights<=0){
		t_numLights=1;
	}
	if(c_Renderer.m_Init(t_numLights,75)){
		c_Cache.m__Push();
		c_World.m_mSkybox=c_Mesh.m_CreateSkybox();
		c_World.m_mSkybox.p_Material(0).p_Shader(c_Shader.m__Skybox());
		c_World.m_mSkybox.p_Material(0).p_DepthWrite(false);
		c_World.m_SunRotation(45.0,-45.0);
		c_World.m_SunColor2(-1);
		c_World.m_Ambient2(c_Color2.m_RGB(75,75,75,255));
		c_World.m_FogEnabled2(false);
		c_World.m_FogMinDistance2(600.0);
		c_World.m_FogMaxDistance2(1000.0);
		c_World.m_FogColor2(-16777216);
		c_World.m_SeparateDepthPass2(false);
		c_World.m_Shadows2(false,500.0,0.0,1024);
		c_World.m_mLastMillisecs=bb_app_Millisecs();
		return true;
	}else{
		c_World.m_mLastMillisecs=bb_app_Millisecs();
		return false;
	}
}
c_World.m_mEntities=null;
c_World.m__AddEntity=function(t_e){
	c_World.m_mEntities.p_AddLast(t_e);
}
c_World.m_mCameras=null;
c_World.m__AddCamera=function(t_c){
	c_World.m_mCameras.p_AddLast2(t_c);
}
c_World.m__FreeCamera=function(t_c){
	c_World.m_mCameras.p_RemoveFirst3(t_c);
}
c_World.m_mColBoxes=[];
c_World.m__CheckStaticCollision=function(t_x,t_y,t_z,t_sqRadius){
	var t_=c_World.m_mColBoxes;
	var t_2=0;
	while(t_2<t_.length){
		var t_box=t_[t_2];
		t_2=t_2+1;
		if(c_Collision.m_BoxSphere(t_box.p_Min()[0],t_box.p_Min()[1],t_box.p_Min()[2],t_box.p_Max()[0],t_box.p_Max()[1],t_box.p_Max()[2],t_x,t_y,t_z,t_sqRadius)){
			return true;
		}
	}
	return false;
}
c_World.m__Entities=function(){
	return c_World.m_mEntities;
}
c_World.m_mEnabledEntities=null;
c_World.m__EntityNeedsUpdate=function(t_e,t_update){
	if(t_update){
		if(!c_World.m_mEnabledEntities.p_Contains3(t_e)){
			c_World.m_mEnabledEntities.p_AddLast(t_e);
		}
	}else{
		c_World.m_mEnabledEntities.p_RemoveFirst2(t_e);
	}
}
c_World.m_mVisibleEntities=null;
c_World.m__EntitySetVisible=function(t_e,t_visible){
	if(t_visible){
		if(!c_World.m_mVisibleEntities.p_Contains3(t_e)){
			c_World.m_mVisibleEntities.p_AddLast(t_e);
		}
	}else{
		c_World.m_mVisibleEntities.p_RemoveFirst2(t_e);
	}
}
c_World.m__FreeEntity=function(t_e){
	c_World.m__EntityNeedsUpdate(t_e,false);
	c_World.m__EntitySetVisible(t_e,false);
	c_World.m_mEntities.p_RemoveFirst2(t_e);
}
c_World.m_rtProjectionTransform=[];
c_World.m_rtNormPoint=[];
c_World.m_rtViewTransform=[];
c_World.m_rtInverseViewTransform=[];
c_World.m_mPickedEntity=null;
c_World.m_mPickedSurface=null;
c_World.m_mPickedTriangle=0;
c_World.m_mPickedDistance=0;
c_World.m_rtTraceInfo=null;
c_World.m_mPickedPoint=[];
c_World.m_mPickedNormal=[];
c_World.m_RayTrace=function(t_rayOrigin,t_rayDirection,t_maxDistance){
	c_World.m_mPickedEntity=null;
	c_World.m_mPickedSurface=null;
	c_World.m_mPickedTriangle=-1;
	c_World.m_mPickedDistance=10000000000.0;
	var t_minDistance=10000000000.0;
	var t_=c_World.m_mEntities.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_targetEntity=t_.p_NextObject();
		if(!(t_targetEntity.p_Visible() && t_targetEntity.p_Pickable())){
			continue;
		}
		if(!t_targetEntity.p_RayTrace2((c_World.m_rtTraceInfo),t_rayOrigin,t_rayDirection,t_maxDistance)){
			continue;
		}
		if(c_World.m_rtTraceInfo.m_mDistance>=t_minDistance){
			continue;
		}
		t_minDistance=c_World.m_rtTraceInfo.m_mDistance;
		c_World.m_mPickedEntity=t_targetEntity;
		c_World.m_mPickedSurface=c_World.m_rtTraceInfo.m_mSurface;
		c_World.m_mPickedTriangle=c_World.m_rtTraceInfo.m_mTriangle;
		c_World.m_mPickedDistance=c_World.m_rtTraceInfo.m_mDistance;
		c_World.m_mPickedPoint[0]=c_World.m_rtTraceInfo.m_mPoint[0];
		c_World.m_mPickedPoint[1]=c_World.m_rtTraceInfo.m_mPoint[1];
		c_World.m_mPickedPoint[2]=c_World.m_rtTraceInfo.m_mPoint[2];
		c_World.m_mPickedNormal[0]=c_World.m_rtTraceInfo.m_mNormal[0];
		c_World.m_mPickedNormal[1]=c_World.m_rtTraceInfo.m_mNormal[1];
		c_World.m_mPickedNormal[2]=c_World.m_rtTraceInfo.m_mNormal[2];
	}
	return c_World.m_mPickedEntity!=null;
}
c_World.m_CameraPick=function(t_cameraEntity,t_screenX,t_screenY){
	bb_math3d_Mat4PerspectiveLH(t_cameraEntity.p_FovY(),t_cameraEntity.p_AspectRatio(),t_cameraEntity.p_Near(),t_cameraEntity.p_Far(),c_World.m_rtProjectionTransform);
	c_World.m_rtNormPoint[0]=((t_screenX)*2.0/(t_cameraEntity.p_ViewportWidth())-1.0)/c_World.m_rtProjectionTransform[0];
	c_World.m_rtNormPoint[1]=(1.0-(t_screenY)*2.0/(t_cameraEntity.p_ViewportHeight()))/c_World.m_rtProjectionTransform[5];
	c_World.m_rtNormPoint[2]=1.0;
	bb_math3d_Mat4ViewEuler(t_cameraEntity.p_WorldX(),t_cameraEntity.p_WorldY(),t_cameraEntity.p_WorldZ(),t_cameraEntity.p_Pitch(),t_cameraEntity.p_Yaw(),t_cameraEntity.p_Roll(),c_World.m_rtViewTransform);
	bb_math3d_Mat4Invert(c_World.m_rtViewTransform,c_World.m_rtInverseViewTransform);
	var t_rayOrigin=new_number_array(3);
	t_rayOrigin[0]=c_World.m_rtInverseViewTransform[12];
	t_rayOrigin[1]=c_World.m_rtInverseViewTransform[13];
	t_rayOrigin[2]=c_World.m_rtInverseViewTransform[14];
	var t_rayDirection=new_number_array(3);
	bb_math3d_Vec3TransformNormal(t_rayDirection,c_World.m_rtNormPoint,c_World.m_rtInverseViewTransform);
	return c_World.m_RayTrace(t_rayOrigin,t_rayDirection,0.0);
}
c_World.m_PickedEntity=function(){
	return c_World.m_mPickedEntity;
}
c_World.m_mDeltaTime=0;
c_World.m_DeltaTime=function(){
	return c_World.m_mDeltaTime;
}
c_World.m_Update=function(){
	c_World.m_mDeltaTime=(bb_app_Millisecs()-c_World.m_mLastMillisecs)/1000.0;
	c_World.m_mLastMillisecs=bb_app_Millisecs();
	var t_=c_World.m_mEnabledEntities.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_e=t_.p_NextObject();
		t_e.p__Update();
	}
	c_Listener.m__Update();
}
c_World.m_mLights=null;
c_World.m_mTempArr=[];
c_World.m_mDepthProj=[];
c_World.m_mDepthView=[];
c_World.m__RenderSkybox=function(t_x,t_y,t_z){
	bb_math3d_Mat4TransformEuler(t_x,t_y,t_z,0.0,0.0,0.0,10.0,10.0,10.0,c_RenderState.m_ModelMatrix);
	c_World.m_mSkybox.p_Material(0).p__PrepareForRender(3);
	c_World.m_mSkybox.p_Surface(0).p__Render();
}
c_World.m_DepthTexture=function(){
	if((c_World.m_mFramebuffer)!=null){
		return c_World.m_mFramebuffer.p_ColorTexture2();
	}else{
		return null;
	}
}
c_World.m_Render=function(){
	c_Graphics.m__UpdateFPS();
	var t_numRenderCalls=0;
	var t_sunLightEnabled=false;
	if(c_World.m_mSunColor!=-16777216){
		t_sunLightEnabled=true;
	}
	var t_numLights=bb_math_Min(c_World.m_mLights.p_Count()+((t_sunLightEnabled)?1:0),c_Renderer.m_MaxLights());
	var t_=c_World.m_mCameras.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_c=t_.p_NextObject();
		if(c_World.m_mShadowsEnabled && c_Shader.m__Shadow().p_Handle()!=0){
			bb_math3d_QuatSetEuler(t_c.p_Pitch(),t_c.p_Yaw(),t_c.p_Roll(),c_World.m_mTempArr);
			bb_math3d_QuatMulVec3(c_World.m_mTempArr[0],c_World.m_mTempArr[1],c_World.m_mTempArr[2],c_World.m_mTempArr[3],0.0,0.0,c_World.m_mShadowsRange/2.0,c_World.m_mTempArr);
			bb_math3d_Vec3Add(t_c.p_WorldX(),t_c.p_WorldY(),t_c.p_WorldZ(),c_World.m_mTempArr[0],c_World.m_mTempArr[1],c_World.m_mTempArr[2],c_World.m_mTempArr);
			var t_lookx=c_World.m_mTempArr[0];
			var t_looky=c_World.m_mTempArr[1];
			var t_lookz=c_World.m_mTempArr[2];
			bb_math3d_QuatSetEuler(c_World.m_mSunPitch,c_World.m_mSunYaw,0.0,c_World.m_mTempArr);
			bb_math3d_QuatMulVec3(c_World.m_mTempArr[0],c_World.m_mTempArr[1],c_World.m_mTempArr[2],c_World.m_mTempArr[3],0.0,0.0,-c_World.m_mShadowsSunDist,c_World.m_mTempArr);
			bb_math3d_Vec3Add(c_World.m_mTempArr[0],c_World.m_mTempArr[1],c_World.m_mTempArr[2],t_lookx,t_looky,t_lookz,c_World.m_mTempArr);
			bb_math3d_Mat4OrthoHeightLH(c_World.m_mShadowsRange,1.0,0.0,c_World.m_mShadowsSunDist*2.0,c_World.m_mDepthProj);
			bb_math3d_Mat4LookAtLH(c_World.m_mTempArr[0],c_World.m_mTempArr[1],c_World.m_mTempArr[2],t_lookx,t_looky,t_lookz,0.0,1.0,0.0,c_World.m_mDepthView);
			c_World.m_mFramebuffer.p_Use();
			c_Renderer.m_Setup3D(0,0,c_World.m_mFramebuffer.p_ColorTexture2().p_Width(),c_World.m_mFramebuffer.p_ColorTexture2().p_Height());
			c_Shader.m__CurrentDefault(c_Shader.m__Shadow());
			bb_math3d_Mat4Copy(c_World.m_mDepthProj,c_RenderState.m_ProjectionMatrix);
			bb_math3d_Mat4Copy(c_World.m_mDepthView,c_RenderState.m_ViewMatrix);
			c_Renderer.m_ClearColorBuffer(-1);
			c_Renderer.m_ClearDepthBuffer();
			var t_2=c_World.m_mVisibleEntities.p_ObjectEnumerator();
			while(t_2.p_HasNext()){
				var t_e=t_2.p_NextObject();
				t_numRenderCalls+=t_e.p__Render2(0);
			}
			c_Framebuffer.m_UseScreen();
		}
		t_c.p__PrepareForRender2();
		c_RenderState.m_SeparateDepthPass=c_World.m_mSeparateDepthPass;
		if(c_World.m_mSeparateDepthPass){
			c_Shader.m__CurrentDefault(c_Shader.m__Shadow());
			c_Renderer.m_SetDepthWrite(true);
			var t_3=c_World.m_mVisibleEntities.p_ObjectEnumerator();
			while(t_3.p_HasNext()){
				var t_e2=t_3.p_NextObject();
				t_numRenderCalls+=t_e2.p__Render2(1);
			}
			c_Shader.m__CurrentDefault(c_Shader.m__Default3D());
		}
		c_RenderState.m_FogEnabled=c_World.m_mFogEnabled;
		c_RenderState.m_FogColor=c_World.m_mFogColor;
		c_RenderState.m_FogMinDistance=c_World.m_mFogMin;
		c_RenderState.m_FogMaxDistance=c_World.m_mFogMax;
		c_RenderState.m_NumLights=t_numLights;
		if(c_World.m_mShadowsEnabled && c_Shader.m__Shadow().p_Handle()!=0){
			bb_math3d_Mat4Identity(c_RenderState.m_DepthBiasMatrix);
			c_RenderState.m_DepthBiasMatrix[0]=0.5;
			c_RenderState.m_DepthBiasMatrix[5]=0.5;
			c_RenderState.m_DepthBiasMatrix[10]=0.5;
			c_RenderState.m_DepthBiasMatrix[12]=0.5;
			c_RenderState.m_DepthBiasMatrix[13]=0.5;
			c_RenderState.m_DepthBiasMatrix[14]=0.5;
			bb_math3d_Mat4Mul(c_RenderState.m_DepthBiasMatrix,c_World.m_mDepthProj,c_RenderState.m_DepthBiasMatrix);
			bb_math3d_Mat4Mul(c_RenderState.m_DepthBiasMatrix,c_World.m_mDepthView,c_RenderState.m_DepthBiasMatrix);
			c_RenderState.m_ShadowsEnabled=true;
			c_RenderState.m_DepthEpsilon=c_World.m_mShadowsRange/10000.0;
			c_Renderer.m_SetDepthTexture(c_World.m_DepthTexture().p_Handle());
		}else{
			c_RenderState.m_ShadowsEnabled=false;
		}
		if(t_numLights>0){
			c_RenderState.m_Ambient=c_World.m_mAmbient;
		}
		if(t_sunLightEnabled){
			bb_math3d_QuatSetEuler(c_World.m_mSunPitch,c_World.m_mSunYaw,0.0,c_World.m_mTempArr);
			bb_math3d_QuatMulVec3(c_World.m_mTempArr[0],c_World.m_mTempArr[1],c_World.m_mTempArr[2],c_World.m_mTempArr[3],0.0,0.0,-1.0,c_World.m_mTempArr);
			bb_math3d_Mat4MulVec4(c_RenderState.m_ViewMatrix,c_World.m_mTempArr[0],c_World.m_mTempArr[1],c_World.m_mTempArr[2],0.0,c_RenderState.m_LightPos[0]);
			c_RenderState.m_LightColor[0]=c_World.m_mSunColor;
		}
		if(t_numLights>((t_sunLightEnabled)?1:0)){
			var t_i=((t_sunLightEnabled)?1:0);
			var t_4=c_World.m_mLights.p_ObjectEnumerator();
			while(t_4.p_HasNext()){
				var t_l=t_4.p_NextObject();
				if(t_i>=t_numLights){
					break;
				}
				t_l.p__PrepareForRender(t_i);
				t_i+=1;
			}
		}
		if(c_World.m_mSeparateDepthPass){
			c_Renderer.m_SetDepthWrite(false);
		}
		for(var t_step_=1;t_step_<4;t_step_=t_step_+1){
			var t_5=c_World.m_mVisibleEntities.p_ObjectEnumerator();
			while(t_5.p_HasNext()){
				var t_e3=t_5.p_NextObject();
				t_numRenderCalls+=t_e3.p__Render2(t_step_);
			}
		}
		c_Graphics.m__SetRenderCalls(t_numRenderCalls);
	}
	c_Framebuffer.m_UseScreen();
}
c_World.m__AddLight=function(t_l){
	c_World.m_mLights.p_AddLast11(t_l);
}
c_World.m__FreeLight=function(t_l){
	c_World.m_mLights.p_RemoveFirst7(t_l);
}
function c_Renderer(){
	Object.call(this);
}
c_Renderer.m_mMaxLights=0;
c_Renderer.m_mMaxBones=0;
c_Renderer.m_MaxLights=function(){
	return c_Renderer.m_mMaxLights;
}
c_Renderer.m_MaxBones=function(){
	return c_Renderer.m_mMaxBones;
}
c_Renderer.m_mShaderError="";
c_Renderer.m_FreeShader=function(t_shader){
	gl.deleteProgram(t_shader);
}
c_Renderer.m_CreateShader=function(t_vertex,t_fragment){
	var t_retCode=new_number_array(1);
	var t_vshader=gl.createShader(35633);
	gl.shaderSource(t_vshader,t_vertex);
	gl.compileShader(t_vshader);
	c_Renderer.m_mShaderError=gl.getShaderInfoLog(t_vshader);
	_glGetShaderiv(t_vshader,35713,t_retCode);
	if(t_retCode[0]==0){
		gl.deleteShader(t_vshader);
		return 0;
	}
	var t_fshader=gl.createShader(35632);
	gl.shaderSource(t_fshader,t_fragment);
	gl.compileShader(t_fshader);
	c_Renderer.m_mShaderError=c_Renderer.m_mShaderError+("\n"+gl.getShaderInfoLog(t_fshader));
	_glGetShaderiv(t_fshader,35713,t_retCode);
	if(t_retCode[0]==0){
		gl.deleteShader(t_vshader);
		gl.deleteShader(t_fshader);
		return 0;
	}
	var t_program=gl.createProgram();
	gl.attachShader(t_program,t_vshader);
	gl.attachShader(t_program,t_fshader);
	gl.linkProgram(t_program);
	gl.deleteShader(t_vshader);
	gl.deleteShader(t_fshader);
	_glGetProgramiv(t_program,35714,t_retCode);
	if(t_retCode[0]==0){
		c_Renderer.m_mShaderError=gl.getProgramInfoLog(t_program);
		c_Renderer.m_FreeShader(t_program);
		return 0;
	}
	return t_program;
}
c_Renderer.m_ShaderError=function(){
	return c_Renderer.m_mShaderError;
}
c_Renderer.m_ShaderLocation=function(t_shader,t_name){
	return _glGetUniformLocation(t_shader,t_name);
}
c_Renderer.m_ShaderAttribLocation=function(t_shader,t_name){
	return gl.getAttribLocation(t_shader,t_name);
}
c_Renderer.m_mEllipseBuffer=0;
c_Renderer.m_FreeBuffer=function(t_buffer){
	gl.deleteBuffer(t_buffer);
}
c_Renderer.m_mLineBuffer=0;
c_Renderer.m_mRectBuffer=0;
c_Renderer.m_ResizeVertexBuffer=function(t_buffer,t_size){
	_glBindBuffer(34962,t_buffer);
	_glBufferData(34962,t_size,null,35044);
	_glBindBuffer(34962,0);
}
c_Renderer.m_CreateVertexBuffer=function(t_size){
	var t_buffer=gl.createBuffer();
	if(t_size>0){
		c_Renderer.m_ResizeVertexBuffer(t_buffer,t_size);
	}
	return t_buffer;
}
c_Renderer.m_SetVertexBufferData=function(t_buffer,t_offset,t_size,t_data){
	_glBindBuffer(34962,t_buffer);
	_glBufferSubData(34962,t_offset,t_size,t_data,0);
	_glBindBuffer(34962,0);
}
c_Renderer.m_mFramebufferHeight=0;
c_Renderer.m_SetCulling=function(t_enable){
	if(t_enable){
		gl.enable(2884);
	}else{
		gl.disable(2884);
	}
}
c_Renderer.m_SetDepthWrite=function(t_enable){
	gl.depthMask(t_enable);
}
c_Renderer.m_BlendMode=function(t_mode){
	c_RenderState.m_BlendMode=t_mode;
	var t_1=t_mode;
	if(t_1==0){
		gl.blendFunc(1,0);
	}else{
		if(t_1==1){
			gl.blendFunc(770,771);
		}else{
			if(t_1==2){
				gl.blendFunc(770,1);
			}else{
				if(t_1==3){
					gl.blendFunc(774,0);
				}
			}
		}
	}
}
c_Renderer.m_Color=function(t_color){
	c_RenderState.m_Color=t_color;
}
c_Renderer.m_SetTextures=function(t_diffuseTex,t_normalTex,t_shininessTex,t_lightmap,t_cubeTex){
	gl.activeTexture(33984);
	_glBindTexture(3553,t_diffuseTex);
	gl.activeTexture(33985);
	_glBindTexture(3553,t_normalTex);
	gl.activeTexture(33986);
	_glBindTexture(3553,t_shininessTex);
	gl.activeTexture(33987);
	_glBindTexture(3553,t_lightmap);
	gl.activeTexture(33988);
	_glBindTexture(34067,t_cubeTex);
	gl.activeTexture(33984);
	c_RenderState.m_UseColorTex=t_diffuseTex!=0;
	c_RenderState.m_UseNormalTex=t_normalTex!=0;
	c_RenderState.m_UseShininessTex=t_shininessTex!=0;
	c_RenderState.m_UseLightTex=t_lightmap!=0;
	c_RenderState.m_UseCubeTex=t_cubeTex!=0;
}
c_Renderer.m_UseShader=function(t_shader){
	gl.useProgram(t_shader);
}
c_Renderer.m_SetShaderMat4=function(t_loc,t_m){
	if(t_loc!=-1){
		_glUniformMatrix4fv(t_loc,1,false,t_m);
	}
}
c_Renderer.m_SetShaderInt=function(t_loc,t_x){
	if(t_loc!=-1){
		gl.uniform1i(t_loc,t_x);
	}
}
c_Renderer.m_SetShaderFloat=function(t_loc,t_x){
	if(t_loc!=-1){
		gl.uniform1f(t_loc,t_x);
	}
}
c_Renderer.m_SetShaderVec4=function(t_loc,t_x,t_y,t_z,t_w){
	if(t_loc!=-1){
		gl.uniform4f(t_loc,t_x,t_y,t_z,t_w);
	}
}
c_Renderer.m_SetShaderVec3=function(t_loc,t_x,t_y,t_z){
	if(t_loc!=-1){
		gl.uniform3f(t_loc,t_x,t_y,t_z);
	}
}
c_Renderer.m_Setup3D=function(t_x,t_y,t_w,t_h){
	var t_fbHeight=c_Renderer.m_mFramebufferHeight;
	if(t_fbHeight==0){
		t_fbHeight=bb_app_DeviceHeight();
	}
	gl.enable(3042);
	gl.enable(2929);
	gl.enable(3089);
	gl.depthFunc(515);
	c_RenderState.m_NumLights=0;
	c_Renderer.m_SetCulling(true);
	gl.frontFace(2304);
	c_Renderer.m_SetDepthWrite(true);
	c_Renderer.m_BlendMode(0);
	c_Renderer.m_Color(-1);
	c_Renderer.m_SetTextures(0,0,0,0,0);
	c_RenderState.m_Skinned=false;
	t_y=t_fbHeight-t_y-t_h;
	gl.viewport(t_x,t_y,t_w,t_h);
	gl.scissor(t_x,t_y,t_w,t_h);
	bb_math3d_Mat4Identity(c_RenderState.m_TextureMatrix);
	c_RenderState.m_ShadowsEnabled=false;
	c_Shader.m__CurrentDefault(c_Shader.m__Default3D());
}
c_Renderer.m_Init=function(t_numLights,t_numBones){
	c_RenderState.m_LightPos=new_array_array(t_numLights);
	for(var t_i=0;t_i<t_numLights;t_i=t_i+1){
		c_RenderState.m_LightPos[t_i]=[0.0,0.0,0.0,0.0];
	}
	c_RenderState.m_LightColor=new_number_array(t_numLights);
	c_RenderState.m_LightRadius=new_number_array(t_numLights);
	c_RenderState.m_Color=-1;
	c_Renderer.m_mMaxLights=t_numLights;
	c_Renderer.m_mMaxBones=t_numBones;
	c_Shader.m__Default2D();
	c_Shader.m__Shadow();
	c_Shader.m__Skybox();
	c_Shader.m__Minimal();
	c_Shader.m__MinimalShadows();
	c_Shader.m__VertexLighting();
	c_Shader.m__PixelLighting();
	if(c_Shader.m__Default2D().p_Handle()==0){
		return false;
	}
	if(c_Shader.m__Skybox().p_Handle()==0){
		return false;
	}
	if(c_Shader.m__Minimal().p_Handle()==0){
		return false;
	}
	if(c_Renderer.m_mEllipseBuffer!=0){
		c_Renderer.m_FreeBuffer(c_Renderer.m_mEllipseBuffer);
	}
	if(c_Renderer.m_mLineBuffer!=0){
		c_Renderer.m_FreeBuffer(c_Renderer.m_mLineBuffer);
	}
	if(c_Renderer.m_mRectBuffer!=0){
		c_Renderer.m_FreeBuffer(c_Renderer.m_mRectBuffer);
	}
	var t_dataBuffer=c_DataBuffer.m_new.call(new c_DataBuffer,768,true);
	var t_inc=5.625;
	for(var t_i2=0;t_i2<64;t_i2=t_i2+1){
		var t_x=0.5+0.5*Math.cos(((t_i2)*t_inc)*D2R);
		var t_y=0.5+0.5*Math.sin(((t_i2)*t_inc)*D2R);
		t_dataBuffer.PokeFloat(t_i2*12,t_x);
		t_dataBuffer.PokeFloat(t_i2*12+4,t_y);
		t_dataBuffer.PokeFloat(t_i2*12+8,0.0);
	}
	c_Renderer.m_mEllipseBuffer=c_Renderer.m_CreateVertexBuffer(t_dataBuffer.Length());
	c_Renderer.m_SetVertexBufferData(c_Renderer.m_mEllipseBuffer,0,t_dataBuffer.Length(),t_dataBuffer);
	t_dataBuffer.Discard();
	t_dataBuffer=c_DataBuffer.m_new.call(new c_DataBuffer,24,true);
	t_dataBuffer.PokeFloat(0,0.0);
	t_dataBuffer.PokeFloat(4,0.0);
	t_dataBuffer.PokeFloat(8,0.0);
	t_dataBuffer.PokeFloat(12,1.0);
	t_dataBuffer.PokeFloat(16,1.0);
	t_dataBuffer.PokeFloat(20,0.0);
	c_Renderer.m_mLineBuffer=c_Renderer.m_CreateVertexBuffer(t_dataBuffer.Length());
	c_Renderer.m_SetVertexBufferData(c_Renderer.m_mLineBuffer,0,t_dataBuffer.Length(),t_dataBuffer);
	t_dataBuffer.Discard();
	t_dataBuffer=c_DataBuffer.m_new.call(new c_DataBuffer,112,true);
	t_dataBuffer.PokeFloat(0,0.0);
	t_dataBuffer.PokeFloat(4,0.0);
	t_dataBuffer.PokeFloat(8,0.0);
	t_dataBuffer.PokeFloat(12,1.0);
	t_dataBuffer.PokeFloat(16,0.0);
	t_dataBuffer.PokeFloat(20,0.0);
	t_dataBuffer.PokeFloat(24,1.0);
	t_dataBuffer.PokeFloat(28,1.0);
	t_dataBuffer.PokeFloat(32,0.0);
	t_dataBuffer.PokeFloat(36,0.0);
	t_dataBuffer.PokeFloat(40,1.0);
	t_dataBuffer.PokeFloat(44,0.0);
	c_Renderer.m_mRectBuffer=c_Renderer.m_CreateVertexBuffer(t_dataBuffer.Length());
	c_Renderer.m_SetVertexBufferData(c_Renderer.m_mRectBuffer,0,t_dataBuffer.Length(),t_dataBuffer);
	t_dataBuffer.Discard();
	c_Renderer.m_mFramebufferHeight=bb_app_DeviceHeight();
	c_Renderer.m_Setup3D(0,0,bb_app_DeviceWidth(),bb_app_DeviceHeight());
	return true;
}
c_Renderer.m_ResizeIndexBuffer=function(t_buffer,t_size){
	_glBindBuffer(34963,t_buffer);
	_glBufferData(34963,t_size,null,35044);
	_glBindBuffer(34963,0);
}
c_Renderer.m_CreateIndexBuffer=function(t_size){
	var t_buffer=gl.createBuffer();
	if(t_size>0){
		c_Renderer.m_ResizeIndexBuffer(t_buffer,t_size);
	}
	return t_buffer;
}
c_Renderer.m_SetIndexBufferData=function(t_buffer,t_offset,t_size,t_data){
	_glBindBuffer(34963,t_buffer);
	_glBufferSubData(34963,t_offset,t_size,t_data,0);
	_glBindBuffer(34963,0);
}
c_Renderer.m_FreeTexture=function(t_texture){
	gl.deleteTexture(t_texture);
}
c_Renderer.m_FreeRenderbuffer=function(t_rb){
	gl.deleteRenderbuffer(t_rb);
}
c_Renderer.m_FreeFramebuffer=function(t_fb){
	gl.deleteFramebuffer(t_fb);
}
c_Renderer.m_mTempArray=[];
c_Renderer.m_MaxTextureSize=function(){
	_glGetIntegerv(3379,c_Renderer.m_mTempArray);
	return c_Renderer.m_mTempArray[0];
}
c_Renderer.m_CreateTexture=function(t_width,t_height){
	var t_texture=gl.createTexture();
	_glBindTexture(3553,t_texture);
	gl.texParameteri(3553,10240,9728);
	gl.texParameteri(3553,10241,9728);
	_glTexImage2D(3553,0,6408,t_width,t_height,0,6408,5121,null);
	return t_texture;
}
c_Renderer.m_MagFilter=function(t_filtering){
	var t_4=t_filtering;
	if(t_4==0){
		return 9728;
	}else{
		if(t_4==1){
			return 9729;
		}else{
			if(t_4==2){
				return 9729;
			}else{
				if(t_4==3){
					return 9729;
				}else{
					return 9729;
				}
			}
		}
	}
}
c_Renderer.m_MinFilter=function(t_filtering,t_isCubeMap){
	var t_5=t_filtering;
	if(t_5==0){
		return 9728;
	}else{
		if(t_5==1){
			return 9729;
		}else{
			if(t_5==2){
				if(!t_isCubeMap){
					return 9985;
				}else{
					return 9729;
				}
			}else{
				if(t_5==3){
					if(!t_isCubeMap){
						return 9987;
					}else{
						return 9729;
					}
				}else{
					return 9729;
				}
			}
		}
	}
}
c_Renderer.m_CreateTexture2=function(t_buffer,t_width,t_height,t_filter){
	var t_texture=gl.createTexture();
	_glBindTexture(3553,t_texture);
	gl.texParameteri(3553,10240,c_Renderer.m_MagFilter(t_filter));
	gl.texParameteri(3553,10241,c_Renderer.m_MinFilter(t_filter,false));
	_glTexImage2D(3553,0,6408,t_width,t_height,0,6408,5121,t_buffer);
	if(t_filter>1){
		_glGenerateMipmap(3553);
	}
	return t_texture;
}
c_Renderer.m_CreateRenderbuffer=function(t_width,t_height){
	var t_rb=gl.createRenderbuffer();
	_glBindRenderbuffer(36161,t_rb);
	gl.renderbufferStorage(36161,33189,t_width,t_height);
	_glBindRenderbuffer(36161,0);
	return t_rb;
}
c_Renderer.m_SetFramebuffer=function(t_fb,t_height){
	_glBindFramebuffer(36160,t_fb);
	if(t_fb!=0){
		c_Renderer.m_mFramebufferHeight=t_height;
	}else{
		c_Renderer.m_mFramebufferHeight=0;
	}
}
c_Renderer.m_CreateFramebuffer=function(t_colorTex,t_depthBuffer){
	var t_fb=gl.createFramebuffer();
	c_Renderer.m_SetFramebuffer(t_fb,c_Renderer.m_mFramebufferHeight);
	gl.framebufferTexture2D(36160,36064,3553,t_colorTex,0);
	if(t_depthBuffer!=0){
		gl.framebufferRenderbuffer(36160,36096,36161,t_depthBuffer);
	}
	c_Renderer.m_SetFramebuffer(0,c_Renderer.m_mFramebufferHeight);
	return t_fb;
}
c_Renderer.m_LoadTexture=function(t_filename,t_size,t_filter){
	if(t_size.length>=2){
		var t_img=bb_graphics_LoadImage(t_filename,1,c_Image.m_DefaultFlags);
		if(t_img!=null){
			t_size[0]=t_img.p_Width();
			t_size[1]=t_img.p_Height();
			t_img.p_Discard();
		}else{
			t_size[0]=0;
			t_size[1]=0;
			return 0;
		}
	}
	if(String.fromCharCode(t_filename.charCodeAt(0))!="/" && String.fromCharCode(t_filename.charCodeAt(1))!=":"){
		t_filename="cerberus://data/"+t_filename;
	}
	var t_texture=gl.createTexture();
	_glBindTexture(3553,t_texture);
	gl.texParameteri(3553,10240,c_Renderer.m_MagFilter(t_filter));
	gl.texParameteri(3553,10241,c_Renderer.m_MinFilter(t_filter,false));
	_glTexImage2D3(3553,0,6408,6408,5121,t_filename);
	if(t_filter>1){
		_glGenerateMipmap(3553);
	}
	return t_texture;
}
c_Renderer.m_LoadCubicTexture=function(t_left,t_right,t_front,t_back,t_top,t_bottom,t_size,t_filter){
	if(t_size.length>=2){
		var t_img=bb_graphics_LoadImage(t_left,1,c_Image.m_DefaultFlags);
		if(t_img!=null){
			t_size[0]=t_img.p_Width();
			t_size[1]=t_img.p_Height();
			t_img.p_Discard();
		}else{
			t_size[0]=0;
			t_size[1]=0;
			return 0;
		}
	}
	if(String.fromCharCode(t_left.charCodeAt(0))!="/" && String.fromCharCode(t_left.charCodeAt(1))!=":"){
		t_left="cerberus://data/"+t_left;
	}
	if(String.fromCharCode(t_right.charCodeAt(0))!="/" && String.fromCharCode(t_right.charCodeAt(1))!=":"){
		t_right="cerberus://data/"+t_right;
	}
	if(String.fromCharCode(t_front.charCodeAt(0))!="/" && String.fromCharCode(t_front.charCodeAt(1))!=":"){
		t_front="cerberus://data/"+t_front;
	}
	if(String.fromCharCode(t_back.charCodeAt(0))!="/" && String.fromCharCode(t_back.charCodeAt(1))!=":"){
		t_back="cerberus://data/"+t_back;
	}
	if(String.fromCharCode(t_top.charCodeAt(0))!="/" && String.fromCharCode(t_top.charCodeAt(1))!=":"){
		t_top="cerberus://data/"+t_top;
	}
	if(String.fromCharCode(t_bottom.charCodeAt(0))!="/" && String.fromCharCode(t_bottom.charCodeAt(1))!=":"){
		t_bottom="cerberus://data/"+t_bottom;
	}
	var t_texture=gl.createTexture();
	_glBindTexture(34067,t_texture);
	gl.texParameteri(34067,10242,33071);
	gl.texParameteri(34067,10243,33071);
	gl.texParameteri(34067,10240,c_Renderer.m_MagFilter(t_filter));
	gl.texParameteri(34067,10241,c_Renderer.m_MinFilter(t_filter,true));
	_glTexImage2D3(34070,0,6408,6408,5121,t_left);
	_glTexImage2D3(34069,0,6408,6408,5121,t_right);
	_glTexImage2D3(34074,0,6408,6408,5121,t_back);
	_glTexImage2D3(34073,0,6408,6408,5121,t_front);
	_glTexImage2D3(34071,0,6408,6408,5121,t_top);
	_glTexImage2D3(34072,0,6408,6408,5121,t_bottom);
	if(t_filter>1){
		_glGenerateMipmap(34067);
	}
	return t_texture;
}
c_Renderer.m_ClearColorBuffer=function(t_col){
	gl.clearColor((c_Color2.m_R(t_col))/255.0,(c_Color2.m_G(t_col))/255.0,(c_Color2.m_B(t_col))/255.0,(c_Color2.m_A(t_col))/255.0);
	gl.clear(16384);
}
c_Renderer.m_ClearDepthBuffer=function(){
	gl.clear(256);
}
c_Renderer.m_ShaderEnableAttrib=function(t_loc,t_size,t_stride,t_offset){
	if(t_loc==-1){
		return;
	}
	gl.enableVertexAttribArray(t_loc);
	gl.vertexAttribPointer(t_loc,t_size,5126,false,t_stride,t_offset);
}
c_Renderer.m_ShaderDisableAttrib=function(t_loc){
	if(t_loc==-1){
		return;
	}
	gl.disableVertexAttribArray(t_loc);
}
c_Renderer.m_DrawBuffers=function(t_vertexBuffer,t_indexBuffer,t_numIndices,t_coordsOffset,t_normalsOffset,t_tangentsOffset,t_colorsOffset,t_texCoordsOffset,t_boneIndicesOffset,t_boneWeightsOffset,t_stride,t_mode){
	var t_glMode=4;
	var t_2=t_mode;
	if(t_2==0){
		t_glMode=0;
	}else{
		if(t_2==1){
			t_glMode=1;
		}else{
			if(t_2==2){
				t_glMode=4;
			}else{
				if(t_2==3){
					t_glMode=5;
				}else{
					if(t_2==4){
						t_glMode=6;
					}
				}
			}
		}
	}
	_glGetIntegerv(34964,c_Renderer.m_mTempArray);
	var t_prevVertexBuffer=c_Renderer.m_mTempArray[0];
	_glGetIntegerv(34965,c_Renderer.m_mTempArray);
	var t_prevIndexBuffer=c_Renderer.m_mTempArray[0];
	_glBindBuffer(34962,t_vertexBuffer);
	_glBindBuffer(34963,t_indexBuffer);
	c_Shader.m__CurrentDefault2().p__EnableVertexVars(t_coordsOffset,t_normalsOffset,t_tangentsOffset,t_colorsOffset,t_texCoordsOffset,t_boneIndicesOffset,t_boneWeightsOffset,t_stride);
	if(t_indexBuffer!=0){
		gl.drawElements(t_glMode,t_numIndices,5123,0);
	}else{
		gl.drawArrays(t_glMode,0,t_numIndices);
	}
	c_Shader.m__CurrentDefault2().p__DisableVertexVars();
	_glBindBuffer(34962,t_prevVertexBuffer);
	_glBindBuffer(34963,t_prevIndexBuffer);
}
c_Renderer.m_SetDepthTexture=function(t_depthTex){
	if(t_depthTex!=0){
		gl.activeTexture(33989);
		_glBindTexture(3553,t_depthTex);
		gl.activeTexture(33984);
	}
}
c_Renderer.m_Setup2D=function(t_x,t_y,t_w,t_h){
	var t_fbHeight=c_Renderer.m_mFramebufferHeight;
	if(t_fbHeight==0){
		t_fbHeight=bb_app_DeviceHeight();
	}
	c_Renderer.m_SetCulling(false);
	gl.disable(2929);
	gl.enable(3042);
	gl.enable(3089);
	gl.frontFace(2304);
	c_Renderer.m_BlendMode(1);
	c_Renderer.m_Color(-1);
	c_Renderer.m_SetTextures(0,0,0,0,0);
	t_y=t_fbHeight-t_y-t_h;
	gl.viewport(t_x,t_y,t_w,t_h);
	gl.scissor(t_x,t_y,t_w,t_h);
	bb_math3d_Mat4OrthoLH(0.0,(t_w),(t_h),0.0,0.0,100.0,c_RenderState.m_ProjectionMatrix);
	bb_math3d_Mat4Identity(c_RenderState.m_ViewMatrix);
	bb_math3d_Mat4Identity(c_RenderState.m_ModelMatrix);
	bb_math3d_Mat4Identity(c_RenderState.m_TextureMatrix);
	c_Shader.m__CurrentDefault(c_Shader.m__Default2D());
}
c_Renderer.m_mTexDataBuffer=null;
c_Renderer.m_DrawRectEx=function(t_x,t_y,t_width,t_height,t_u0,t_v0,t_u1,t_v1){
	c_Renderer.m_mTexDataBuffer.PokeFloat(0,t_u0);
	c_Renderer.m_mTexDataBuffer.PokeFloat(4,t_v0);
	c_Renderer.m_mTexDataBuffer.PokeFloat(16,t_u1);
	c_Renderer.m_mTexDataBuffer.PokeFloat(20,t_v0);
	c_Renderer.m_mTexDataBuffer.PokeFloat(32,t_u1);
	c_Renderer.m_mTexDataBuffer.PokeFloat(36,t_v1);
	c_Renderer.m_mTexDataBuffer.PokeFloat(48,t_u0);
	c_Renderer.m_mTexDataBuffer.PokeFloat(52,t_v1);
	c_Renderer.m_SetVertexBufferData(c_Renderer.m_mRectBuffer,48,c_Renderer.m_mTexDataBuffer.Length(),c_Renderer.m_mTexDataBuffer);
	bb_math3d_Mat4TransformEuler(t_x,t_y,0.0,0.0,0.0,0.0,t_width,t_height,1.0,c_RenderState.m_ModelMatrix);
	c_Shader.m__CurrentDefault2().p__Prepare();
	c_Renderer.m_DrawBuffers(c_Renderer.m_mRectBuffer,0,4,0,-1,-1,-1,48,-1,-1,0,4);
}
function c_RenderState(){
	Object.call(this);
}
c_RenderState.m_LightPos=[];
c_RenderState.m_LightColor=[];
c_RenderState.m_LightRadius=[];
c_RenderState.m_Color=0;
c_RenderState.m_NumLights=0;
c_RenderState.m_BlendMode=0;
c_RenderState.m_UseColorTex=false;
c_RenderState.m_UseNormalTex=false;
c_RenderState.m_UseShininessTex=false;
c_RenderState.m_UseLightTex=false;
c_RenderState.m_UseCubeTex=false;
c_RenderState.m_Skinned=false;
c_RenderState.m_TextureMatrix=[];
c_RenderState.m_ShadowsEnabled=false;
c_RenderState.m_ViewMatrix=[];
c_RenderState.m_ModelMatrix=[];
c_RenderState.m_ProjectionMatrix=[];
c_RenderState.m_DepthBiasMatrix=[];
c_RenderState.m_DepthEpsilon=0;
c_RenderState.m_BoneMatrices=[];
c_RenderState.m_Ambient=0;
c_RenderState.m_Shininess=0;
c_RenderState.m_SpecularPower=0;
c_RenderState.m_CubeOpacity=0;
c_RenderState.m_FogMinDistance=0;
c_RenderState.m_FogMaxDistance=0;
c_RenderState.m_FogEnabled=false;
c_RenderState.m_FogColor=0;
c_RenderState.m_RefractCoef=0;
c_RenderState.m_SeparateDepthPass=false;
function c_Color2(){
	Object.call(this);
}
c_Color2.m_R=function(t_color){
	return t_color>>16&255;
}
c_Color2.m_G=function(t_color){
	return t_color>>8&255;
}
c_Color2.m_B=function(t_color){
	return t_color&255;
}
c_Color2.m_A=function(t_color){
	return t_color>>24&255;
}
c_Color2.m_RGB=function(t_r,t_g,t_b,t_a){
	return (t_a<<24)+(t_r<<16)+(t_g<<8)+t_b;
}
c_Color2.m_Multiply=function(t_color,t_factor){
	return c_Color2.m_RGB((((c_Color2.m_R(t_color))*t_factor)|0),(((c_Color2.m_G(t_color))*t_factor)|0),(((c_Color2.m_B(t_color))*t_factor)|0),c_Color2.m_A(t_color));
}
function c_Shader(){
	Object.call(this);
	this.m_mHandle=0;
	this.m_mError="";
	this.m_mDelegate=null;
	this.m_mUniforms=null;
	this.m_mAttribs=null;
}
c_Shader.m_mDefault2D=null;
c_Shader.m_new=function(t_vertex,t_fragment,t_delegate){
	var t_version="";
	var t_precision="#ifdef GL_ES\nprecision mediump int;\nprecision mediump float;\n#endif\n";
	var t_defines="#define MAX_LIGHTS "+String(c_Renderer.m_MaxLights())+"\n"+"#define MAX_BONES "+String(c_Renderer.m_MaxBones())+"\n";
	var t_flags="";
	t_vertex=t_version+t_precision+t_defines+t_flags+t_vertex;
	t_fragment=t_version+t_precision+t_defines+t_flags+t_fragment;
	this.m_mHandle=c_Renderer.m_CreateShader(t_vertex,t_fragment);
	this.m_mError=c_Renderer.m_ShaderError();
	if(this.m_mHandle!=0){
		this.m_mDelegate=t_delegate;
		this.m_mUniforms=c_ShaderUniforms.m_new.call(new c_ShaderUniforms,this.m_mHandle);
		this.m_mAttribs=c_ShaderAttribs.m_new.call(new c_ShaderAttribs,this.m_mHandle);
	}
	return this;
}
c_Shader.m_new2=function(){
	return this;
}
c_Shader.m__Default2D=function(){
	if(c_Shader.m_mDefault2D==null){
		c_Shader.m_mDefault2D=c_Shader.m_new.call(new c_Shader,"uniform mat4 ModelViewProjection;uniform mat4 TextureMatrix;attribute vec3 VertexPos;attribute vec4 VertexTexCoords;varying vec2 FVertexTexCoords;void main() {\tgl_Position = ModelViewProjection * vec4(VertexPos, 1.0);\tFVertexTexCoords = vec2(TextureMatrix * vec4(vec2(VertexTexCoords), 0, 1));}","uniform bool UseColorTex;uniform bool UseCubemap;uniform sampler2D BaseTexSampler;uniform samplerCube CubemapSampler;uniform vec4 MaterialColor;varying vec2 FVertexTexCoords;void main() {\tgl_FragColor = MaterialColor;\tif ( UseColorTex ) gl_FragColor *= texture2D(BaseTexSampler, FVertexTexCoords);\tif ( UseCubemap ) gl_FragColor *= textureCube(CubemapSampler, vec3(FVertexTexCoords.x, -FVertexTexCoords.y, 1));}",null);
	}
	return c_Shader.m_mDefault2D;
}
c_Shader.m_mShadow=null;
c_Shader.m__Shadow=function(){
	if(c_Shader.m_mShadow==null){
		c_Shader.m_mShadow=c_Shader.m_new.call(new c_Shader,"uniform mat4 ModelViewProjection;attribute vec3 VertexPos;void main() {\tgl_Position = ModelViewProjection * vec4(VertexPos, 1);}","void main() {\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\tgl_FragColor = vec4(depth, depth, depth, 1);}",null);
	}
	return c_Shader.m_mShadow;
}
c_Shader.m_mSkybox=null;
c_Shader.m__Skybox=function(){
	if(c_Shader.m_mSkybox==null){
		c_Shader.m_mSkybox=c_Shader.m_new.call(new c_Shader,"uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;attribute vec3 VertexPos;varying vec3 FCubeCoords;void main() {\tgl_Position = ModelViewProjection * vec4(VertexPos, 1);\tFCubeCoords = vec3(InverseView * vec4(normalize(vec3(ModelView * vec4(VertexPos, 1))), 0));}","uniform samplerCube CubemapSampler;varying vec3 FCubeCoords;void main() { gl_FragColor = textureCube(CubemapSampler, FCubeCoords); }",null);
	}
	return c_Shader.m_mSkybox;
}
c_Shader.m_mMinimal=null;
c_Shader.m__Minimal=function(){
	if(c_Shader.m_mMinimal==null){
		c_Shader.m_mMinimal=c_Shader.m_new.call(new c_Shader,"struct FogInfo { vec3 Data; vec3 Color; };struct LightInfo { vec4 Vector; vec4 Data; };struct LightingResult { vec3 Diffuse; vec3 Specular; };uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;uniform mat4 NormalMatrix;uniform mat4 TextureMatrix;uniform mat4 DepthBiasMatrix;uniform int NumLights;uniform LightInfo Lights[MAX_LIGHTS];uniform vec3 Ambient;uniform vec4 MaterialColor;uniform float MaterialShininess;uniform float MaterialSpecularPower;uniform float CubeOpacity;uniform float MaterialRefractCoef;uniform float DepthEpsilon;uniform FogInfo Fog;uniform bool UseColorTex;uniform bool UseNormalTex;uniform bool UseShininessTex;uniform bool UseLightmap;uniform bool UseCubemap;uniform bool Skinned;uniform bool SolidMode;uniform bool ShadowsEnabled;attribute vec3 VertexPos;attribute vec3 VertexNormal;attribute vec3 VertexTangent;attribute vec4 VertexColor;attribute vec4 VertexTexCoords;attribute vec4 VertexBoneIndices;attribute vec4 VertexBoneWeights;varying vec3 FVertexPos;varying vec3 FNormalizedVertexPos;varying vec3 FVertexNormal;varying vec4 FVertexColor;varying vec4 FVertexTexCoords;varying vec3 FCombinedDiffuse;varying vec3 FCombinedSpecular;varying float FFogFactor;varying vec3 FCubeCoords;varying vec3 FDepthCoords;varying mat3 FTBNMatrix;LightingResult CalcLighting(vec3 V, vec3 NV, vec3 N, vec3 texShininess) {\tLightingResult lighting;\tlighting.Diffuse = Ambient;\tlighting.Specular = vec3(0.0, 0.0, 0.0);\tfor ( int i = 0; i < MAX_LIGHTS; ++i ) {\t\tif ( i >= NumLights ) break;   \tvec3 L = vec3(Lights[i].Vector);   \tfloat att = 1.0;\t\tif ( Lights[i].Vector.w == 1.0 ) {\t\t\tL -= V;\t\t\tatt = 1.0 - clamp(length(L) / Lights[i].Data.w, 0.0, 1.0);\t\t}\t\tL = normalize(L);\t\tfloat NdotL = max(dot(N, L), 0.0);\t\tlighting.Diffuse += NdotL * vec3(Lights[i].Data) * att;\t\tif ( MaterialShininess > 0.0 && NdotL > 0.0 ) {\t\t\tvec3 H = normalize(L - NV);\t\t\tfloat NdotH = max(dot(N, H), 0.0);\t\t\tlighting.Specular += pow(NdotH, MaterialSpecularPower * MaterialShininess * texShininess.r) * vec3(Lights[i].Data) * MaterialShininess * texShininess * att;\t\t}\n\t}\n\tlighting.Diffuse = clamp(lighting.Diffuse, 0.0, 1.0);\tlighting.Specular = clamp(lighting.Specular, 0.0, 1.0);\treturn lighting;}\nvoid main() {\tvec4 VertexPos4 = vec4(VertexPos, 1);\tvec3 V;\tvec3 NV;\tvec3 N;\tif ( NumLights > 0 || Fog.Data[2] != 0.0 ) { \tV = vec3(ModelView * VertexPos4);\t\tNV = normalize(V);\t\tN = normalize(vec3(NormalMatrix * vec4(VertexNormal, 0.0)));\t}\n\tif ( NumLights > 0 ) {\t\tLightingResult lighting = CalcLighting(V, NV, N, vec3(1, 1, 1));\t\tFCombinedDiffuse = lighting.Diffuse;\t\tFCombinedSpecular = lighting.Specular;\t}\tFVertexColor = MaterialColor * VertexColor;\tFVertexTexCoords = vec4(vec2(TextureMatrix * vec4(vec2(VertexTexCoords), 0, 1)), VertexTexCoords.z, VertexTexCoords.w);\tif ( Fog.Data[2] != 0.0 ) FFogFactor = clamp((Fog.Data[1] - abs(V.z)) / (Fog.Data[1] - Fog.Data[0]), 0.0, 1.0);\tgl_Position = ModelViewProjection * VertexPos4;}","struct FogInfo { vec3 Data; vec3 Color; };struct LightInfo { vec4 Vector; vec4 Data; };struct LightingResult { vec3 Diffuse; vec3 Specular; };uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;uniform mat4 NormalMatrix;uniform mat4 TextureMatrix;uniform mat4 DepthBiasMatrix;uniform int NumLights;uniform LightInfo Lights[MAX_LIGHTS];uniform vec3 Ambient;uniform vec4 MaterialColor;uniform float MaterialShininess;uniform float MaterialSpecularPower;uniform float CubeOpacity;uniform float MaterialRefractCoef;uniform float DepthEpsilon;uniform FogInfo Fog;uniform bool UseColorTex;uniform bool UseNormalTex;uniform bool UseShininessTex;uniform bool UseLightmap;uniform bool UseCubemap;uniform bool Skinned;uniform bool SolidMode;uniform bool ShadowsEnabled;uniform sampler2D BaseTexSampler;uniform sampler2D NormalTexSampler;uniform sampler2D ShininessTexSampler;uniform sampler2D LightmapSampler;uniform samplerCube CubemapSampler;uniform sampler2D DepthSampler;varying vec3 FVertexPos;varying vec3 FNormalizedVertexPos;varying vec3 FVertexNormal;varying vec4 FVertexColor;varying vec4 FVertexTexCoords;varying vec3 FCombinedDiffuse;varying vec3 FCombinedSpecular;varying float FFogFactor;varying vec3 FCubeCoords;varying vec3 FDepthCoords;varying mat3 FTBNMatrix;void main() {\tif ( Fog.Data[2] != 0.0 && FFogFactor < 0.004 ) { gl_FragColor = vec4(Fog.Color, 1); return; }\tvec4 ColorTexture = UseColorTex ? texture2D(BaseTexSampler, vec2(FVertexTexCoords)) : vec4(1, 1, 1, 1);\tif ( !SolidMode && (FVertexColor.a <= 0.004 || ColorTexture.a <= 0.004) ) discard;\tvec3 LightTexture = UseLightmap ? vec3(texture2D(LightmapSampler, vec2(FVertexTexCoords.z, FVertexTexCoords.w))) : vec3(0, 0, 0);\tvec4 LightingDiffuse = vec4(0, 0, 0, 1);\tvec4 LightingSpecular = vec4(0, 0, 0, 0);\tif ( NumLights > 0 ) {\t\tLightingDiffuse = vec4(FCombinedDiffuse, 1);\t\tLightingSpecular = vec4(FCombinedSpecular, 0);\t\tLightingDiffuse += vec4(LightTexture, 0.0);\t} else {\t\tLightingDiffuse = UseLightmap ? vec4(LightTexture, 0.0) : vec4(1, 1, 1, 1);\t}\tgl_FragColor = LightingDiffuse * FVertexColor * ColorTexture;\tif ( NumLights > 0 ) gl_FragColor = clamp(gl_FragColor + LightingSpecular, 0.0, 1.0);\tif ( Fog.Data[2] != 0.0 ) gl_FragColor = vec4(mix(Fog.Color, vec3(gl_FragColor), FFogFactor), gl_FragColor.a);}",null);
	}
	return c_Shader.m_mMinimal;
}
c_Shader.m_mMinimalShadows=null;
c_Shader.m__MinimalShadows=function(){
	if(c_Shader.m_mMinimalShadows==null){
		c_Shader.m_mMinimalShadows=c_Shader.m_new.call(new c_Shader,"struct FogInfo { vec3 Data; vec3 Color; };struct LightInfo { vec4 Vector; vec4 Data; };struct LightingResult { vec3 Diffuse; vec3 Specular; };uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;uniform mat4 NormalMatrix;uniform mat4 TextureMatrix;uniform mat4 DepthBiasMatrix;uniform int NumLights;uniform LightInfo Lights[MAX_LIGHTS];uniform vec3 Ambient;uniform vec4 MaterialColor;uniform float MaterialShininess;uniform float MaterialSpecularPower;uniform float CubeOpacity;uniform float MaterialRefractCoef;uniform float DepthEpsilon;uniform FogInfo Fog;uniform bool UseColorTex;uniform bool UseNormalTex;uniform bool UseShininessTex;uniform bool UseLightmap;uniform bool UseCubemap;uniform bool Skinned;uniform bool SolidMode;uniform bool ShadowsEnabled;attribute vec3 VertexPos;attribute vec3 VertexNormal;attribute vec3 VertexTangent;attribute vec4 VertexColor;attribute vec4 VertexTexCoords;attribute vec4 VertexBoneIndices;attribute vec4 VertexBoneWeights;varying vec3 FVertexPos;varying vec3 FNormalizedVertexPos;varying vec3 FVertexNormal;varying vec4 FVertexColor;varying vec4 FVertexTexCoords;varying vec3 FCombinedDiffuse;varying vec3 FCombinedSpecular;varying float FFogFactor;varying vec3 FCubeCoords;varying vec3 FDepthCoords;varying mat3 FTBNMatrix;LightingResult CalcLighting(vec3 V, vec3 NV, vec3 N, vec3 texShininess) {\tLightingResult lighting;\tlighting.Diffuse = Ambient;\tlighting.Specular = vec3(0.0, 0.0, 0.0);\tfor ( int i = 0; i < MAX_LIGHTS; ++i ) {\t\tif ( i >= NumLights ) break;   \tvec3 L = vec3(Lights[i].Vector);   \tfloat att = 1.0;\t\tif ( Lights[i].Vector.w == 1.0 ) {\t\t\tL -= V;\t\t\tatt = 1.0 - clamp(length(L) / Lights[i].Data.w, 0.0, 1.0);\t\t}\t\tL = normalize(L);\t\tfloat NdotL = max(dot(N, L), 0.0);\t\tlighting.Diffuse += NdotL * vec3(Lights[i].Data) * att;\t\tif ( MaterialShininess > 0.0 && NdotL > 0.0 ) {\t\t\tvec3 H = normalize(L - NV);\t\t\tfloat NdotH = max(dot(N, H), 0.0);\t\t\tlighting.Specular += pow(NdotH, MaterialSpecularPower * MaterialShininess * texShininess.r) * vec3(Lights[i].Data) * MaterialShininess * texShininess * att;\t\t}\n\t}\n\tlighting.Diffuse = clamp(lighting.Diffuse, 0.0, 1.0);\tlighting.Specular = clamp(lighting.Specular, 0.0, 1.0);\treturn lighting;}\nvoid main() {\tvec4 VertexPos4 = vec4(VertexPos, 1);\tvec3 V;\tvec3 NV;\tvec3 N;\tif ( NumLights > 0 || Fog.Data[2] != 0.0 ) { \tV = vec3(ModelView * VertexPos4);\t\tNV = normalize(V);\t\tN = normalize(vec3(NormalMatrix * vec4(VertexNormal, 0.0)));\t}\n\tif ( NumLights > 0 ) {\t\tLightingResult lighting = CalcLighting(V, NV, N, vec3(1, 1, 1));\t\tFCombinedDiffuse = lighting.Diffuse;\t\tFCombinedSpecular = lighting.Specular;\t}\tFVertexColor = MaterialColor * VertexColor;\tFVertexTexCoords = vec4(vec2(TextureMatrix * vec4(vec2(VertexTexCoords), 0, 1)), VertexTexCoords.z, VertexTexCoords.w);\tif ( ShadowsEnabled ) FDepthCoords = vec3(DepthBiasMatrix * VertexPos4);\tif ( Fog.Data[2] != 0.0 ) FFogFactor = clamp((Fog.Data[1] - abs(V.z)) / (Fog.Data[1] - Fog.Data[0]), 0.0, 1.0);\tgl_Position = ModelViewProjection * VertexPos4;}","struct FogInfo { vec3 Data; vec3 Color; };struct LightInfo { vec4 Vector; vec4 Data; };struct LightingResult { vec3 Diffuse; vec3 Specular; };uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;uniform mat4 NormalMatrix;uniform mat4 TextureMatrix;uniform mat4 DepthBiasMatrix;uniform int NumLights;uniform LightInfo Lights[MAX_LIGHTS];uniform vec3 Ambient;uniform vec4 MaterialColor;uniform float MaterialShininess;uniform float MaterialSpecularPower;uniform float CubeOpacity;uniform float MaterialRefractCoef;uniform float DepthEpsilon;uniform FogInfo Fog;uniform bool UseColorTex;uniform bool UseNormalTex;uniform bool UseShininessTex;uniform bool UseLightmap;uniform bool UseCubemap;uniform bool Skinned;uniform bool SolidMode;uniform bool ShadowsEnabled;uniform sampler2D BaseTexSampler;uniform sampler2D NormalTexSampler;uniform sampler2D ShininessTexSampler;uniform sampler2D LightmapSampler;uniform samplerCube CubemapSampler;uniform sampler2D DepthSampler;varying vec3 FVertexPos;varying vec3 FNormalizedVertexPos;varying vec3 FVertexNormal;varying vec4 FVertexColor;varying vec4 FVertexTexCoords;varying vec3 FCombinedDiffuse;varying vec3 FCombinedSpecular;varying float FFogFactor;varying vec3 FCubeCoords;varying vec3 FDepthCoords;varying mat3 FTBNMatrix;void main() {\tif ( Fog.Data[2] != 0.0 && FFogFactor < 0.004 ) { gl_FragColor = vec4(Fog.Color, 1); return; }\tvec4 ColorTexture = UseColorTex ? texture2D(BaseTexSampler, vec2(FVertexTexCoords)) : vec4(1, 1, 1, 1);\tif ( !SolidMode && (FVertexColor.a <= 0.004 || ColorTexture.a <= 0.004) ) discard;\tvec3 LightTexture = UseLightmap ? vec3(texture2D(LightmapSampler, vec2(FVertexTexCoords.z, FVertexTexCoords.w))) : vec3(0, 0, 0);\tfloat DepthTexture = texture2D(DepthSampler, vec2(FDepthCoords)).z;\tbool Shadowed = false;\tif ( ShadowsEnabled && FDepthCoords.x >= 0.0 && FDepthCoords.x <= 1.0 && FDepthCoords.y >= 0.0 && FDepthCoords.y <= 1.0 && FDepthCoords.z >= 0.0 && FDepthCoords.z <= 1.0 && DepthTexture < FDepthCoords.z - DepthEpsilon ) Shadowed = true;\tvec4 LightingDiffuse = vec4(0, 0, 0, 1);\tvec4 LightingSpecular = vec4(0, 0, 0, 0);\tif ( NumLights > 0 ) {\t\tif ( !Shadowed ) { \t\t\tLightingDiffuse = vec4(FCombinedDiffuse, 1);\t\t\tLightingSpecular = vec4(FCombinedSpecular, 0);\t\t} else {\t\t\tLightingDiffuse = vec4(Ambient, 1);\t\t}\t\tLightingDiffuse += vec4(LightTexture, 0.0);\t} else {\t\tLightingDiffuse = UseLightmap ? vec4(LightTexture, 0.0) : vec4(1, 1, 1, 1);\t}\tgl_FragColor = LightingDiffuse * FVertexColor * ColorTexture;\tif ( NumLights > 0 && !Shadowed ) gl_FragColor = clamp(gl_FragColor + LightingSpecular, 0.0, 1.0);\tif ( Fog.Data[2] != 0.0 ) gl_FragColor = vec4(mix(Fog.Color, vec3(gl_FragColor), FFogFactor), gl_FragColor.a);}",null);
	}
	return c_Shader.m_mMinimalShadows;
}
c_Shader.m_mVertexLighting=null;
c_Shader.m__VertexLighting=function(){
	if(c_Shader.m_mVertexLighting==null){
		c_Shader.m_mVertexLighting=c_Shader.m_new.call(new c_Shader,"struct FogInfo { vec3 Data; vec3 Color; };struct LightInfo { vec4 Vector; vec4 Data; };struct LightingResult { vec3 Diffuse; vec3 Specular; };uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;uniform mat4 NormalMatrix;uniform mat4 TextureMatrix;uniform mat4 DepthBiasMatrix;uniform int NumLights;uniform LightInfo Lights[MAX_LIGHTS];uniform vec3 Ambient;uniform vec4 MaterialColor;uniform float MaterialShininess;uniform float MaterialSpecularPower;uniform float CubeOpacity;uniform float MaterialRefractCoef;uniform float DepthEpsilon;uniform FogInfo Fog;uniform bool UseColorTex;uniform bool UseNormalTex;uniform bool UseShininessTex;uniform bool UseLightmap;uniform bool UseCubemap;uniform bool Skinned;uniform bool SolidMode;uniform bool ShadowsEnabled;attribute vec3 VertexPos;attribute vec3 VertexNormal;attribute vec3 VertexTangent;attribute vec4 VertexColor;attribute vec4 VertexTexCoords;attribute vec4 VertexBoneIndices;attribute vec4 VertexBoneWeights;varying vec3 FVertexPos;varying vec3 FNormalizedVertexPos;varying vec3 FVertexNormal;varying vec4 FVertexColor;varying vec4 FVertexTexCoords;varying vec3 FCombinedDiffuse;varying vec3 FCombinedSpecular;varying float FFogFactor;varying vec3 FCubeCoords;varying vec3 FDepthCoords;varying mat3 FTBNMatrix;LightingResult CalcLighting(vec3 V, vec3 NV, vec3 N, vec3 texShininess) {\tLightingResult lighting;\tlighting.Diffuse = Ambient;\tlighting.Specular = vec3(0.0, 0.0, 0.0);\tfor ( int i = 0; i < MAX_LIGHTS; ++i ) {\t\tif ( i >= NumLights ) break;   \tvec3 L = vec3(Lights[i].Vector);   \tfloat att = 1.0;\t\tif ( Lights[i].Vector.w == 1.0 ) {\t\t\tL -= V;\t\t\tatt = 1.0 - clamp(length(L) / Lights[i].Data.w, 0.0, 1.0);\t\t}\t\tL = normalize(L);\t\tfloat NdotL = max(dot(N, L), 0.0);\t\tlighting.Diffuse += NdotL * vec3(Lights[i].Data) * att;\t\tif ( MaterialShininess > 0.0 && NdotL > 0.0 ) {\t\t\tvec3 H = normalize(L - NV);\t\t\tfloat NdotH = max(dot(N, H), 0.0);\t\t\tlighting.Specular += pow(NdotH, MaterialSpecularPower * MaterialShininess * texShininess.r) * vec3(Lights[i].Data) * MaterialShininess * texShininess * att;\t\t}\n\t}\n\tlighting.Diffuse = clamp(lighting.Diffuse, 0.0, 1.0);\tlighting.Specular = clamp(lighting.Specular, 0.0, 1.0);\treturn lighting;}\nvec3 CalcCubeCoords(vec3 NV, vec3 N) {\tif ( MaterialRefractCoef < 0.0 ) return normalize(vec3(InverseView * vec4(reflect(NV, N), 0)));\telse return normalize(vec3(InverseView * vec4(refract(NV, N, MaterialRefractCoef), 0)));}void main() {\tvec4 VertexPos4 = vec4(VertexPos, 1);\tvec3 V;\tvec3 NV;\tvec3 N;\tif ( NumLights > 0 || UseCubemap || Fog.Data[2] != 0.0 ) { \tV = vec3(ModelView * VertexPos4);\t\tNV = normalize(V);\t\tN = normalize(vec3(NormalMatrix * vec4(VertexNormal, 0.0)));\t}\n\tif ( UseCubemap ) FCubeCoords = CalcCubeCoords(NV, N);\tif ( NumLights > 0 ) {\t\tLightingResult lighting = CalcLighting(V, NV, N, vec3(1, 1, 1));\t\tFCombinedDiffuse = lighting.Diffuse;\t\tFCombinedSpecular = lighting.Specular;\t}\tFVertexColor = MaterialColor * VertexColor;\tFVertexTexCoords = vec4(vec2(TextureMatrix * vec4(vec2(VertexTexCoords), 0, 1)), VertexTexCoords.z, VertexTexCoords.w);\tif ( ShadowsEnabled ) FDepthCoords = vec3(DepthBiasMatrix * VertexPos4);\tif ( Fog.Data[2] != 0.0 ) FFogFactor = clamp((Fog.Data[1] - abs(V.z)) / (Fog.Data[1] - Fog.Data[0]), 0.0, 1.0);\tgl_Position = ModelViewProjection * VertexPos4;}","struct FogInfo { vec3 Data; vec3 Color; };struct LightInfo { vec4 Vector; vec4 Data; };struct LightingResult { vec3 Diffuse; vec3 Specular; };uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;uniform mat4 NormalMatrix;uniform mat4 TextureMatrix;uniform mat4 DepthBiasMatrix;uniform int NumLights;uniform LightInfo Lights[MAX_LIGHTS];uniform vec3 Ambient;uniform vec4 MaterialColor;uniform float MaterialShininess;uniform float MaterialSpecularPower;uniform float CubeOpacity;uniform float MaterialRefractCoef;uniform float DepthEpsilon;uniform FogInfo Fog;uniform bool UseColorTex;uniform bool UseNormalTex;uniform bool UseShininessTex;uniform bool UseLightmap;uniform bool UseCubemap;uniform bool Skinned;uniform bool SolidMode;uniform bool ShadowsEnabled;uniform sampler2D BaseTexSampler;uniform sampler2D NormalTexSampler;uniform sampler2D ShininessTexSampler;uniform sampler2D LightmapSampler;uniform samplerCube CubemapSampler;uniform sampler2D DepthSampler;varying vec3 FVertexPos;varying vec3 FNormalizedVertexPos;varying vec3 FVertexNormal;varying vec4 FVertexColor;varying vec4 FVertexTexCoords;varying vec3 FCombinedDiffuse;varying vec3 FCombinedSpecular;varying float FFogFactor;varying vec3 FCubeCoords;varying vec3 FDepthCoords;varying mat3 FTBNMatrix;void main() {\tif ( Fog.Data[2] != 0.0 && FFogFactor < 0.004 ) { gl_FragColor = vec4(Fog.Color, 1); return; }\tvec4 ColorTexture = UseColorTex ? texture2D(BaseTexSampler, vec2(FVertexTexCoords)) : vec4(1, 1, 1, 1);\tif ( !SolidMode && (FVertexColor.a <= 0.004 || ColorTexture.a <= 0.004) ) discard;\tvec3 ShininessTexture = UseShininessTex ? vec3(texture2D(ShininessTexSampler, vec2(FVertexTexCoords))) : vec3(1, 1, 1);\tvec3 LightTexture = UseLightmap ? vec3(texture2D(LightmapSampler, vec2(FVertexTexCoords.z, FVertexTexCoords.w))) : vec3(0, 0, 0);\tvec4 CubeTexture = UseCubemap ? vec4(vec3(textureCube(CubemapSampler, FCubeCoords)), CubeOpacity) : vec4(0, 0, 0, 0);\tfloat DepthTexture = texture2D(DepthSampler, vec2(FDepthCoords)).z;\tbool Shadowed = false;\tif ( ShadowsEnabled && FDepthCoords.x >= 0.0 && FDepthCoords.x <= 1.0 && FDepthCoords.y >= 0.0 && FDepthCoords.y <= 1.0 && FDepthCoords.z >= 0.0 && FDepthCoords.z <= 1.0 && DepthTexture < FDepthCoords.z - DepthEpsilon ) Shadowed = true;\tvec4 LightingDiffuse = vec4(0, 0, 0, 1);\tvec4 LightingSpecular = vec4(0, 0, 0, 0);\tif ( NumLights > 0 ) {\t\tif ( !Shadowed ) { \t\t\tLightingDiffuse = vec4(FCombinedDiffuse, 1);\t\t\tLightingSpecular = vec4(FCombinedSpecular, 0);\t\t} else {\t\t\tLightingDiffuse = vec4(Ambient, 1);\t\t}\t\tLightingDiffuse += vec4(LightTexture, 0.0);\t} else {\t\tLightingDiffuse = UseLightmap ? vec4(LightTexture, 0.0) : vec4(1, 1, 1, 1);\t}\tgl_FragColor = FVertexColor * ColorTexture;\tgl_FragColor = vec4(vec3(CubeTexture)*CubeTexture.a + vec3(gl_FragColor)*(1.0 - CubeTexture.a), gl_FragColor.a);\tgl_FragColor *= LightingDiffuse;\tgl_FragColor = clamp(gl_FragColor + LightingSpecular, 0.0, 1.0);\tif ( Fog.Data[2] != 0.0 ) gl_FragColor = vec4(mix(Fog.Color, vec3(gl_FragColor), FFogFactor), gl_FragColor.a);}",null);
	}
	return c_Shader.m_mVertexLighting;
}
c_Shader.m_mPixelLighting=null;
c_Shader.m__PixelLighting=function(){
	if(c_Shader.m_mPixelLighting==null){
		c_Shader.m_mPixelLighting=c_Shader.m_new.call(new c_Shader,"struct FogInfo { vec3 Data; vec3 Color; };struct LightInfo { vec4 Vector; vec4 Data; };struct LightingResult { vec3 Diffuse; vec3 Specular; };uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;uniform mat4 NormalMatrix;uniform mat4 TextureMatrix;uniform mat4 DepthBiasMatrix;uniform int NumLights;uniform LightInfo Lights[MAX_LIGHTS];uniform vec3 Ambient;uniform vec4 MaterialColor;uniform float MaterialShininess;uniform float MaterialSpecularPower;uniform float CubeOpacity;uniform float MaterialRefractCoef;uniform float DepthEpsilon;uniform FogInfo Fog;uniform bool UseColorTex;uniform bool UseNormalTex;uniform bool UseShininessTex;uniform bool UseLightmap;uniform bool UseCubemap;uniform bool Skinned;uniform bool SolidMode;uniform bool ShadowsEnabled;attribute vec3 VertexPos;attribute vec3 VertexNormal;attribute vec3 VertexTangent;attribute vec4 VertexColor;attribute vec4 VertexTexCoords;attribute vec4 VertexBoneIndices;attribute vec4 VertexBoneWeights;varying vec3 FVertexPos;varying vec3 FNormalizedVertexPos;varying vec3 FVertexNormal;varying vec4 FVertexColor;varying vec4 FVertexTexCoords;varying vec3 FCombinedDiffuse;varying vec3 FCombinedSpecular;varying float FFogFactor;varying vec3 FCubeCoords;varying vec3 FDepthCoords;varying mat3 FTBNMatrix;vec3 CalcCubeCoords(vec3 NV, vec3 N) {\tif ( MaterialRefractCoef < 0.0 ) return normalize(vec3(InverseView * vec4(reflect(NV, N), 0)));\telse return normalize(vec3(InverseView * vec4(refract(NV, N, MaterialRefractCoef), 0)));}mat3 CalcTBNMatrix(vec3 normal, vec3 tangent) {\treturn mat3(tangent, cross(tangent, normal), normal);}void main() {\tvec4 VertexPos4 = vec4(VertexPos, 1);\tvec3 V;\tvec3 NV;\tvec3 N;\tif ( NumLights > 0 || UseNormalTex || UseShininessTex || UseCubemap || Fog.Data[2] != 0.0 ) { \tV = vec3(ModelView * VertexPos4);\t\tNV = normalize(V);\t\tN = normalize(vec3(NormalMatrix * vec4(VertexNormal, 0.0)));\t}\n\tif ( UseCubemap ) FCubeCoords = CalcCubeCoords(NV, N);\tif ( NumLights > 0 && UseNormalTex ) FTBNMatrix = CalcTBNMatrix(N, normalize(vec3(NormalMatrix * vec4(VertexTangent, 0))));\tif ( NumLights > 0 ) {\t\tFVertexPos = V;\t\tFNormalizedVertexPos = NV;\t\tFVertexNormal = N;\t}\tFVertexColor = MaterialColor * VertexColor;\tFVertexTexCoords = vec4(vec2(TextureMatrix * vec4(vec2(VertexTexCoords), 0, 1)), VertexTexCoords.z, VertexTexCoords.w);\tif ( ShadowsEnabled ) FDepthCoords = vec3(DepthBiasMatrix * VertexPos4);\tif ( Fog.Data[2] != 0.0 ) FFogFactor = clamp((Fog.Data[1] - abs(V.z)) / (Fog.Data[1] - Fog.Data[0]), 0.0, 1.0);\tgl_Position = ModelViewProjection * VertexPos4;}","struct FogInfo { vec3 Data; vec3 Color; };struct LightInfo { vec4 Vector; vec4 Data; };struct LightingResult { vec3 Diffuse; vec3 Specular; };uniform mat4 ModelViewProjection;uniform mat4 ModelView;uniform mat4 InverseView;uniform mat4 NormalMatrix;uniform mat4 TextureMatrix;uniform mat4 DepthBiasMatrix;uniform int NumLights;uniform LightInfo Lights[MAX_LIGHTS];uniform vec3 Ambient;uniform vec4 MaterialColor;uniform float MaterialShininess;uniform float MaterialSpecularPower;uniform float CubeOpacity;uniform float MaterialRefractCoef;uniform float DepthEpsilon;uniform FogInfo Fog;uniform bool UseColorTex;uniform bool UseNormalTex;uniform bool UseShininessTex;uniform bool UseLightmap;uniform bool UseCubemap;uniform bool Skinned;uniform bool SolidMode;uniform bool ShadowsEnabled;uniform sampler2D BaseTexSampler;uniform sampler2D NormalTexSampler;uniform sampler2D ShininessTexSampler;uniform sampler2D LightmapSampler;uniform samplerCube CubemapSampler;uniform sampler2D DepthSampler;varying vec3 FVertexPos;varying vec3 FNormalizedVertexPos;varying vec3 FVertexNormal;varying vec4 FVertexColor;varying vec4 FVertexTexCoords;varying vec3 FCombinedDiffuse;varying vec3 FCombinedSpecular;varying float FFogFactor;varying vec3 FCubeCoords;varying vec3 FDepthCoords;varying mat3 FTBNMatrix;LightingResult CalcLighting(vec3 V, vec3 NV, vec3 N, vec3 texShininess) {\tLightingResult lighting;\tlighting.Diffuse = Ambient;\tlighting.Specular = vec3(0.0, 0.0, 0.0);\tfor ( int i = 0; i < MAX_LIGHTS; ++i ) {\t\tif ( i >= NumLights ) break;   \tvec3 L = vec3(Lights[i].Vector);   \tfloat att = 1.0;\t\tif ( Lights[i].Vector.w == 1.0 ) {\t\t\tL -= V;\t\t\tatt = 1.0 - clamp(length(L) / Lights[i].Data.w, 0.0, 1.0);\t\t}\t\tL = normalize(L);\t\tfloat NdotL = max(dot(N, L), 0.0);\t\tlighting.Diffuse += NdotL * vec3(Lights[i].Data) * att;\t\tif ( MaterialShininess > 0.0 && NdotL > 0.0 ) {\t\t\tvec3 H = normalize(L - NV);\t\t\tfloat NdotH = max(dot(N, H), 0.0);\t\t\tlighting.Specular += pow(NdotH, MaterialSpecularPower * MaterialShininess * texShininess.r) * vec3(Lights[i].Data) * MaterialShininess * texShininess * att;\t\t}\n\t}\n\tlighting.Diffuse = clamp(lighting.Diffuse, 0.0, 1.0);\tlighting.Specular = clamp(lighting.Specular, 0.0, 1.0);\treturn lighting;}\nvoid main() {\tif ( Fog.Data[2] != 0.0 && FFogFactor < 0.004 ) { gl_FragColor = vec4(Fog.Color, 1); return; }\tvec4 ColorTexture = UseColorTex ? texture2D(BaseTexSampler, vec2(FVertexTexCoords)) : vec4(1, 1, 1, 1);\tif ( !SolidMode && (FVertexColor.a <= 0.004 || ColorTexture.a <= 0.004) ) discard;\tvec3 ShininessTexture = UseShininessTex ? vec3(texture2D(ShininessTexSampler, vec2(FVertexTexCoords))) : vec3(1, 1, 1);\tvec3 LightTexture = UseLightmap ? vec3(texture2D(LightmapSampler, vec2(FVertexTexCoords.z, FVertexTexCoords.w))) : vec3(0, 0, 0);\tvec4 CubeTexture = UseCubemap ? vec4(vec3(textureCube(CubemapSampler, FCubeCoords)), CubeOpacity) : vec4(0, 0, 0, 0);\tfloat DepthTexture = texture2D(DepthSampler, vec2(FDepthCoords)).z;\tbool Shadowed = false;\tif ( ShadowsEnabled && FDepthCoords.x >= 0.0 && FDepthCoords.x <= 1.0 && FDepthCoords.y >= 0.0 && FDepthCoords.y <= 1.0 && FDepthCoords.z >= 0.0 && FDepthCoords.z <= 1.0 && DepthTexture < FDepthCoords.z - DepthEpsilon ) Shadowed = true;\tvec4 LightingDiffuse = vec4(0, 0, 0, 1);\tvec4 LightingSpecular = vec4(0, 0, 0, 0);\tif ( NumLights > 0 ) {\t\tif ( !Shadowed ) { \t\t\tvec3 normal = FVertexNormal;\t\t\tif ( UseNormalTex ) {\t\t\t\tvec3 normalTexColor = vec3(texture2D(NormalTexSampler, vec2(FVertexTexCoords)));\t\t\t\tnormal = FTBNMatrix * (normalTexColor*2.0 - 1.0);\t\t\t} else {\t\t\t\tnormal = normalize(normal);\t\t\t}\t\t\tLightingResult lighting = CalcLighting(FVertexPos, FNormalizedVertexPos, normal, ShininessTexture);\t\t\tLightingDiffuse = vec4(lighting.Diffuse, 1);\t\t\tLightingSpecular = vec4(lighting.Specular, 0);\t\t} else {\t\t\tLightingDiffuse = vec4(Ambient, 1);\t\t}\t\tLightingDiffuse += vec4(LightTexture, 0.0);\t} else {\t\tLightingDiffuse = UseLightmap ? vec4(LightTexture, 0.0) : vec4(1, 1, 1, 1);\t}\tgl_FragColor = FVertexColor * ColorTexture;\tgl_FragColor = vec4(vec3(CubeTexture)*CubeTexture.a + vec3(gl_FragColor)*(1.0 - CubeTexture.a), gl_FragColor.a);\tgl_FragColor *= LightingDiffuse;\tgl_FragColor = clamp(gl_FragColor + LightingSpecular, 0.0, 1.0);\tif ( Fog.Data[2] != 0.0 ) gl_FragColor = vec4(mix(Fog.Color, vec3(gl_FragColor), FFogFactor), gl_FragColor.a);}",null);
	}
	return c_Shader.m_mPixelLighting;
}
c_Shader.prototype.p_Handle=function(){
	return this.m_mHandle;
}
c_Shader.m_mDefaultType=0;
c_Shader.m_DefaultType=function(t_type){
	t_type=bb_math_Clamp(t_type,0,3);
	if(t_type==3 && c_Shader.m__PixelLighting().p_Handle()==0){
		t_type-=1;
	}
	if(t_type==2 && c_Shader.m__VertexLighting().p_Handle()==0){
		t_type-=-1;
	}
	if(t_type==1 && c_Shader.m__MinimalShadows().p_Handle()==0){
		t_type-=-1;
	}
	c_Shader.m_mDefaultType=t_type;
}
c_Shader.m_DefaultType2=function(){
	if(c_Shader.m_mDefaultType==-1){
		c_Shader.m_DefaultType(3);
	}
	return c_Shader.m_mDefaultType;
}
c_Shader.m__Default3D=function(){
	var t_1=c_Shader.m_DefaultType2();
	if(t_1==3){
		return c_Shader.m__PixelLighting();
	}else{
		if(t_1==2){
			return c_Shader.m__VertexLighting();
		}else{
			if(t_1==1){
				return c_Shader.m__MinimalShadows();
			}else{
				return c_Shader.m__Minimal();
			}
		}
	}
}
c_Shader.m_mCurrentDefault=null;
c_Shader.prototype.p__Prepare=function(){
	c_Renderer.m_UseShader(this.m_mHandle);
	this.m_mUniforms.p_Prepare();
	if(this.m_mDelegate!=null){
		this.m_mDelegate.p_SetShaderVars(this);
	}
}
c_Shader.m__CurrentDefault=function(t_shader){
	c_Shader.m_mCurrentDefault=t_shader;
	t_shader.p__Prepare();
}
c_Shader.m__CurrentDefault2=function(){
	return c_Shader.m_mCurrentDefault;
}
c_Shader.prototype.p__EnableVertexVars=function(t_coordsOffset,t_normalsOffset,t_tangentsOffset,t_colorsOffset,t_texCoordsOffset,t_boneIndicesOffset,t_boneWeightsOffset,t_stride){
	this.m_mAttribs.p_Enable(t_coordsOffset,t_normalsOffset,t_tangentsOffset,t_colorsOffset,t_texCoordsOffset,t_boneIndicesOffset,t_boneWeightsOffset,t_stride);
}
c_Shader.prototype.p__DisableVertexVars=function(){
	this.m_mAttribs.p_Disable();
}
function c_ShaderUniforms(){
	Object.call(this);
	this.m_mModelViewProjection=0;
	this.m_mModelView=0;
	this.m_mInverseView=0;
	this.m_mNormalMatrix=0;
	this.m_mTextureMatrix=0;
	this.m_mDepthBiasMatrix=0;
	this.m_mSolidMode=0;
	this.m_mUseColorTex=0;
	this.m_mUseNormalTex=0;
	this.m_mUseShininessTex=0;
	this.m_mUseLightmap=0;
	this.m_mUseCubemap=0;
	this.m_mNumLights=0;
	this.m_mLightVector=new_number_array(c_Renderer.m_MaxLights());
	this.m_mLightData=new_number_array(c_Renderer.m_MaxLights());
	this.m_mMaterialColor=0;
	this.m_mAmbient=0;
	this.m_mMaterialShininess=0;
	this.m_mMaterialSpecularPower=0;
	this.m_mCubeOpacity=0;
	this.m_mRefractCoef=0;
	this.m_mFogData=0;
	this.m_mFogColor=0;
	this.m_mShadowsEnabled=0;
	this.m_mDepthEpsilon=0;
	this.m_mSkinned=0;
	this.m_mBones=new_number_array(c_Renderer.m_MaxBones());
	this.m_mBaseTexSampler=0;
	this.m_mNormalTexSampler=0;
	this.m_mShininessTexSampler=0;
	this.m_mLightmapSampler=0;
	this.m_mCubemapSampler=0;
	this.m_mDepthSampler=0;
}
c_ShaderUniforms.m_new=function(t_shader){
	this.m_mModelViewProjection=c_Renderer.m_ShaderLocation(t_shader,"ModelViewProjection");
	this.m_mModelView=c_Renderer.m_ShaderLocation(t_shader,"ModelView");
	this.m_mInverseView=c_Renderer.m_ShaderLocation(t_shader,"InverseView");
	this.m_mNormalMatrix=c_Renderer.m_ShaderLocation(t_shader,"NormalMatrix");
	this.m_mTextureMatrix=c_Renderer.m_ShaderLocation(t_shader,"TextureMatrix");
	this.m_mDepthBiasMatrix=c_Renderer.m_ShaderLocation(t_shader,"DepthBiasMatrix");
	this.m_mSolidMode=c_Renderer.m_ShaderLocation(t_shader,"SolidMode");
	this.m_mUseColorTex=c_Renderer.m_ShaderLocation(t_shader,"UseColorTex");
	this.m_mUseNormalTex=c_Renderer.m_ShaderLocation(t_shader,"UseNormalTex");
	this.m_mUseShininessTex=c_Renderer.m_ShaderLocation(t_shader,"UseShininessTex");
	this.m_mUseLightmap=c_Renderer.m_ShaderLocation(t_shader,"UseLightmap");
	this.m_mUseCubemap=c_Renderer.m_ShaderLocation(t_shader,"UseCubemap");
	this.m_mNumLights=c_Renderer.m_ShaderLocation(t_shader,"NumLights");
	for(var t_i=0;t_i<c_Renderer.m_MaxLights();t_i=t_i+1){
		this.m_mLightVector[t_i]=c_Renderer.m_ShaderLocation(t_shader,"Lights["+String(t_i)+"].Vector");
		this.m_mLightData[t_i]=c_Renderer.m_ShaderLocation(t_shader,"Lights["+String(t_i)+"].Data");
	}
	this.m_mMaterialColor=c_Renderer.m_ShaderLocation(t_shader,"MaterialColor");
	this.m_mAmbient=c_Renderer.m_ShaderLocation(t_shader,"Ambient");
	this.m_mMaterialShininess=c_Renderer.m_ShaderLocation(t_shader,"MaterialShininess");
	this.m_mMaterialSpecularPower=c_Renderer.m_ShaderLocation(t_shader,"MaterialSpecularPower");
	this.m_mCubeOpacity=c_Renderer.m_ShaderLocation(t_shader,"CubeOpacity");
	this.m_mRefractCoef=c_Renderer.m_ShaderLocation(t_shader,"MaterialRefractCoef");
	this.m_mFogData=c_Renderer.m_ShaderLocation(t_shader,"Fog.Data");
	this.m_mFogColor=c_Renderer.m_ShaderLocation(t_shader,"Fog.Color");
	this.m_mShadowsEnabled=c_Renderer.m_ShaderLocation(t_shader,"ShadowsEnabled");
	this.m_mDepthEpsilon=c_Renderer.m_ShaderLocation(t_shader,"DepthEpsilon");
	this.m_mSkinned=c_Renderer.m_ShaderLocation(t_shader,"Skinned");
	for(var t_i2=0;t_i2<c_Renderer.m_MaxBones();t_i2=t_i2+1){
		this.m_mBones[t_i2]=c_Renderer.m_ShaderLocation(t_shader,"Bones["+String(t_i2)+"]");
	}
	this.m_mBaseTexSampler=c_Renderer.m_ShaderLocation(t_shader,"BaseTexSampler");
	this.m_mNormalTexSampler=c_Renderer.m_ShaderLocation(t_shader,"NormalTexSampler");
	this.m_mShininessTexSampler=c_Renderer.m_ShaderLocation(t_shader,"ShininessTexSampler");
	this.m_mLightmapSampler=c_Renderer.m_ShaderLocation(t_shader,"LightmapSampler");
	this.m_mCubemapSampler=c_Renderer.m_ShaderLocation(t_shader,"CubemapSampler");
	this.m_mDepthSampler=c_Renderer.m_ShaderLocation(t_shader,"DepthSampler");
	return this;
}
c_ShaderUniforms.m_new2=function(){
	return this;
}
c_ShaderUniforms.m_mTempMatrix=[];
c_ShaderUniforms.prototype.p_Prepare=function(){
	if(this.m_mModelView!=-1 || this.m_mNormalMatrix!=-1){
		bb_math3d_Mat4Mul(c_RenderState.m_ViewMatrix,c_RenderState.m_ModelMatrix,c_ShaderUniforms.m_mTempMatrix);
		c_Renderer.m_SetShaderMat4(this.m_mModelView,c_ShaderUniforms.m_mTempMatrix);
	}
	if(this.m_mNormalMatrix!=-1){
		bb_math3d_Mat4Invert(c_ShaderUniforms.m_mTempMatrix,c_ShaderUniforms.m_mTempMatrix);
		bb_math3d_Mat4Transpose(c_ShaderUniforms.m_mTempMatrix,c_ShaderUniforms.m_mTempMatrix);
		c_Renderer.m_SetShaderMat4(this.m_mNormalMatrix,c_ShaderUniforms.m_mTempMatrix);
	}
	if(this.m_mInverseView!=-1){
		bb_math3d_Mat4Invert(c_RenderState.m_ViewMatrix,c_ShaderUniforms.m_mTempMatrix);
		c_Renderer.m_SetShaderMat4(this.m_mInverseView,c_ShaderUniforms.m_mTempMatrix);
	}
	if(this.m_mModelViewProjection!=-1){
		bb_math3d_Mat4Mul(c_RenderState.m_ProjectionMatrix,c_RenderState.m_ViewMatrix,c_ShaderUniforms.m_mTempMatrix);
		bb_math3d_Mat4Mul(c_ShaderUniforms.m_mTempMatrix,c_RenderState.m_ModelMatrix,c_ShaderUniforms.m_mTempMatrix);
		c_Renderer.m_SetShaderMat4(this.m_mModelViewProjection,c_ShaderUniforms.m_mTempMatrix);
	}
	if(this.m_mDepthBiasMatrix!=-1){
		bb_math3d_Mat4Mul(c_RenderState.m_DepthBiasMatrix,c_RenderState.m_ModelMatrix,c_ShaderUniforms.m_mTempMatrix);
		c_Renderer.m_SetShaderMat4(this.m_mDepthBiasMatrix,c_ShaderUniforms.m_mTempMatrix);
	}
	if(this.m_mShadowsEnabled!=-1){
		c_Renderer.m_SetShaderInt(this.m_mShadowsEnabled,((c_RenderState.m_ShadowsEnabled)?1:0));
	}
	if(this.m_mDepthEpsilon!=-1){
		c_Renderer.m_SetShaderFloat(this.m_mDepthEpsilon,c_RenderState.m_DepthEpsilon);
	}
	if(this.m_mSkinned!=-1){
		c_Renderer.m_SetShaderInt(this.m_mSkinned,((c_RenderState.m_Skinned)?1:0));
	}
	if(this.m_mBones[0]!=-1){
		var t_lastIndex=bb_math_Min(c_Renderer.m_MaxBones(),c_RenderState.m_BoneMatrices.length);
		for(var t_i=0;t_i<t_lastIndex;t_i=t_i+1){
			if(this.m_mBones[t_i]!=-1){
				c_Renderer.m_SetShaderMat4(this.m_mBones[t_i],c_RenderState.m_BoneMatrices[t_i]);
			}
		}
	}
	if(this.m_mSolidMode!=-1){
		if(c_RenderState.m_BlendMode==0){
			c_Renderer.m_SetShaderInt(this.m_mSolidMode,1);
		}else{
			c_Renderer.m_SetShaderInt(this.m_mSolidMode,0);
		}
	}
	if(this.m_mMaterialColor!=-1){
		c_Renderer.m_SetShaderVec4(this.m_mMaterialColor,(c_Color2.m_R(c_RenderState.m_Color))/255.0,(c_Color2.m_G(c_RenderState.m_Color))/255.0,(c_Color2.m_B(c_RenderState.m_Color))/255.0,(c_Color2.m_A(c_RenderState.m_Color))/255.0);
	}
	if(this.m_mAmbient!=-1){
		c_Renderer.m_SetShaderVec3(this.m_mAmbient,(c_Color2.m_R(c_RenderState.m_Ambient))/255.0,(c_Color2.m_G(c_RenderState.m_Ambient))/255.0,(c_Color2.m_B(c_RenderState.m_Ambient))/255.0);
	}
	if(this.m_mMaterialShininess!=-1){
		c_Renderer.m_SetShaderFloat(this.m_mMaterialShininess,c_RenderState.m_Shininess);
	}
	if(this.m_mMaterialSpecularPower!=-1){
		c_Renderer.m_SetShaderFloat(this.m_mMaterialSpecularPower,c_RenderState.m_SpecularPower);
	}
	if(this.m_mCubeOpacity!=-1){
		c_Renderer.m_SetShaderFloat(this.m_mCubeOpacity,c_RenderState.m_CubeOpacity);
	}
	c_Renderer.m_SetShaderVec3(this.m_mFogData,c_RenderState.m_FogMinDistance,c_RenderState.m_FogMaxDistance,((c_RenderState.m_FogEnabled)?1:0));
	if(c_RenderState.m_FogEnabled){
		c_Renderer.m_SetShaderVec3(this.m_mFogColor,(c_Color2.m_R(c_RenderState.m_FogColor))/255.0,(c_Color2.m_G(c_RenderState.m_FogColor))/255.0,(c_Color2.m_B(c_RenderState.m_FogColor))/255.0);
	}
	if(this.m_mRefractCoef!=-1){
		c_Renderer.m_SetShaderFloat(this.m_mRefractCoef,c_RenderState.m_RefractCoef);
	}
	if(this.m_mNumLights!=-1){
		c_Renderer.m_SetShaderInt(this.m_mNumLights,c_RenderState.m_NumLights);
	}
	for(var t_i2=0;t_i2<c_RenderState.m_NumLights;t_i2=t_i2+1){
		if(this.m_mLightVector[t_i2]!=-1){
			c_Renderer.m_SetShaderVec4(this.m_mLightVector[t_i2],c_RenderState.m_LightPos[t_i2][0],c_RenderState.m_LightPos[t_i2][1],c_RenderState.m_LightPos[t_i2][2],c_RenderState.m_LightPos[t_i2][3]);
		}
		if(this.m_mLightData[t_i2]!=-1){
			c_Renderer.m_SetShaderVec4(this.m_mLightData[t_i2],(c_Color2.m_R(c_RenderState.m_LightColor[t_i2]))/255.0,(c_Color2.m_G(c_RenderState.m_LightColor[t_i2]))/255.0,(c_Color2.m_B(c_RenderState.m_LightColor[t_i2]))/255.0,c_RenderState.m_LightRadius[t_i2]);
		}
	}
	if(this.m_mBaseTexSampler!=-1){
		c_Renderer.m_SetShaderInt(this.m_mBaseTexSampler,0);
	}
	if(this.m_mNormalTexSampler!=-1){
		c_Renderer.m_SetShaderInt(this.m_mNormalTexSampler,1);
	}
	if(this.m_mShininessTexSampler!=-1){
		c_Renderer.m_SetShaderInt(this.m_mShininessTexSampler,2);
	}
	if(this.m_mLightmapSampler!=-1){
		c_Renderer.m_SetShaderInt(this.m_mLightmapSampler,3);
	}
	if(this.m_mCubemapSampler!=-1){
		c_Renderer.m_SetShaderInt(this.m_mCubemapSampler,4);
	}
	if(this.m_mDepthSampler!=-1){
		c_Renderer.m_SetShaderInt(this.m_mDepthSampler,5);
	}
	if(this.m_mUseColorTex!=-1){
		c_Renderer.m_SetShaderInt(this.m_mUseColorTex,((c_RenderState.m_UseColorTex)?1:0));
	}
	if(this.m_mUseNormalTex!=-1){
		c_Renderer.m_SetShaderInt(this.m_mUseNormalTex,((c_RenderState.m_UseNormalTex)?1:0));
	}
	if(this.m_mUseShininessTex!=-1){
		c_Renderer.m_SetShaderInt(this.m_mUseShininessTex,((c_RenderState.m_UseShininessTex)?1:0));
	}
	if(this.m_mUseLightmap!=-1){
		c_Renderer.m_SetShaderInt(this.m_mUseLightmap,((c_RenderState.m_UseLightTex)?1:0));
	}
	if(this.m_mUseCubemap!=-1){
		c_Renderer.m_SetShaderInt(this.m_mUseCubemap,((c_RenderState.m_UseCubeTex)?1:0));
	}
	if(this.m_mTextureMatrix!=-1){
		c_Renderer.m_SetShaderMat4(this.m_mTextureMatrix,c_RenderState.m_TextureMatrix);
	}
}
function c_ShaderAttribs(){
	Object.call(this);
	this.m_mVertexPos=0;
	this.m_mVertexNormal=0;
	this.m_mVertexTangent=0;
	this.m_mVertexColor=0;
	this.m_mVertexTexCoords=0;
	this.m_mVertexBoneIndices=0;
	this.m_mVertexBoneWeights=0;
}
c_ShaderAttribs.m_new=function(t_shader){
	this.m_mVertexPos=c_Renderer.m_ShaderAttribLocation(t_shader,"VertexPos");
	this.m_mVertexNormal=c_Renderer.m_ShaderAttribLocation(t_shader,"VertexNormal");
	this.m_mVertexTangent=c_Renderer.m_ShaderAttribLocation(t_shader,"VertexTangent");
	this.m_mVertexColor=c_Renderer.m_ShaderAttribLocation(t_shader,"VertexColor");
	this.m_mVertexTexCoords=c_Renderer.m_ShaderAttribLocation(t_shader,"VertexTexCoords");
	this.m_mVertexBoneIndices=c_Renderer.m_ShaderAttribLocation(t_shader,"VertexBoneIndices");
	this.m_mVertexBoneWeights=c_Renderer.m_ShaderAttribLocation(t_shader,"VertexBoneWeights");
	return this;
}
c_ShaderAttribs.m_new2=function(){
	return this;
}
c_ShaderAttribs.prototype.p_Enable=function(t_coordsOffset,t_normalsOffset,t_tangentsOffset,t_colorsOffset,t_texCoordsOffset,t_boneIndicesOffset,t_boneWeightsOffset,t_stride){
	if(t_coordsOffset>=0){
		c_Renderer.m_ShaderEnableAttrib(this.m_mVertexPos,3,t_stride,t_coordsOffset);
	}
	if(t_normalsOffset>=0){
		c_Renderer.m_ShaderEnableAttrib(this.m_mVertexNormal,3,t_stride,t_normalsOffset);
	}
	if(t_tangentsOffset>=0){
		c_Renderer.m_ShaderEnableAttrib(this.m_mVertexTangent,3,t_stride,t_tangentsOffset);
	}
	if(t_colorsOffset>=0){
		c_Renderer.m_ShaderEnableAttrib(this.m_mVertexColor,4,t_stride,t_colorsOffset);
	}
	if(t_texCoordsOffset>=0){
		c_Renderer.m_ShaderEnableAttrib(this.m_mVertexTexCoords,4,t_stride,t_texCoordsOffset);
	}
	if(t_boneIndicesOffset>=0){
		c_Renderer.m_ShaderEnableAttrib(this.m_mVertexBoneIndices,4,t_stride,t_boneIndicesOffset);
	}
	if(t_boneWeightsOffset>=0){
		c_Renderer.m_ShaderEnableAttrib(this.m_mVertexBoneWeights,4,t_stride,t_boneWeightsOffset);
	}
}
c_ShaderAttribs.prototype.p_Disable=function(){
	c_Renderer.m_ShaderDisableAttrib(this.m_mVertexPos);
	c_Renderer.m_ShaderDisableAttrib(this.m_mVertexNormal);
	c_Renderer.m_ShaderDisableAttrib(this.m_mVertexTangent);
	c_Renderer.m_ShaderDisableAttrib(this.m_mVertexColor);
	c_Renderer.m_ShaderDisableAttrib(this.m_mVertexTexCoords);
	c_Renderer.m_ShaderDisableAttrib(this.m_mVertexBoneIndices);
	c_Renderer.m_ShaderDisableAttrib(this.m_mVertexBoneWeights);
}
function c_DataBuffer(){
	BBDataBuffer.call(this);
}
c_DataBuffer.prototype=extend_class(BBDataBuffer);
c_DataBuffer.m_new=function(t_length,t_direct){
	if(!this._New(t_length)){
		error("Allocate DataBuffer failed");
	}
	return this;
}
c_DataBuffer.m_new2=function(){
	return this;
}
c_DataBuffer.prototype.p_CopyBytes=function(t_address,t_dst,t_dstaddress,t_count){
	if(t_address+t_count>this.Length()){
		t_count=this.Length()-t_address;
	}
	if(t_dstaddress+t_count>t_dst.Length()){
		t_count=t_dst.Length()-t_dstaddress;
	}
	if(t_dstaddress<=t_address){
		for(var t_i=0;t_i<t_count;t_i=t_i+1){
			t_dst.PokeByte(t_dstaddress+t_i,this.PeekByte(t_address+t_i));
		}
	}else{
		for(var t_i2=t_count-1;t_i2>=0;t_i2=t_i2+-1){
			t_dst.PokeByte(t_dstaddress+t_i2,this.PeekByte(t_address+t_i2));
		}
	}
}
c_DataBuffer.m_Load=function(t_path){
	var t_buf=c_DataBuffer.m_new2.call(new c_DataBuffer);
	if(t_buf._Load(t_path)){
		return t_buf;
	}
	return null;
}
c_DataBuffer.prototype.p_PeekBytes=function(t_address,t_bytes,t_offset,t_count){
	if(t_address+t_count>this.Length()){
		t_count=this.Length()-t_address;
	}
	if(t_offset+t_count>t_bytes.length){
		t_count=t_bytes.length-t_offset;
	}
	for(var t_i=0;t_i<t_count;t_i=t_i+1){
		t_bytes[t_offset+t_i]=this.PeekByte(t_address+t_i);
	}
}
c_DataBuffer.prototype.p_PeekBytes2=function(t_address,t_count){
	if(t_address+t_count>this.Length()){
		t_count=this.Length()-t_address;
	}
	var t_bytes=new_number_array(t_count);
	this.p_PeekBytes(t_address,t_bytes,0,t_count);
	return t_bytes;
}
c_DataBuffer.prototype.p_PeekString=function(t_address,t_count,t_encoding){
	var t_1=t_encoding;
	if(t_1=="utf8"){
		var t_p=this.p_PeekBytes2(t_address,t_count);
		var t_i=0;
		var t_e=t_p.length;
		var t_err=false;
		var t_q=new_number_array(t_e);
		var t_j=0;
		while(t_i<t_e){
			var t_c=t_p[t_i]&255;
			t_i+=1;
			if((t_c&128)!=0){
				if((t_c&224)==192){
					if(t_i>=t_e || (t_p[t_i]&192)!=128){
						t_err=true;
						break;
					}
					t_c=(t_c&31)<<6|t_p[t_i]&63;
					t_i+=1;
				}else{
					if((t_c&240)==224){
						if(t_i+1>=t_e || (t_p[t_i]&192)!=128 || (t_p[t_i+1]&192)!=128){
							t_err=true;
							break;
						}
						t_c=(t_c&15)<<12|(t_p[t_i]&63)<<6|t_p[t_i+1]&63;
						t_i+=2;
					}else{
						t_err=true;
						break;
					}
				}
			}
			t_q[t_j]=t_c;
			t_j+=1;
		}
		if(t_err){
			return string_fromchars(t_p);
		}
		if(t_j<t_e){
			t_q=t_q.slice(0,t_j);
		}
		return string_fromchars(t_q);
	}else{
		if(t_1=="ascii"){
			var t_p2=this.p_PeekBytes2(t_address,t_count);
			for(var t_i2=0;t_i2<t_p2.length;t_i2=t_i2+1){
				t_p2[t_i2]&=255;
			}
			return string_fromchars(t_p2);
		}
	}
	error("Invalid string encoding:"+t_encoding);
	return "";
}
c_DataBuffer.prototype.p_PeekString2=function(t_address,t_encoding){
	return this.p_PeekString(t_address,this.Length()-t_address,t_encoding);
}
function bb_math3d_Mat4Identity(t_out){
	for(var t_i=0;t_i<16;t_i=t_i+1){
		t_out[t_i]=0.0;
	}
	t_out[0]=1.0;
	t_out[5]=1.0;
	t_out[10]=1.0;
	t_out[15]=1.0;
}
function bb_math_Clamp(t_n,t_min,t_max){
	if(t_n<t_min){
		return t_min;
	}
	if(t_n>t_max){
		return t_max;
	}
	return t_n;
}
function bb_math_Clamp2(t_n,t_min,t_max){
	if(t_n<t_min){
		return t_min;
	}
	if(t_n>t_max){
		return t_max;
	}
	return t_n;
}
function bb_math3d_Mat4Mul(t_a,t_b,t_out){
	for(var t_i=0;t_i<4;t_i=t_i+1){
		var t_a0=t_a[t_i];
		var t_a1=t_a[t_i+4];
		var t_a2=t_a[t_i+8];
		var t_a3=t_a[t_i+12];
		t_out[t_i]=t_a0*t_b[0]+t_a1*t_b[1]+t_a2*t_b[2]+t_a3*t_b[3];
		t_out[t_i+4]=t_a0*t_b[4]+t_a1*t_b[5]+t_a2*t_b[6]+t_a3*t_b[7];
		t_out[t_i+8]=t_a0*t_b[8]+t_a1*t_b[9]+t_a2*t_b[10]+t_a3*t_b[11];
		t_out[t_i+12]=t_a0*t_b[12]+t_a1*t_b[13]+t_a2*t_b[14]+t_a3*t_b[15];
	}
}
var bb_math3d_tempMat4=[];
function bb_math3d_Mat4Copy(t_m,t_out){
	for(var t_i=0;t_i<16;t_i=t_i+1){
		t_out[t_i]=t_m[t_i];
	}
}
function bb_math_Abs(t_x){
	if(t_x>=0){
		return t_x;
	}
	return -t_x;
}
function bb_math_Abs2(t_x){
	if(t_x>=0.0){
		return t_x;
	}
	return -t_x;
}
function bb_math3d_Mat4Invert(t_m,t_out){
	bb_math3d_Mat4Copy(t_m,bb_math3d_tempMat4);
	t_out[0]=bb_math3d_tempMat4[5]*bb_math3d_tempMat4[10]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[5]*bb_math3d_tempMat4[11]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[9]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[9]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[13]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[11]-bb_math3d_tempMat4[13]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[10];
	t_out[4]=-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[10]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[4]*bb_math3d_tempMat4[11]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[11]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[10];
	t_out[8]=bb_math3d_tempMat4[4]*bb_math3d_tempMat4[9]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[11]*bb_math3d_tempMat4[13]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[5]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[13]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[5]*bb_math3d_tempMat4[11]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[9];
	t_out[12]=-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[9]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[4]*bb_math3d_tempMat4[10]*bb_math3d_tempMat4[13]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[5]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[13]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[5]*bb_math3d_tempMat4[10]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[9];
	t_out[1]=-bb_math3d_tempMat4[1]*bb_math3d_tempMat4[10]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[1]*bb_math3d_tempMat4[11]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[9]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[9]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[13]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[11]+bb_math3d_tempMat4[13]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[10];
	t_out[5]=bb_math3d_tempMat4[0]*bb_math3d_tempMat4[10]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[11]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[11]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[10];
	t_out[9]=-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[9]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[0]*bb_math3d_tempMat4[11]*bb_math3d_tempMat4[13]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[13]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[11]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[9];
	t_out[13]=bb_math3d_tempMat4[0]*bb_math3d_tempMat4[9]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[10]*bb_math3d_tempMat4[13]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[13]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[10]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[9];
	t_out[2]=bb_math3d_tempMat4[1]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[1]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[5]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[5]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[13]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[7]-bb_math3d_tempMat4[13]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[6];
	t_out[6]=-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[0]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[4]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[7]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[6];
	t_out[10]=bb_math3d_tempMat4[0]*bb_math3d_tempMat4[5]*bb_math3d_tempMat4[15]-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[13]-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[15]+bb_math3d_tempMat4[4]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[13]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[7]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[5];
	t_out[14]=-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[5]*bb_math3d_tempMat4[14]+bb_math3d_tempMat4[0]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[13]+bb_math3d_tempMat4[4]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[14]-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[13]-bb_math3d_tempMat4[12]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[6]+bb_math3d_tempMat4[12]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[5];
	t_out[3]=-bb_math3d_tempMat4[1]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[11]+bb_math3d_tempMat4[1]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[10]+bb_math3d_tempMat4[5]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[11]-bb_math3d_tempMat4[5]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[10]-bb_math3d_tempMat4[9]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[7]+bb_math3d_tempMat4[9]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[6];
	t_out[7]=bb_math3d_tempMat4[0]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[11]-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[10]-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[11]+bb_math3d_tempMat4[4]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[10]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[7]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[6];
	t_out[11]=-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[5]*bb_math3d_tempMat4[11]+bb_math3d_tempMat4[0]*bb_math3d_tempMat4[7]*bb_math3d_tempMat4[9]+bb_math3d_tempMat4[4]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[11]-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[9]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[7]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[3]*bb_math3d_tempMat4[5];
	t_out[15]=bb_math3d_tempMat4[0]*bb_math3d_tempMat4[5]*bb_math3d_tempMat4[10]-bb_math3d_tempMat4[0]*bb_math3d_tempMat4[6]*bb_math3d_tempMat4[9]-bb_math3d_tempMat4[4]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[10]+bb_math3d_tempMat4[4]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[9]+bb_math3d_tempMat4[8]*bb_math3d_tempMat4[1]*bb_math3d_tempMat4[6]-bb_math3d_tempMat4[8]*bb_math3d_tempMat4[2]*bb_math3d_tempMat4[5];
	var t_det=bb_math3d_tempMat4[0]*t_out[0]+bb_math3d_tempMat4[1]*t_out[4]+bb_math3d_tempMat4[2]*t_out[8]+bb_math3d_tempMat4[3]*t_out[12];
	if(bb_math_Abs2(t_det)<=0.00001){
		return;
	}
	var t_invdet=1.0/t_det;
	for(var t_i=0;t_i<16;t_i=t_i+1){
		t_out[t_i]*=t_invdet;
	}
}
function bb_math3d_Mat4Transpose(t_m,t_out){
	bb_math3d_Mat4Copy(t_m,bb_math3d_tempMat4);
	for(var t_c=0;t_c<4;t_c=t_c+1){
		for(var t_r=0;t_r<4;t_r=t_r+1){
			t_out[t_c*4+t_r]=bb_math3d_tempMat4[t_r*4+t_c];
		}
	}
}
function bb_math_Min(t_x,t_y){
	if(t_x<t_y){
		return t_x;
	}
	return t_y;
}
function bb_math_Min2(t_x,t_y){
	if(t_x<t_y){
		return t_x;
	}
	return t_y;
}
function c_Cache(){
	Object.call(this);
	this.m_mFonts=null;
	this.m_mMeshes=null;
	this.m_mSounds=null;
	this.m_mTextures=null;
}
c_Cache.m_mStack=[];
c_Cache.m_new=function(){
	this.m_mFonts=c_StringMap.m_new.call(new c_StringMap);
	this.m_mMeshes=c_StringMap2.m_new.call(new c_StringMap2);
	this.m_mSounds=c_StringMap3.m_new.call(new c_StringMap3);
	this.m_mTextures=c_StringMap4.m_new.call(new c_StringMap4);
	return this;
}
c_Cache.m__Push=function(){
	c_Cache.m_mStack=resize_object_array(c_Cache.m_mStack,c_Cache.m_mStack.length+1);
	c_Cache.m_mStack[c_Cache.m_mStack.length-1]=c_Cache.m_new.call(new c_Cache);
}
c_Cache.m__LoadedFont=function(t_filename){
	for(var t_i=c_Cache.m_mStack.length-1;t_i>=0;t_i=t_i+-1){
		if(c_Cache.m_mStack[t_i].m_mFonts.p_Contains2(t_filename)){
			return c_Cache.m_mStack[t_i].m_mFonts.p_Get(t_filename);
		}
	}
	return null;
}
c_Cache.m__LoadFont=function(t_filename){
	var t_font=c_Cache.m__LoadedFont(t_filename);
	if(t_font!=null){
		return t_font;
	}
	t_font=c_Font2.m_Load(t_filename,false);
	if(t_font!=null){
		c_Cache.m_mStack[c_Cache.m_mStack.length-1].m_mFonts.p_Set2(t_filename,t_font);
	}
	return t_font;
}
c_Cache.m__LoadedTexture=function(t_filename){
	for(var t_i=c_Cache.m_mStack.length-1;t_i>=0;t_i=t_i+-1){
		if(c_Cache.m_mStack[t_i].m_mTextures.p_Contains2(t_filename)){
			return c_Cache.m_mStack[t_i].m_mTextures.p_Get(t_filename);
		}
	}
	return null;
}
c_Cache.m__LoadTexture=function(t_left,t_right,t_front,t_back,t_top,t_bottom,t_filter){
	var t_filename=t_left+","+t_right+","+t_front+","+t_back+","+t_top+","+t_bottom;
	var t_tex=c_Cache.m__LoadedTexture(t_filename);
	if(t_tex!=null){
		return t_tex;
	}
	t_tex=c_Texture.m_Load(t_left,t_right,t_front,t_back,t_top,t_bottom,t_filter,false);
	if(t_tex!=null){
		c_Cache.m_mStack[c_Cache.m_mStack.length-1].m_mTextures.p_Set4(t_filename,t_tex);
	}
	return t_tex;
}
c_Cache.m__LoadTexture2=function(t_filename,t_filter){
	var t_tex=c_Cache.m__LoadedTexture(t_filename);
	if(t_tex!=null){
		return t_tex;
	}
	t_tex=c_Texture.m_Load2(t_filename,t_filter,false);
	if(t_tex!=null){
		c_Cache.m_mStack[c_Cache.m_mStack.length-1].m_mTextures.p_Set4(t_filename,t_tex);
	}
	return t_tex;
}
c_Cache.m__LoadedMesh=function(t_filename){
	for(var t_i=c_Cache.m_mStack.length-1;t_i>=0;t_i=t_i+-1){
		if(c_Cache.m_mStack[t_i].m_mMeshes.p_Contains2(t_filename)){
			return c_Cache.m_mStack[t_i].m_mMeshes.p_Get(t_filename);
		}
	}
	return null;
}
c_Cache.m__LoadMesh=function(t_filename,t_skeletonFilename,t_texFilter){
	var t_mesh=c_Cache.m__LoadedMesh(t_filename);
	if(t_mesh!=null){
		return t_mesh;
	}
	t_mesh=c_Mesh.m_Load(t_filename,t_texFilter,false);
	if(t_mesh!=null){
		c_Cache.m_mStack[c_Cache.m_mStack.length-1].m_mMeshes.p_Set3(t_filename,t_mesh);
	}
	return t_mesh;
}
function c_Font2(){
	Object.call(this);
	this.m_mFilename="";
	this.m_mHeight=.0;
	this.m_mTexture=null;
	this.m_mGlyphs=new_object_array(224);
	this.m_mMaxHeight=.0;
}
c_Font2.m_new=function(t_filename,t_height,t_tex){
	this.m_mFilename=t_filename;
	this.m_mHeight=t_height;
	this.m_mTexture=t_tex;
	for(var t_i=0;t_i<this.m_mGlyphs.length;t_i=t_i+1){
		this.m_mGlyphs[t_i]=c_Glyph2.m_new.call(new c_Glyph2);
	}
	return this;
}
c_Font2.m_new2=function(){
	return this;
}
c_Font2.prototype.p__GlyphData=function(t_index,t_x,t_y,t_w,t_h,t_xoffset,t_yoffset){
	this.m_mGlyphs[t_index].m_mX=t_x;
	this.m_mGlyphs[t_index].m_mY=t_y;
	this.m_mGlyphs[t_index].m_mWidth=t_w;
	this.m_mGlyphs[t_index].m_mHeight=t_h;
	this.m_mGlyphs[t_index].m_mXOffset=t_xoffset;
	this.m_mGlyphs[t_index].m_mYOffset=t_yoffset;
	if(t_index==33 && this.m_mGlyphs[0].m_mWidth==0.0){
		this.m_mGlyphs[0].m_mWidth=t_w/2.0;
	}
	this.m_mMaxHeight=bb_math_Max2(this.m_mMaxHeight,t_h);
}
c_Font2.prototype.p__GlyphData2=function(t_index){
	return this.m_mGlyphs[t_index];
}
c_Font2.m__LoadData=function(t_data,t_filename){
	var t_stream=c_DataStream.m_new.call(new c_DataStream,t_data,0);
	var t_fontPath=bb_filepath_ExtractDir(t_filename);
	if(t_fontPath!=""){
		t_fontPath=t_fontPath+"/";
	}
	var t_id=t_stream.p_ReadString(4,"utf8");
	if(t_id!="FN01"){
		return null;
	}
	var t_texLen=t_stream.p_ReadInt();
	var t_texName=t_stream.p_ReadString(t_texLen,"utf8");
	if(t_texName!=""){
		t_texName=t_fontPath+t_texName;
	}
	var t_height=t_stream.p_ReadShort()&65535;
	var t_numGlyphs=t_stream.p_ReadInt();
	var t_firstChar=t_stream.p_ReadInt();
	var t_tex=c_Texture.m_Load2(t_texName,0,false);
	if(!((t_tex)!=null)){
		return null;
	}
	var t_font=c_Font2.m_new.call(new c_Font2,t_filename,(t_height),t_tex);
	for(var t_i=0;t_i<t_numGlyphs;t_i=t_i+1){
		var t_x=t_stream.p_ReadFloat();
		var t_y=t_stream.p_ReadFloat();
		var t_width=t_stream.p_ReadFloat();
		var t_height2=t_stream.p_ReadFloat();
		var t_xoffset=t_stream.p_ReadFloat();
		var t_yoffset=t_stream.p_ReadFloat();
		t_font.p__GlyphData(t_i,t_x,t_y,t_width,t_height2,t_xoffset,t_yoffset);
	}
	t_stream.p_Close();
	return t_font;
}
c_Font2.m__Load=function(t_filename){
	var t_fixedFilename=t_filename;
	if(t_fixedFilename.length>2 && String.fromCharCode(t_fixedFilename.charCodeAt(0))!="/" && String.fromCharCode(t_fixedFilename.charCodeAt(1))!=":"){
		t_fixedFilename="cerberus://data/"+t_fixedFilename;
	}
	var t_data=c_DataBuffer.m_Load(t_fixedFilename);
	if(!((t_data)!=null)){
		return null;
	}
	var t_font=c_Font2.m__LoadData(t_data,t_filename);
	t_data.Discard();
	return t_font;
}
c_Font2.m_Load=function(t_filename,t_cache){
	if(t_cache){
		return c_Cache.m__LoadFont(t_filename);
	}else{
		return c_Font2.m__Load(t_filename);
	}
}
c_Font2.prototype.p_TextWidth=function(t_text){
	var t_width=0.0;
	for(var t_i=0;t_i<t_text.length;t_i=t_i+1){
		t_width+=this.m_mGlyphs[t_text.charCodeAt(t_i)-32].m_mWidth;
	}
	return t_width;
}
c_Font2.prototype.p_TextHeight=function(t_text){
	return this.m_mMaxHeight;
}
c_Font2.prototype.p_Draw=function(t_x,t_y,t_text){
	t_y+=this.m_mMaxHeight;
	for(var t_i=0;t_i<t_text.length;t_i=t_i+1){
		var t_glyph=this.m_mGlyphs[t_text.charCodeAt(t_i)-32];
		if(t_text.charCodeAt(t_i)-32!=0 && t_glyph.m_mWidth!=0.0 && t_glyph.m_mHeight!=0.0){
			this.m_mTexture.p_Draw2(t_x+t_glyph.m_mXOffset,t_y+t_glyph.m_mYOffset,0.0,0.0,t_glyph.m_mX,t_glyph.m_mY,t_glyph.m_mWidth,t_glyph.m_mHeight);
		}
		t_x+=t_glyph.m_mWidth;
	}
}
function c_Map3(){
	Object.call(this);
	this.m_root=null;
}
c_Map3.m_new=function(){
	return this;
}
c_Map3.prototype.p_Compare2=function(t_lhs,t_rhs){
}
c_Map3.prototype.p_FindNode2=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map3.prototype.p_Contains2=function(t_key){
	return this.p_FindNode2(t_key)!=null;
}
c_Map3.prototype.p_Get=function(t_key){
	var t_node=this.p_FindNode2(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return null;
}
c_Map3.prototype.p_RotateLeft3=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map3.prototype.p_RotateRight3=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map3.prototype.p_InsertFixup3=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft3(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight3(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight3(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft3(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map3.prototype.p_Set2=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				t_node.m_value=t_value;
				return false;
			}
		}
	}
	t_node=c_Node3.m_new.call(new c_Node3,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup3(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
function c_StringMap(){
	c_Map3.call(this);
}
c_StringMap.prototype=extend_class(c_Map3);
c_StringMap.m_new=function(){
	c_Map3.m_new.call(this);
	return this;
}
c_StringMap.prototype.p_Compare2=function(t_lhs,t_rhs){
	return string_compare(t_lhs,t_rhs);
}
function c_Mesh(){
	Object.call(this);
	this.m_mFilename="";
	this.m_mSurfaces=[];
	this.m_mMaterials=[];
	this.m_mBones=[];
	this.m_mSequences=[];
	this.m_mBoxMin=new_number_array(3);
	this.m_mBoxMax=new_number_array(3);
	this.m_rtVertexPosition0=new_number_array(3);
	this.m_rtVertexPosition1=new_number_array(3);
	this.m_rtVertexPosition2=new_number_array(3);
	this.m_rtTriangleEdge1=new_number_array(3);
	this.m_rtTriangleEdge2=new_number_array(3);
	this.m_rtTriangleCross=new_number_array(3);
	this.m_rtIntersectionInfo=new_number_array(3);
}
c_Mesh.m_new=function(){
	this.m_mFilename="";
	this.m_mSurfaces=new_object_array(0);
	this.m_mMaterials=new_object_array(0);
	this.m_mBones=new_object_array(0);
	this.m_mSequences=new_object_array(0);
	return this;
}
c_Mesh.m_new2=function(t_other){
	this.m_mFilename=t_other.m_mFilename;
	this.m_mSurfaces=new_object_array(t_other.m_mSurfaces.length);
	for(var t_i=0;t_i<t_other.m_mSurfaces.length;t_i=t_i+1){
		this.m_mSurfaces[t_i]=c_Surface.m_new2.call(new c_Surface,t_other.m_mSurfaces[t_i]);
	}
	this.m_mMaterials=new_object_array(t_other.m_mMaterials.length);
	for(var t_i2=0;t_i2<t_other.m_mMaterials.length;t_i2=t_i2+1){
		this.m_mMaterials[t_i2]=c_Material.m_new2.call(new c_Material,t_other.m_mMaterials[t_i2]);
	}
	this.m_mBones=new_object_array(t_other.m_mBones.length);
	for(var t_i3=0;t_i3<t_other.m_mBones.length;t_i3=t_i3+1){
		this.m_mBones[t_i3]=c_Bone.m_new2.call(new c_Bone,t_other.m_mBones[t_i3]);
	}
	this.m_mSequences=new_object_array(t_other.m_mSequences.length);
	for(var t_i4=0;t_i4<t_other.m_mSequences.length;t_i4=t_i4+1){
		this.m_mSequences[t_i4]=c_AnimSequence.m_new.call(new c_AnimSequence,t_other.m_mSequences[t_i4].m_mName,t_other.m_mSequences[t_i4].m_mFps,t_other.m_mSequences[t_i4].m_mFirstFrame,t_other.m_mSequences[t_i4].m_mLastFrame);
	}
	bb_math3d_Vec3Set(t_other.m_mBoxMin[0],t_other.m_mBoxMin[1],t_other.m_mBoxMin[2],this.m_mBoxMin);
	bb_math3d_Vec3Set(t_other.m_mBoxMax[0],t_other.m_mBoxMax[1],t_other.m_mBoxMax[2],this.m_mBoxMax);
	return this;
}
c_Mesh.prototype.p_NumSurfaces=function(){
	return this.m_mSurfaces.length;
}
c_Mesh.prototype.p_Surface=function(t_index){
	return this.m_mSurfaces[t_index];
}
c_Mesh.prototype.p_Rebuild=function(){
	if(this.p_NumSurfaces()>0 && this.p_Surface(0).p_NumVertices()>0){
		bb_math3d_Vec3Set(this.p_Surface(0).p_VertexX(0),this.p_Surface(0).p_VertexY(0),this.p_Surface(0).p_VertexZ(0),this.m_mBoxMin);
		bb_math3d_Vec3Set(this.m_mBoxMin[0],this.m_mBoxMin[1],this.m_mBoxMin[2],this.m_mBoxMax);
	}else{
		bb_math3d_Vec3Set(0.0,0.0,0.0,this.m_mBoxMin);
		bb_math3d_Vec3Set(0.0,0.0,0.0,this.m_mBoxMax);
	}
	var t_=this.m_mSurfaces;
	var t_2=0;
	while(t_2<t_.length){
		var t_surf=t_[t_2];
		t_2=t_2+1;
		for(var t_index=1;t_index<t_surf.p_NumVertices();t_index=t_index+1){
			var t_vx=t_surf.p_VertexX(t_index);
			var t_vy=t_surf.p_VertexY(t_index);
			var t_vz=t_surf.p_VertexZ(t_index);
			if(t_vx<this.m_mBoxMin[0]){
				this.m_mBoxMin[0]=t_vx;
			}
			if(t_vy<this.m_mBoxMin[1]){
				this.m_mBoxMin[1]=t_vy;
			}
			if(t_vz<this.m_mBoxMin[2]){
				this.m_mBoxMin[2]=t_vz;
			}
			if(t_vx>this.m_mBoxMax[0]){
				this.m_mBoxMax[0]=t_vx;
			}
			if(t_vy>this.m_mBoxMax[1]){
				this.m_mBoxMax[1]=t_vy;
			}
			if(t_vz>this.m_mBoxMax[2]){
				this.m_mBoxMax[2]=t_vz;
			}
		}
		t_surf.p_Rebuild();
	}
}
c_Mesh.prototype.p_AddSurface=function(t_surf,t_mat){
	if(t_mat==null){
		t_mat=c_Material.m_new.call(new c_Material,null,null);
	}
	this.m_mSurfaces=resize_object_array(this.m_mSurfaces,this.m_mSurfaces.length+1);
	this.m_mSurfaces[this.m_mSurfaces.length-1]=t_surf;
	this.p_Rebuild();
	t_surf.p_Rebuild();
	this.m_mMaterials=resize_object_array(this.m_mMaterials,this.m_mMaterials.length+1);
	this.m_mMaterials[this.m_mMaterials.length-1]=t_mat;
}
c_Mesh.m_CreateSkybox=function(){
	var t_surf=c_Surface.m_new.call(new c_Surface,2);
	t_surf.p_AddVertex(-0.5,0.5,-0.5,0.0,0.0,1.0,-1,0.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,-1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,0.5,-0.5,0.0,0.0,1.0,-1,1.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,-1.0,0.0,0.0);
	t_surf.p_AddVertex(-0.5,-0.5,-0.5,0.0,0.0,1.0,-1,0.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,-1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,-0.5,-0.5,0.0,0.0,1.0,-1,1.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,-1.0,0.0,0.0);
	t_surf.p_AddTriangle(0,2,1);
	t_surf.p_AddTriangle(3,1,2);
	t_surf.p_AddVertex(0.5,0.5,0.5,0.0,0.0,-1.0,-1,0.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(-0.5,0.5,0.5,0.0,0.0,-1.0,-1,1.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,-0.5,0.5,0.0,0.0,-1.0,-1,0.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(-0.5,-0.5,0.5,0.0,0.0,-1.0,-1,1.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddTriangle(4,6,5);
	t_surf.p_AddTriangle(7,5,6);
	t_surf.p_AddVertex(-0.5,0.5,0.5,1.0,0.0,0.0,-1,0.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,0.0,0.0,1.0);
	t_surf.p_AddVertex(-0.5,0.5,-0.5,1.0,0.0,0.0,-1,1.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,0.0,0.0,1.0);
	t_surf.p_AddVertex(-0.5,-0.5,0.5,1.0,0.0,0.0,-1,0.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,0.0,0.0,1.0);
	t_surf.p_AddVertex(-0.5,-0.5,-0.5,1.0,0.0,0.0,-1,1.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,0.0,0.0,1.0);
	t_surf.p_AddTriangle(8,10,9);
	t_surf.p_AddTriangle(11,9,10);
	t_surf.p_AddVertex(0.5,0.5,-0.5,-1.0,0.0,0.0,-1,0.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,0.0,0.0,-1.0);
	t_surf.p_AddVertex(0.5,0.5,0.5,-1.0,0.0,0.0,-1,1.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,0.0,0.0,-1.0);
	t_surf.p_AddVertex(0.5,-0.5,-0.5,-1.0,0.0,0.0,-1,0.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,0.0,0.0,-1.0);
	t_surf.p_AddVertex(0.5,-0.5,0.5,-1.0,0.0,0.0,-1,1.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,0.0,0.0,-1.0);
	t_surf.p_AddTriangle(12,14,13);
	t_surf.p_AddTriangle(15,13,14);
	t_surf.p_AddVertex(-0.5,0.5,0.5,0.0,-1.0,0.0,-1,0.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,0.5,0.5,0.0,-1.0,0.0,-1,1.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(-0.5,0.5,-0.5,0.0,-1.0,0.0,-1,0.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,0.5,-0.5,0.0,-1.0,0.0,-1,1.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddTriangle(16,18,17);
	t_surf.p_AddTriangle(19,17,18);
	t_surf.p_AddVertex(-0.5,-0.5,-0.5,0.0,1.0,0.0,-1,0.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,-0.5,-0.5,0.0,1.0,0.0,-1,1.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(-0.5,-0.5,0.5,0.0,1.0,0.0,-1,0.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,-0.5,0.5,0.0,1.0,0.0,-1,1.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddTriangle(20,22,21);
	t_surf.p_AddTriangle(23,21,22);
	var t_skybox=c_Mesh.m_new.call(new c_Mesh);
	t_skybox.p_AddSurface(t_surf,null);
	t_skybox.p_Rebuild();
	return t_skybox;
}
c_Mesh.prototype.p_Material=function(t_index){
	return this.m_mMaterials[t_index];
}
c_Mesh.m_CreateQuad=function(t_mat){
	var t_surf=c_Surface.m_new.call(new c_Surface,2);
	t_surf.p_AddVertex(-0.5,0.5,0.0,0.0,0.0,-1.0,-1,0.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,0.5,0.0,0.0,0.0,-1.0,-1,1.0,0.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(-0.5,-0.5,0.0,0.0,0.0,-1.0,-1,0.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddVertex(0.5,-0.5,0.0,0.0,0.0,-1.0,-1,1.0,1.0);
	t_surf.p_VertexTangent(t_surf.p_NumVertices()-1,1.0,0.0,0.0);
	t_surf.p_AddTriangle(0,1,2);
	t_surf.p_AddTriangle(3,2,1);
	var t_quad=c_Mesh.m_new.call(new c_Mesh);
	t_quad.p_AddSurface(t_surf,t_mat);
	t_quad.p_Rebuild();
	return t_quad;
}
c_Mesh.prototype.p_Rotate=function(t_pitch,t_yaw,t_roll){
	var t_=this.m_mSurfaces;
	var t_2=0;
	while(t_2<t_.length){
		var t_surf=t_[t_2];
		t_2=t_2+1;
		t_surf.p_Rotate2(t_pitch,t_yaw,t_roll,true);
	}
	this.p_Rebuild();
}
c_Mesh.prototype.p_NumFrames=function(){
	if(this.m_mSequences.length==0){
		return 0;
	}else{
		return this.m_mSequences[this.m_mSequences.length-1].m_mLastFrame;
	}
}
c_Mesh.m_IsLoaded=function(t_filename){
	return c_Cache.m__LoadedMesh(t_filename)!=null;
}
c_Mesh.prototype.p_Filename=function(t_filename){
	this.m_mFilename=t_filename;
}
c_Mesh.prototype.p_Filename2=function(){
	return this.m_mFilename;
}
c_Mesh.m__LoadData_OBJ=function(t_filename,t_texFilter){
	var t_v=c_FloatStack.m_new2.call(new c_FloatStack);
	var t_vt=c_FloatStack.m_new2.call(new c_FloatStack);
	var t_vn=c_FloatStack.m_new2.call(new c_FloatStack);
	var t_meshPath=bb_filepath_ExtractDir(t_filename);
	var t_materialPath=bb_filepath_ExtractDir(t_filename);
	var t_texturePath=bb_filepath_ExtractDir(t_filename);
	var t_texturefile="";
	if(t_meshPath!=""){
		t_meshPath=t_meshPath+"/";
	}
	var t_matMap=c_StringMap5.m_new.call(new c_StringMap5);
	var t_mesh=c_Mesh.m_new.call(new c_Mesh);
	t_mesh.p_Filename(t_filename);
	var t_surf=c_Surface.m_new.call(new c_Surface,2);
	var t_mat=null;
	var t_matuse=null;
	var t_matname="";
	var t_vtCnt=0;
	var t_=bb_app_LoadString(t_filename).split("\n");
	var t_2=0;
	while(t_2<t_.length){
		var t_line=t_[t_2];
		t_2=t_2+1;
		t_line=string_trim(t_line);
		t_line=string_replace(t_line,"  "," ");
		if(!((t_line).length!=0) || string_startswith(t_line,"#")){
			continue;
		}
		var t_bits=t_line.split(" ");
		var t_22=t_bits[0];
		if(t_22=="mtllib"){
			t_materialPath=t_materialPath+("/"+t_bits[1]);
			var t_matlines=bb_app_LoadString(t_materialPath).split("\n");
			var t_3=t_matlines;
			var t_4=0;
			while(t_4<t_3.length){
				var t_matline=t_3[t_4];
				t_4=t_4+1;
				var t_matbits=t_matline.split(" ");
				var t_32=t_matbits[0];
				if(t_32=="newmtl"){
					if(t_matname.length>0){
						t_matMap.p_Add2(t_matname,t_mat);
					}
					t_matname=t_matbits[1];
					t_mat=c_Material.m_new.call(new c_Material,null,null);
					t_mat.p_Culling(false);
					t_mat.p_DepthWrite(true);
					t_mat.p_Lighting(true);
					t_mat.p_CastShadows(true);
					t_mat.p_ReceiveShadows(true);
					t_mat.p_Fog2(true);
					t_mat.p_BlendMode(0);
					t_mat.p_Shininess(0.0);
					t_mat.p_RefractionCoef(-1.0);
					t_mat.p_SpecularPower(64.0);
					t_mat.p_CubeOpacity(0.5);
				}else{
					if(t_32=="Ns"){
					}else{
						if(t_32=="Ka"){
						}else{
							if(t_32=="Kd"){
								t_mat.p_Color((((((parseFloat(t_matbits[1])*255.0)|0)<<16)+(((parseFloat(t_matbits[2])*255.0)|0)<<8))+parseFloat(t_matbits[3])*255.0)|0);
							}else{
								if(t_32=="Ks"){
								}else{
									if(t_32=="Ke"){
									}else{
										if(t_32=="Ni"){
										}else{
											if(t_32=="d"){
											}else{
												if(t_32=="illum"){
												}else{
													if(t_32=="map_Kd"){
														t_texturefile="/"+string_trim(t_matbits[1]);
														t_mat.p_ColorTexture(c_Texture.m_Load2(t_texturePath+t_texturefile,t_texFilter,true));
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			t_matMap.p_Add2(t_matname,t_mat);
		}else{
			if(t_22=="usemtl"){
				if(t_surf.p_NumTriangles()>0){
					t_mesh.p_AddSurface(t_surf,t_matuse);
					t_surf=c_Surface.m_new.call(new c_Surface,2);
					t_vtCnt=0;
				}
				t_matname=t_bits[1];
				t_matuse=t_matMap.p_Get(t_matname);
			}else{
				if(t_22=="v"){
					if(t_bits.length==4 || t_bits.length==5){
						t_v.p_Push7(parseFloat(t_bits[1]));
						t_v.p_Push7(parseFloat(t_bits[2]));
						t_v.p_Push7(parseFloat(t_bits[3]));
					}else{
						error("OBJ error - Vertex count ("+String(t_bits.length-1)+")");
					}
				}else{
					if(t_22=="vn"){
						if(t_bits.length==4){
							t_vn.p_Push7(parseFloat(t_bits[1]));
							t_vn.p_Push7(parseFloat(t_bits[2]));
							t_vn.p_Push7(parseFloat(t_bits[3]));
						}else{
							error("OBJ error - Vertex normals count ("+String(t_bits.length-1)+")");
						}
					}else{
						if(t_22=="vt"){
							if(t_bits.length==3 || t_bits.length==4){
								t_vt.p_Push7(parseFloat(t_bits[1]));
								t_vt.p_Push7(1.0-parseFloat(t_bits[2]));
							}else{
								error("OBJ error - Texture coordinates count ("+String(t_bits.length-1)+")");
							}
						}else{
							if(t_22=="vp"){
							}else{
								if(t_22=="f"){
									if(t_bits.length==4){
										for(var t_i=1;t_i<=3;t_i=t_i+1){
											var t_bits2=t_bits[t_i].split("/");
											var t_vi=-1;
											var t_vti=-1;
											var t_vni=-1;
											var t_42=t_bits2.length;
											if(t_42==1){
												t_vi=(parseInt((t_bits2[0]),10)-1)*3;
												t_surf.p_AddVertex(t_v.p_Get2(t_vi),t_v.p_Get2(t_vi+1),t_v.p_Get2(t_vi+2),1.0,0.0,0.0,-1,0.0,0.0);
												t_vtCnt+=1;
											}else{
												if(t_42==2){
													t_vi=(parseInt((t_bits2[0]),10)-1)*3;
													t_vti=(parseInt((t_bits2[1]),10)-1)*2;
													t_surf.p_AddVertex(t_v.p_Get2(t_vi),t_v.p_Get2(t_vi+1),t_v.p_Get2(t_vi+2),1.0,0.0,0.0,-1,t_vt.p_Get2(t_vti),t_vt.p_Get2(t_vti+1));
													t_vtCnt+=1;
												}else{
													if(t_42==3){
														t_vi=(parseInt((t_bits2[0]),10)-1)*3;
														if(t_bits[1].length>0){
															t_vti=(parseInt((t_bits2[1]),10)-1)*2;
															t_vni=(parseInt((t_bits2[2]),10)-1)*3;
															t_surf.p_AddVertex(t_v.p_Get2(t_vi),t_v.p_Get2(t_vi+1),t_v.p_Get2(t_vi+2),t_vn.p_Get2(t_vni),t_vn.p_Get2(t_vni+1),t_vn.p_Get2(t_vni+2),-1,t_vt.p_Get2(t_vti),t_vt.p_Get2(t_vti+1));
															t_vtCnt+=1;
														}else{
															t_vni=(parseInt((t_bits2[2]),10)-1)*3;
															t_surf.p_AddVertex(t_v.p_Get2(t_vi),t_v.p_Get2(t_vi+1),t_v.p_Get2(t_vi+2),t_vn.p_Get2(t_vni),t_vn.p_Get2(t_vni+1),t_vn.p_Get2(t_vni+2),-1,0.0,0.0);
															t_vtCnt+=1;
														}
													}
												}
											}
										}
										var t_v0=t_vtCnt-3;
										var t_v1=t_vtCnt-2;
										var t_v2=t_vtCnt-1;
										t_surf.p_AddTriangle(t_v0,t_v1,t_v2);
									}else{
										if(t_bits.length==5){
											for(var t_i2=1;t_i2<=4;t_i2=t_i2+1){
												var t_bits22=t_bits[t_i2].split("/");
												var t_vi2=-1;
												var t_vti2=-1;
												var t_vni2=-1;
												var t_5=t_bits22.length;
												if(t_5==1){
													t_vi2=(parseInt((t_bits22[0]),10)-1)*3;
													t_surf.p_AddVertex(t_v.p_Get2(t_vi2),t_v.p_Get2(t_vi2+1),t_v.p_Get2(t_vi2+2),1.0,0.0,0.0,-1,0.0,0.0);
													t_vtCnt+=1;
												}else{
													if(t_5==2){
														t_vi2=(parseInt((t_bits22[0]),10)-1)*3;
														t_vti2=(parseInt((t_bits22[1]),10)-1)*2;
														t_surf.p_AddVertex(t_v.p_Get2(t_vi2),t_v.p_Get2(t_vi2+1),t_v.p_Get2(t_vi2+2),1.0,0.0,0.0,-1,t_vt.p_Get2(t_vti2),t_vt.p_Get2(t_vti2+1));
														t_vtCnt+=1;
													}else{
														if(t_5==3){
															t_vi2=(parseInt((t_bits22[0]),10)-1)*3;
															if(t_bits[1].length>0){
																t_vti2=(parseInt((t_bits22[1]),10)-1)*2;
																t_vni2=(parseInt((t_bits22[2]),10)-1)*3;
																t_surf.p_AddVertex(t_v.p_Get2(t_vi2),t_v.p_Get2(t_vi2+1),t_v.p_Get2(t_vi2+2),t_vn.p_Get2(t_vni2),t_vn.p_Get2(t_vni2+1),t_vn.p_Get2(t_vni2+2),-1,t_vt.p_Get2(t_vti2),t_vt.p_Get2(t_vti2+1));
																t_vtCnt+=1;
															}else{
																t_vni2=(parseInt((t_bits22[2]),10)-1)*3;
																t_surf.p_AddVertex(t_v.p_Get2(t_vi2),t_v.p_Get2(t_vi2+1),t_v.p_Get2(t_vi2+2),t_vn.p_Get2(t_vni2),t_vn.p_Get2(t_vni2+1),t_vn.p_Get2(t_vni2+2),-1,0.0,0.0);
																t_vtCnt+=1;
															}
														}
													}
												}
											}
											var t_v02=t_vtCnt-4;
											var t_v12=t_vtCnt-3;
											var t_v22=t_vtCnt-2;
											var t_v3=t_vtCnt-1;
											t_surf.p_AddTriangle(t_v02,t_v12,t_v22);
											t_surf.p_AddTriangle(t_v02,t_v22,t_v3);
										}else{
											error("OBJ error - Polygon face element count ("+String(t_bits.length-1)+")");
										}
									}
								}else{
									if(t_22=="s"){
									}else{
										if(t_22=="o"){
										}else{
											if(t_22=="g"){
											}else{
												error("obj error 6("+t_line+")");
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	t_mesh.p_AddSurface(t_surf,t_matuse);
	t_mesh.p_Rebuild();
	return t_mesh;
}
c_Mesh.m__LoadData=function(t_data,t_filename,t_texFilter){
	var t_stream=c_DataStream.m_new.call(new c_DataStream,t_data,0);
	var t_meshPath=bb_filepath_ExtractDir(t_filename);
	if(t_meshPath!=""){
		t_meshPath=t_meshPath+"/";
	}
	var t_id=t_stream.p_ReadString(4,"utf8");
	if(t_id!="ME01"){
		return null;
	}
	var t_mesh=c_Mesh.m_new.call(new c_Mesh);
	t_mesh.p_Filename(t_filename);
	var t_numSurfaces=t_stream.p_ReadShort()&65535;
	for(var t_s=0;t_s<t_numSurfaces;t_s=t_s+1){
		var t_mat=c_Material.m_new.call(new c_Material,null,null);
		var t_flags=0;
		t_mat.p_Color(t_stream.p_ReadInt());
		var t_specular=t_stream.p_ReadInt();
		t_stream.p_ReadInt();
		t_stream.p_ReadInt();
		t_mat.p_BlendMode(t_stream.p_ReadByte()&255);
		t_flags=t_stream.p_ReadByte()&255;
		if((t_flags&1)!=0){
			t_mat.p_Culling(false);
		}else{
			t_mat.p_Culling(true);
		}
		if((t_flags&2)!=0){
			t_mat.p_DepthWrite(false);
		}else{
			t_mat.p_DepthWrite(true);
		}
		if((t_flags&4)!=0){
			t_mat.p_Lighting(false);
		}else{
			t_mat.p_Lighting(true);
		}
		if((t_flags&8)!=0){
			t_mat.p_CastShadows(false);
		}else{
			t_mat.p_CastShadows(true);
		}
		if((t_flags&16)!=0){
			t_mat.p_ReceiveShadows(false);
		}else{
			t_mat.p_ReceiveShadows(true);
		}
		if((t_flags&32)!=0){
			t_mat.p_Fog2(false);
		}else{
			t_mat.p_Fog2(true);
		}
		t_mat.p_Shininess((c_Color2.m_A(t_specular))/255.0);
		t_mat.p_SpecularPower(t_stream.p_ReadFloat());
		t_mat.p_CubeOpacity(t_stream.p_ReadFloat());
		t_mat.p_RefractionCoef(t_stream.p_ReadFloat());
		var t_usedTexs=0;
		t_usedTexs=t_stream.p_ReadByte()&255;
		if((t_usedTexs&1)!=0){
			var t_strLen=t_stream.p_ReadInt();
			var t_str=t_stream.p_ReadString(t_strLen,"utf8");
			if(t_str!=""){
				t_str=t_meshPath+t_str;
			}
			t_mat.p_ColorTexture(c_Texture.m_Load2(t_str,t_texFilter,true));
		}
		if((t_usedTexs&2)!=0){
			var t_strLen2=t_stream.p_ReadInt();
			var t_str2=t_stream.p_ReadString(t_strLen2,"utf8");
			if(t_str2!=""){
				t_str2=t_meshPath+t_str2;
			}
			t_mat.p_NormalTexture(c_Texture.m_Load2(t_str2,t_texFilter,true));
		}
		if((t_usedTexs&4)!=0){
			var t_strLen3=t_stream.p_ReadInt();
			var t_str3=t_stream.p_ReadString(t_strLen3,"utf8");
			if(t_str3!=""){
				t_str3=t_meshPath+t_str3;
			}
			t_mat.p_ShininessTexture(c_Texture.m_Load2(t_str3,t_texFilter,true));
		}
		if((t_usedTexs&32)!=0){
			var t_strLen4=t_stream.p_ReadInt();
			var t_str4=t_stream.p_ReadString(t_strLen4,"utf8");
			if(t_str4!=""){
				t_str4=t_meshPath+t_str4;
			}
			t_mat.p_LightTexture(c_Texture.m_Load2(t_str4,t_texFilter,true));
		}
		if((t_usedTexs&64)!=0){
			var t_strLen5=t_stream.p_ReadInt();
			var t_cubeTexs=t_stream.p_ReadString(t_strLen5,"utf8").split(",");
			for(var t_t=0;t_t<t_cubeTexs.length;t_t=t_t+1){
				if(t_cubeTexs[t_t]!=""){
					t_cubeTexs[t_t]=t_meshPath+t_cubeTexs[t_t];
				}
			}
			t_mat.p_CubeTexture(c_Texture.m_Load(t_cubeTexs[0],t_cubeTexs[1],t_cubeTexs[2],t_cubeTexs[3],t_cubeTexs[4],t_cubeTexs[5],t_texFilter,true));
		}
		var t_surf=c_Surface.m_new.call(new c_Surface,2);
		var t_numIndices=t_stream.p_ReadInt();
		var t_numVertices=t_stream.p_ReadShort()&65535;
		var t_vertexFlags=t_stream.p_ReadByte()&255;
		for(var t_i=0;t_i<t_numIndices;t_i=t_i+3){
			var t_v0=t_stream.p_ReadShort()&65535;
			var t_v1=t_stream.p_ReadShort()&65535;
			var t_v2=t_stream.p_ReadShort()&65535;
			t_surf.p_AddTriangle(t_v0,t_v1,t_v2);
		}
		for(var t_v=0;t_v<t_numVertices;t_v=t_v+1){
			var t_x=t_stream.p_ReadFloat();
			var t_y=t_stream.p_ReadFloat();
			var t_z=t_stream.p_ReadFloat();
			var t_nx=0.0;
			var t_ny=0.0;
			var t_nz=0.0;
			if((t_vertexFlags&1)==1){
				t_nx=t_stream.p_ReadFloat();
				t_ny=t_stream.p_ReadFloat();
				t_nz=t_stream.p_ReadFloat();
			}
			var t_tx=0.0;
			var t_ty=0.0;
			var t_tz=0.0;
			if((t_vertexFlags&2)==2){
				t_tx=t_stream.p_ReadFloat();
				t_ty=t_stream.p_ReadFloat();
				t_tz=t_stream.p_ReadFloat();
			}
			var t_color=-1;
			if((t_vertexFlags&4)==4){
				t_color=t_stream.p_ReadInt();
			}
			var t_u0=0.0;
			var t_v02=0.0;
			if((t_vertexFlags&8)==8){
				t_u0=t_stream.p_ReadFloat();
				t_v02=t_stream.p_ReadFloat();
			}
			var t_u1=t_u0;
			var t_v12=t_v02;
			if((t_vertexFlags&16)==16){
				t_u1=t_stream.p_ReadFloat();
				t_v12=t_stream.p_ReadFloat();
			}
			var t_b0=-1;
			var t_b1=-1;
			var t_b2=-1;
			var t_b3=-1;
			var t_w0=0.0;
			var t_w1=0.0;
			var t_w2=0.0;
			var t_w3=0.0;
			if((t_vertexFlags&32)==32){
				t_b0=t_stream.p_ReadShort()&65535;
				t_b1=t_stream.p_ReadShort()&65535;
				t_b2=t_stream.p_ReadShort()&65535;
				t_b3=t_stream.p_ReadShort()&65535;
				t_w0=t_stream.p_ReadFloat();
				t_w1=t_stream.p_ReadFloat();
				t_w2=t_stream.p_ReadFloat();
				t_w3=t_stream.p_ReadFloat();
			}
			t_surf.p_AddVertex(t_x,t_y,t_z,t_nx,t_ny,t_nz,t_color,t_u0,t_v02);
			t_surf.p_VertexTangent(t_v,t_tx,t_ty,t_tz);
			t_surf.p_VertexTexCoords(t_v,t_u1,t_v12,1);
			t_surf.p_VertexBone(t_v,0,t_b0,t_w0);
			t_surf.p_VertexBone(t_v,1,t_b1,t_w1);
			t_surf.p_VertexBone(t_v,2,t_b2,t_w2);
			t_surf.p_VertexBone(t_v,3,t_b3,t_w3);
		}
		t_mesh.p_AddSurface(t_surf,t_mat);
	}
	t_stream.p_Close();
	t_mesh.p_Rebuild();
	return t_mesh;
}
c_Mesh.m_Load=function(t_filename,t_texFilter,t_cache){
	var t_mesh=null;
	if(t_cache){
		t_mesh=c_Cache.m__LoadMesh(t_filename,String(t_texFilter),3);
	}else{
		var t_fixedFilename=t_filename;
		if(t_filename.length>2 && String.fromCharCode(t_filename.charCodeAt(0))!="/" && String.fromCharCode(t_filename.charCodeAt(1))!=":"){
			t_fixedFilename="cerberus://data/"+t_filename;
		}
		var t_fileExt=bb_filepath_ExtractExt(t_fixedFilename).toLowerCase();
		var t_1=t_fileExt;
		if(t_1=="obj"){
			t_mesh=c_Mesh.m__LoadData_OBJ(t_filename,t_texFilter);
		}else{
			if(t_1=="b3d"){
				var t_loader=c_LoaderB3D.m_new.call(new c_LoaderB3D);
				t_mesh=t_loader.p_LoadData(t_fixedFilename,t_filename);
			}else{
				t_mesh=c_Mesh.m__LoadData(c_DataBuffer.m_Load(t_fixedFilename),t_filename,t_texFilter);
			}
		}
	}
	return t_mesh;
}
c_Mesh.prototype.p_Width=function(){
	return this.m_mBoxMax[0]-this.m_mBoxMin[0];
}
c_Mesh.prototype.p_Height=function(){
	return this.m_mBoxMax[1]-this.m_mBoxMin[1];
}
c_Mesh.prototype.p_Depth=function(){
	return this.m_mBoxMax[2]-this.m_mBoxMin[2];
}
c_Mesh.prototype.p_Scale=function(t_x,t_y,t_z){
	var t_=this.m_mSurfaces;
	var t_2=0;
	while(t_2<t_.length){
		var t_surf=t_[t_2];
		t_2=t_2+1;
		t_surf.p_Scale2(t_x,t_y,t_z,true);
	}
	this.p_Rebuild();
}
c_Mesh.prototype.p_BoxMinX=function(){
	return this.m_mBoxMin[0];
}
c_Mesh.prototype.p_BoxMinY=function(){
	return this.m_mBoxMin[1];
}
c_Mesh.prototype.p_BoxMinZ=function(){
	return this.m_mBoxMin[2];
}
c_Mesh.prototype.p_BoxMaxX=function(){
	return this.m_mBoxMax[0];
}
c_Mesh.prototype.p_BoxMaxY=function(){
	return this.m_mBoxMax[1];
}
c_Mesh.prototype.p_BoxMaxZ=function(){
	return this.m_mBoxMax[2];
}
c_Mesh.prototype.p_rtGetTriangleData=function(t_meshSurface,t_triangleIndex){
	var t_vertexIndex0=t_meshSurface.p_TriangleV0(t_triangleIndex);
	var t_vertexIndex1=t_meshSurface.p_TriangleV1(t_triangleIndex);
	var t_vertexIndex2=t_meshSurface.p_TriangleV2(t_triangleIndex);
	this.m_rtVertexPosition0[0]=t_meshSurface.p_VertexX(t_vertexIndex0);
	this.m_rtVertexPosition0[1]=t_meshSurface.p_VertexY(t_vertexIndex0);
	this.m_rtVertexPosition0[2]=t_meshSurface.p_VertexZ(t_vertexIndex0);
	this.m_rtVertexPosition1[0]=t_meshSurface.p_VertexX(t_vertexIndex1);
	this.m_rtVertexPosition1[1]=t_meshSurface.p_VertexY(t_vertexIndex1);
	this.m_rtVertexPosition1[2]=t_meshSurface.p_VertexZ(t_vertexIndex1);
	this.m_rtVertexPosition2[0]=t_meshSurface.p_VertexX(t_vertexIndex2);
	this.m_rtVertexPosition2[1]=t_meshSurface.p_VertexY(t_vertexIndex2);
	this.m_rtVertexPosition2[2]=t_meshSurface.p_VertexZ(t_vertexIndex2);
	bb_math3d_Vec3Sub2(this.m_rtTriangleEdge1,this.m_rtVertexPosition1,this.m_rtVertexPosition0);
	bb_math3d_Vec3Sub2(this.m_rtTriangleEdge2,this.m_rtVertexPosition2,this.m_rtVertexPosition0);
	bb_math3d_Vec3Cross2(this.m_rtTriangleCross,this.m_rtTriangleEdge1,this.m_rtTriangleEdge2);
}
c_Mesh.prototype.p_RayTrace=function(t_traceInfo,t_rayOrigin,t_rayDirection){
	var t_nearestSurface=null;
	var t_nearestTriangle=-1;
	var t_minDistance=10000000000.0;
	for(var t_surfaceIndex=0;t_surfaceIndex<this.p_NumSurfaces();t_surfaceIndex=t_surfaceIndex+1){
		var t_meshSurface=this.p_Surface(t_surfaceIndex);
		for(var t_triangleIndex=0;t_triangleIndex<t_meshSurface.p_NumTriangles();t_triangleIndex=t_triangleIndex+1){
			this.p_rtGetTriangleData(t_meshSurface,t_triangleIndex);
			if(bb_math3d_Vec3Dot2(t_rayDirection,this.m_rtTriangleCross)>=0.0){
				continue;
			}
			if(!bb_math3d_RayTriangleIntersection(this.m_rtIntersectionInfo,t_rayOrigin,t_rayDirection,this.m_rtVertexPosition0,this.m_rtVertexPosition1,this.m_rtVertexPosition2)){
				continue;
			}
			if(this.m_rtIntersectionInfo[0]>=t_minDistance){
				continue;
			}
			t_minDistance=this.m_rtIntersectionInfo[0];
			t_nearestTriangle=t_triangleIndex;
			t_nearestSurface=t_meshSurface;
		}
	}
	if(t_nearestSurface==null){
		return false;
	}
	t_traceInfo.m_mSurface=t_nearestSurface;
	t_traceInfo.m_mTriangle=t_nearestTriangle;
	t_traceInfo.m_mDistance=t_minDistance;
	t_traceInfo.m_mPoint[0]=t_rayOrigin[0]+t_rayDirection[0]*t_minDistance;
	t_traceInfo.m_mPoint[1]=t_rayOrigin[1]+t_rayDirection[1]*t_minDistance;
	t_traceInfo.m_mPoint[2]=t_rayOrigin[2]+t_rayDirection[2]*t_minDistance;
	this.p_rtGetTriangleData(t_nearestSurface,t_nearestTriangle);
	bb_math3d_Vec3Normalize(t_traceInfo.m_mNormal,this.m_rtTriangleCross);
	return true;
}
c_Mesh.prototype.p__AnimateVertices=function(t_frame,t_firstFrame,t_lastFrame){
	if(t_lastFrame==0){
		t_lastFrame=this.p_NumFrames();
	}
	var t_=this.m_mSurfaces;
	var t_2=0;
	while(t_2<t_.length){
		var t_surf=t_[t_2];
		t_2=t_2+1;
		t_surf.p__AnimateVertices(t_frame,t_firstFrame,t_lastFrame);
	}
}
function c_Map4(){
	Object.call(this);
	this.m_root=null;
}
c_Map4.m_new=function(){
	return this;
}
c_Map4.prototype.p_Compare2=function(t_lhs,t_rhs){
}
c_Map4.prototype.p_FindNode2=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map4.prototype.p_Contains2=function(t_key){
	return this.p_FindNode2(t_key)!=null;
}
c_Map4.prototype.p_Get=function(t_key){
	var t_node=this.p_FindNode2(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return null;
}
c_Map4.prototype.p_RotateLeft4=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map4.prototype.p_RotateRight4=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map4.prototype.p_InsertFixup4=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft4(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight4(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight4(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft4(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map4.prototype.p_Set3=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				t_node.m_value=t_value;
				return false;
			}
		}
	}
	t_node=c_Node8.m_new.call(new c_Node8,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup4(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
function c_StringMap2(){
	c_Map4.call(this);
}
c_StringMap2.prototype=extend_class(c_Map4);
c_StringMap2.m_new=function(){
	c_Map4.m_new.call(this);
	return this;
}
c_StringMap2.prototype.p_Compare2=function(t_lhs,t_rhs){
	return string_compare(t_lhs,t_rhs);
}
function c_Sound(){
	Object.call(this);
	this.m_sample=null;
}
c_Sound.m_new=function(t_sample){
	this.m_sample=t_sample;
	return this;
}
c_Sound.m_new2=function(){
	return this;
}
function c_Map5(){
	Object.call(this);
}
c_Map5.m_new=function(){
	return this;
}
function c_StringMap3(){
	c_Map5.call(this);
}
c_StringMap3.prototype=extend_class(c_Map5);
c_StringMap3.m_new=function(){
	c_Map5.m_new.call(this);
	return this;
}
function c_Texture(){
	Object.call(this);
	this.m_mHandle=0;
	this.m_mWidth=0;
	this.m_mHeight=0;
	this.m_mIsCubic=false;
	this.m_mFilename="";
}
c_Texture.prototype.p_Discard=function(){
	if(this.m_mHandle!=0){
		c_Renderer.m_FreeTexture(this.m_mHandle);
	}
	this.m_mHandle=0;
}
c_Texture.m_new=function(t_width,t_height){
	this.m_mHandle=c_Renderer.m_CreateTexture(t_width,t_height);
	this.m_mWidth=t_width;
	this.m_mHeight=t_height;
	this.m_mIsCubic=false;
	return this;
}
c_Texture.m_new2=function(t_buffer,t_width,t_height,t_filter){
	this.m_mHandle=c_Renderer.m_CreateTexture2(t_buffer,t_width,t_height,t_filter);
	this.m_mWidth=t_width;
	this.m_mHeight=t_height;
	this.m_mIsCubic=false;
	return this;
}
c_Texture.m_new3=function(){
	return this;
}
c_Texture.prototype.p_Handle=function(){
	return this.m_mHandle;
}
c_Texture.m_mSizeArr=[];
c_Texture.m__Load=function(t_filename,t_filter){
	t_filename=string_replace(t_filename,"\\","/");
	var t_handle=c_Renderer.m_LoadTexture(t_filename,c_Texture.m_mSizeArr,t_filter);
	if(c_Texture.m_mSizeArr[0]>0){
		var t_tex=c_Texture.m_new3.call(new c_Texture);
		t_tex.m_mFilename=t_filename;
		t_tex.m_mHandle=t_handle;
		t_tex.m_mWidth=c_Texture.m_mSizeArr[0];
		t_tex.m_mHeight=c_Texture.m_mSizeArr[1];
		t_tex.m_mIsCubic=false;
		return t_tex;
	}else{
		return null;
	}
}
c_Texture.m__Load2=function(t_left,t_right,t_front,t_back,t_top,t_bottom,t_filter){
	t_left=string_replace(t_left,"\\","/");
	t_right=string_replace(t_right,"\\","/");
	t_front=string_replace(t_front,"\\","/");
	t_back=string_replace(t_back,"\\","/");
	t_top=string_replace(t_top,"\\","/");
	t_bottom=string_replace(t_bottom,"\\","/");
	var t_handle=c_Renderer.m_LoadCubicTexture(t_left,t_right,t_front,t_back,t_top,t_bottom,c_Texture.m_mSizeArr,t_filter);
	if(c_Texture.m_mSizeArr[0]>0){
		var t_tex=c_Texture.m_new3.call(new c_Texture);
		t_tex.m_mFilename=t_left+","+t_right+","+t_front+","+t_back+","+t_top+","+t_bottom;
		t_tex.m_mHandle=t_handle;
		t_tex.m_mWidth=c_Texture.m_mSizeArr[0];
		t_tex.m_mHeight=c_Texture.m_mSizeArr[1];
		t_tex.m_mIsCubic=true;
		return t_tex;
	}else{
		return null;
	}
}
c_Texture.m_Load=function(t_left,t_right,t_front,t_back,t_top,t_bottom,t_filter,t_cache){
	if(t_cache){
		return c_Cache.m__LoadTexture(t_left,t_right,t_front,t_back,t_top,t_bottom,t_filter);
	}else{
		return c_Texture.m__Load2(t_left,t_right,t_front,t_back,t_top,t_bottom,t_filter);
	}
}
c_Texture.m_Load2=function(t_filename,t_filter,t_cache){
	if(t_cache){
		return c_Cache.m__LoadTexture2(t_filename,t_filter);
	}else{
		return c_Texture.m__Load(t_filename,t_filter);
	}
}
c_Texture.prototype.p_Width=function(){
	return this.m_mWidth;
}
c_Texture.prototype.p_Height=function(){
	return this.m_mHeight;
}
c_Texture.prototype.p_Filename2=function(){
	return this.m_mFilename;
}
c_Texture.prototype.p_Filename=function(t_filename){
	this.m_mFilename=t_filename;
}
c_Texture.prototype.p_Draw2=function(t_x,t_y,t_width,t_height,t_rectx,t_recty,t_rectwidth,t_rectheight){
	if(t_rectwidth==0.0){
		t_rectwidth=(this.p_Width());
	}
	if(t_rectheight==0.0){
		t_rectheight=(this.p_Height());
	}
	if(t_width==0.0){
		t_width=t_rectwidth;
	}
	if(t_height==0.0){
		t_height=t_rectheight;
	}
	var t_u0=t_rectx/(this.p_Width())*bb_math_Sgn2(t_width);
	var t_v0=t_recty/(this.p_Height())*bb_math_Sgn2(t_height);
	var t_u1=(t_rectx+t_rectwidth)/(this.p_Width())*bb_math_Sgn2(t_width);
	var t_v1=(t_recty+t_rectheight)/(this.p_Height())*bb_math_Sgn2(t_height);
	if(!this.m_mIsCubic){
		c_Renderer.m_SetTextures(this.m_mHandle,0,0,0,0);
	}else{
		c_Renderer.m_SetTextures(0,0,0,0,this.m_mHandle);
	}
	c_Renderer.m_DrawRectEx(t_x,t_y,bb_math_Abs2(t_width),bb_math_Abs2(t_height),t_u0,t_v0,t_u1,t_v1);
	c_Renderer.m_SetTextures(0,0,0,0,0);
}
function c_Map6(){
	Object.call(this);
	this.m_root=null;
}
c_Map6.m_new=function(){
	return this;
}
c_Map6.prototype.p_Compare2=function(t_lhs,t_rhs){
}
c_Map6.prototype.p_FindNode2=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map6.prototype.p_Contains2=function(t_key){
	return this.p_FindNode2(t_key)!=null;
}
c_Map6.prototype.p_Get=function(t_key){
	var t_node=this.p_FindNode2(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return null;
}
c_Map6.prototype.p_RotateLeft5=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map6.prototype.p_RotateRight5=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map6.prototype.p_InsertFixup5=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft5(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight5(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight5(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft5(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map6.prototype.p_Set4=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				t_node.m_value=t_value;
				return false;
			}
		}
	}
	t_node=c_Node4.m_new.call(new c_Node4,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup5(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
function c_StringMap4(){
	c_Map6.call(this);
}
c_StringMap4.prototype=extend_class(c_Map6);
c_StringMap4.m_new=function(){
	c_Map6.m_new.call(this);
	return this;
}
c_StringMap4.prototype.p_Compare2=function(t_lhs,t_rhs){
	return string_compare(t_lhs,t_rhs);
}
function c_Surface(){
	Object.call(this);
	this.m_mMode=0;
	this.m_mIndices=null;
	this.m_mVertices=null;
	this.m_mNumIndices=0;
	this.m_mNumVertices=0;
	this.m_mVertexBuffer=0;
	this.m_mIndexBuffer=0;
	this.m_mStatus=0;
	this.m_mVertexFrames=new_object_array(0);
}
c_Surface.m_new=function(t_mode){
	this.m_mMode=t_mode;
	this.m_mIndices=c_DataBuffer.m_new.call(new c_DataBuffer,256,true);
	this.m_mVertices=c_DataBuffer.m_new.call(new c_DataBuffer,12800,true);
	this.m_mNumIndices=0;
	this.m_mNumVertices=0;
	this.m_mVertexBuffer=c_Renderer.m_CreateVertexBuffer(0);
	this.m_mIndexBuffer=c_Renderer.m_CreateIndexBuffer(0);
	this.m_mStatus=0;
	return this;
}
c_Surface.prototype.p_Rebuild=function(){
	if((this.m_mStatus&8)!=0){
		c_Renderer.m_ResizeIndexBuffer(this.m_mIndexBuffer,this.m_mNumIndices*2);
	}
	if((this.m_mStatus&4)!=0){
		c_Renderer.m_SetIndexBufferData(this.m_mIndexBuffer,0,this.m_mNumIndices*2,this.m_mIndices);
	}
	if((this.m_mStatus&2)!=0){
		c_Renderer.m_ResizeVertexBuffer(this.m_mVertexBuffer,this.m_mNumVertices*100);
	}
	if((this.m_mStatus&1)!=0){
		c_Renderer.m_SetVertexBufferData(this.m_mVertexBuffer,0,this.m_mNumVertices*100,this.m_mVertices);
	}
	this.m_mStatus=0;
}
c_Surface.prototype.p_Set5=function(t_other){
	if(this==t_other){
		return;
	}
	this.m_mMode=t_other.m_mMode;
	this.m_mStatus=5;
	if(this.m_mNumIndices!=t_other.m_mNumIndices){
		this.m_mStatus|=8;
	}
	if(this.m_mNumVertices!=t_other.m_mNumVertices){
		this.m_mStatus|=2;
	}
	if(this.m_mIndices.Length()!=t_other.m_mIndices.Length()){
		this.m_mIndices.Discard();
		this.m_mIndices=c_DataBuffer.m_new.call(new c_DataBuffer,t_other.m_mIndices.Length(),true);
	}
	t_other.m_mIndices.p_CopyBytes(0,this.m_mIndices,0,this.m_mIndices.Length());
	if(this.m_mVertices.Length()!=t_other.m_mVertices.Length()){
		this.m_mVertices.Discard();
		this.m_mVertices=c_DataBuffer.m_new.call(new c_DataBuffer,t_other.m_mVertices.Length(),true);
	}
	t_other.m_mVertices.p_CopyBytes(0,this.m_mVertices,0,this.m_mVertices.Length());
	this.m_mNumIndices=t_other.m_mNumIndices;
	this.m_mNumVertices=t_other.m_mNumVertices;
	this.m_mVertexFrames=new_object_array(t_other.m_mVertexFrames.length);
	for(var t_i=0;t_i<t_other.m_mVertexFrames.length;t_i=t_i+1){
		this.m_mVertexFrames[t_i]=c_VertexFrame.m_new.call(new c_VertexFrame,t_other.m_mVertexFrames[t_i].m_mFrame,t_other.m_mVertexFrames[t_i].m_mPositions,t_other.m_mVertexFrames[t_i].m_mNormals);
	}
	this.p_Rebuild();
}
c_Surface.m_new2=function(t_other){
	this.m_mIndices=c_DataBuffer.m_new.call(new c_DataBuffer,256,true);
	this.m_mVertices=c_DataBuffer.m_new.call(new c_DataBuffer,12800,true);
	this.m_mNumIndices=0;
	this.m_mNumVertices=0;
	this.m_mVertexBuffer=c_Renderer.m_CreateVertexBuffer(0);
	this.m_mIndexBuffer=c_Renderer.m_CreateIndexBuffer(0);
	this.p_Set5(t_other);
	return this;
}
c_Surface.prototype.p_NumVertices=function(){
	return this.m_mNumVertices;
}
c_Surface.prototype.p_AddVertex=function(t_x,t_y,t_z,t_nx,t_ny,t_nz,t_color,t_u0,t_v0){
	if(this.m_mVertices.Length()<(this.p_NumVertices()+1)*100){
		var t_buf=c_DataBuffer.m_new.call(new c_DataBuffer,this.m_mVertices.Length()+12800,false);
		this.m_mVertices.p_CopyBytes(0,t_buf,0,this.m_mVertices.Length());
		this.m_mVertices.Discard();
		this.m_mVertices=t_buf;
	}
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100,t_x);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+4,t_y);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+8,t_z);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+12,t_nx);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+16,t_ny);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+20,t_nz);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+36,(c_Color2.m_R(t_color))/255.0);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+40,(c_Color2.m_G(t_color))/255.0);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+44,(c_Color2.m_B(t_color))/255.0);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+48,(c_Color2.m_A(t_color))/255.0);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+52,t_u0);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+56,t_v0);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+60,t_u0);
	this.m_mVertices.PokeFloat(this.m_mNumVertices*100+64,t_v0);
	this.m_mNumVertices+=1;
	this.m_mStatus|=3;
	return this.p_NumVertices()-1;
}
c_Surface.prototype.p_VertexTangent=function(t_index,t_tx,t_ty,t_tz){
	this.m_mVertices.PokeFloat(t_index*100+24,t_tx);
	this.m_mVertices.PokeFloat(t_index*100+24+4,t_ty);
	this.m_mVertices.PokeFloat(t_index*100+24+8,t_tz);
	this.m_mStatus|=1;
}
c_Surface.prototype.p_NumIndices=function(){
	return this.m_mNumIndices;
}
c_Surface.prototype.p_AddIndex=function(t_i){
	if(this.m_mIndices.Length()<(this.m_mNumIndices+1)*2){
		var t_buf=c_DataBuffer.m_new.call(new c_DataBuffer,this.m_mIndices.Length()+256,false);
		this.m_mIndices.p_CopyBytes(0,t_buf,0,this.m_mIndices.Length());
		this.m_mIndices.Discard();
		this.m_mIndices=t_buf;
	}
	this.m_mIndices.PokeShort(this.m_mNumIndices*2,t_i);
	this.m_mNumIndices+=1;
	this.m_mStatus|=12;
	return this.p_NumIndices()-1;
}
c_Surface.prototype.p_NumTriangles=function(){
	var t_1=this.m_mMode;
	if(t_1==2){
		return ((this.p_NumIndices()/3)|0);
	}else{
		if(t_1==3 || t_1==4){
			return bb_math_Max(0,this.p_NumIndices()-2);
		}else{
			return 0;
		}
	}
}
c_Surface.prototype.p_AddTriangle=function(t_v0,t_v1,t_v2){
	if(this.m_mMode==2){
		this.p_AddIndex(t_v0);
		this.p_AddIndex(t_v1);
		this.p_AddIndex(t_v2);
		return this.p_NumTriangles()-1;
	}else{
		return -1;
	}
}
c_Surface.prototype.p_VertexX=function(t_index){
	return this.m_mVertices.PeekFloat(t_index*100+0);
}
c_Surface.prototype.p_VertexY=function(t_index){
	return this.m_mVertices.PeekFloat(t_index*100+0+4);
}
c_Surface.prototype.p_VertexZ=function(t_index){
	return this.m_mVertices.PeekFloat(t_index*100+0+8);
}
c_Surface.m_mTempQuat=[];
c_Surface.m_mTempMat=[];
c_Surface.prototype.p_VertexPosition=function(t_index,t_x,t_y,t_z){
	this.m_mVertices.PokeFloat(t_index*100+0,t_x);
	this.m_mVertices.PokeFloat(t_index*100+0+4,t_y);
	this.m_mVertices.PokeFloat(t_index*100+0+8,t_z);
	this.m_mStatus|=1;
}
c_Surface.prototype.p_VertexNX=function(t_index){
	return this.m_mVertices.PeekFloat(t_index*100+12);
}
c_Surface.prototype.p_VertexNY=function(t_index){
	return this.m_mVertices.PeekFloat(t_index*100+12+4);
}
c_Surface.prototype.p_VertexNZ=function(t_index){
	return this.m_mVertices.PeekFloat(t_index*100+12+8);
}
c_Surface.prototype.p_VertexNormal=function(t_index,t_nx,t_ny,t_nz){
	this.m_mVertices.PokeFloat(t_index*100+12,t_nx);
	this.m_mVertices.PokeFloat(t_index*100+12+4,t_ny);
	this.m_mVertices.PokeFloat(t_index*100+12+8,t_nz);
	this.m_mStatus|=1;
}
c_Surface.prototype.p_Rotate2=function(t_pitch,t_yaw,t_roll,t_rebuild){
	bb_math3d_QuatSetEuler(t_pitch,t_yaw,t_roll,c_Surface.m_mTempQuat);
	var t_angle=bb_math3d_QuatDegrees(c_Surface.m_mTempQuat[0],c_Surface.m_mTempQuat[1],c_Surface.m_mTempQuat[2],c_Surface.m_mTempQuat[3]);
	bb_math3d_QuatAxis(c_Surface.m_mTempQuat[0],c_Surface.m_mTempQuat[1],c_Surface.m_mTempQuat[2],c_Surface.m_mTempQuat[3],c_Surface.m_mTempQuat);
	bb_math3d_Mat4Identity(c_Surface.m_mTempMat);
	bb_math3d_Mat4Rotate(c_Surface.m_mTempMat,t_angle,c_Surface.m_mTempQuat[0],c_Surface.m_mTempQuat[1],c_Surface.m_mTempQuat[2],c_Surface.m_mTempMat);
	for(var t_i=0;t_i<this.p_NumVertices();t_i=t_i+1){
		bb_math3d_Mat4MulVec4(c_Surface.m_mTempMat,this.p_VertexX(t_i),this.p_VertexY(t_i),this.p_VertexZ(t_i),1.0,c_Surface.m_mTempQuat);
		this.p_VertexPosition(t_i,c_Surface.m_mTempQuat[0],c_Surface.m_mTempQuat[1],c_Surface.m_mTempQuat[2]);
		bb_math3d_Mat4MulVec4(c_Surface.m_mTempMat,this.p_VertexNX(t_i),this.p_VertexNY(t_i),this.p_VertexNZ(t_i),0.0,c_Surface.m_mTempQuat);
		this.p_VertexNormal(t_i,c_Surface.m_mTempQuat[0],c_Surface.m_mTempQuat[1],c_Surface.m_mTempQuat[2]);
	}
	if(t_rebuild){
		this.p_Rebuild();
	}
}
c_Surface.prototype.p_VertexTexCoords=function(t_index,t_u,t_v,t_set){
	if(t_set==0){
		this.m_mVertices.PokeFloat(t_index*100+52,t_u);
		this.m_mVertices.PokeFloat(t_index*100+52+4,t_v);
	}else{
		this.m_mVertices.PokeFloat(t_index*100+52+8,t_u);
		this.m_mVertices.PokeFloat(t_index*100+52+12,t_v);
	}
	this.m_mStatus|=1;
}
c_Surface.prototype.p_VertexBone=function(t_vertex,t_index,t_bone,t_weight){
	this.m_mVertices.PokeFloat(t_vertex*100+68+t_index*4,(t_bone));
	this.m_mVertices.PokeFloat(t_vertex*100+84+t_index*4,t_weight);
	this.m_mStatus|=1;
}
c_Surface.prototype.p_Scale2=function(t_x,t_y,t_z,t_rebuild){
	for(var t_i=0;t_i<this.p_NumVertices();t_i=t_i+1){
		this.p_VertexPosition(t_i,this.p_VertexX(t_i)*t_x,this.p_VertexY(t_i)*t_y,this.p_VertexZ(t_i)*t_z);
	}
	if(t_rebuild){
		this.p_Rebuild();
	}
}
c_Surface.prototype.p__Render=function(){
	c_Renderer.m_DrawBuffers(this.m_mVertexBuffer,this.m_mIndexBuffer,this.m_mNumIndices,0,12,24,36,52,68,84,100,this.m_mMode);
}
c_Surface.prototype.p_TriangleV0=function(t_tri){
	if(this.m_mMode==2){
		return this.m_mIndices.PeekShort(t_tri*6);
	}else{
		return -1;
	}
}
c_Surface.prototype.p_TriangleV1=function(t_tri){
	if(this.m_mMode==2){
		return this.m_mIndices.PeekShort(t_tri*6+2);
	}else{
		return -1;
	}
}
c_Surface.prototype.p_TriangleV2=function(t_tri){
	if(this.m_mMode==2){
		return this.m_mIndices.PeekShort(t_tri*6+4);
	}else{
		return -1;
	}
}
c_Surface.prototype.p__AnimateVertices=function(t_frame,t_firstFrame,t_lastFrame){
	var t_firstIndex=0;
	var t_lastIndex=this.m_mVertexFrames.length-1;
	for(var t_i=0;t_i<this.m_mVertexFrames.length;t_i=t_i+1){
		if(this.m_mVertexFrames[t_i].p_Frame()==t_firstFrame){
			t_firstIndex=t_i;
		}
		if(this.m_mVertexFrames[t_i].p_Frame()==t_lastFrame){
			t_lastIndex=t_i;
		}
	}
	for(var t_i2=t_firstIndex;t_i2<=t_lastIndex;t_i2=t_i2+1){
		var t_prevIndex=bb_math_Max(t_firstIndex,t_i2-1);
		if(t_frame<=(this.m_mVertexFrames[t_i2].p_Frame())){
			var t_t=0.0;
			if(t_i2!=t_prevIndex){
				t_t=(t_frame-(this.m_mVertexFrames[t_prevIndex].p_Frame()))/(this.m_mVertexFrames[t_i2].p_Frame()-this.m_mVertexFrames[t_prevIndex].p_Frame());
			}
			for(var t_v=0;t_v<this.p_NumVertices();t_v=t_v+1){
				bb_math3d_Vec3Mix(this.m_mVertexFrames[t_prevIndex].p_X(t_v),this.m_mVertexFrames[t_prevIndex].p_Y(t_v),this.m_mVertexFrames[t_prevIndex].p_Z(t_v),this.m_mVertexFrames[t_i2].p_X(t_v),this.m_mVertexFrames[t_i2].p_Y(t_v),this.m_mVertexFrames[t_i2].p_Z(t_v),t_t,c_Surface.m_mTempQuat);
				this.p_VertexPosition(t_v,c_Surface.m_mTempQuat[0],c_Surface.m_mTempQuat[1],c_Surface.m_mTempQuat[2]);
				bb_math3d_Vec3Mix(this.m_mVertexFrames[t_prevIndex].p_NX(t_v),this.m_mVertexFrames[t_prevIndex].p_NY(t_v),this.m_mVertexFrames[t_prevIndex].p_NZ(t_v),this.m_mVertexFrames[t_i2].p_NX(t_v),this.m_mVertexFrames[t_i2].p_NY(t_v),this.m_mVertexFrames[t_i2].p_NZ(t_v),t_t,c_Surface.m_mTempQuat);
				this.p_VertexNormal(t_v,c_Surface.m_mTempQuat[0],c_Surface.m_mTempQuat[1],c_Surface.m_mTempQuat[2]);
			}
			this.p_Rebuild();
			break;
		}
	}
}
function c_VertexFrame(){
	Object.call(this);
	this.m_mFrame=0;
	this.m_mPositions=null;
	this.m_mNormals=null;
}
c_VertexFrame.m_new=function(t_frame,t_positions,t_normals){
	this.m_mFrame=t_frame;
	this.m_mPositions=c_DataBuffer.m_new.call(new c_DataBuffer,t_positions.Length(),false);
	this.m_mNormals=c_DataBuffer.m_new.call(new c_DataBuffer,t_normals.Length(),false);
	t_positions.p_CopyBytes(0,this.m_mPositions,0,t_positions.Length());
	t_normals.p_CopyBytes(0,this.m_mNormals,0,t_normals.Length());
	return this;
}
c_VertexFrame.m_new2=function(){
	return this;
}
c_VertexFrame.prototype.p_Frame=function(){
	return this.m_mFrame;
}
c_VertexFrame.prototype.p_X=function(t_index){
	return this.m_mPositions.PeekFloat(t_index*12);
}
c_VertexFrame.prototype.p_Y=function(t_index){
	return this.m_mPositions.PeekFloat(t_index*12+4);
}
c_VertexFrame.prototype.p_Z=function(t_index){
	return this.m_mPositions.PeekFloat(t_index*12+8);
}
c_VertexFrame.prototype.p_NX=function(t_index){
	return this.m_mNormals.PeekFloat(t_index*12);
}
c_VertexFrame.prototype.p_NY=function(t_index){
	return this.m_mNormals.PeekFloat(t_index*12+4);
}
c_VertexFrame.prototype.p_NZ=function(t_index){
	return this.m_mNormals.PeekFloat(t_index*12+8);
}
function bb_math_Max(t_x,t_y){
	if(t_x>t_y){
		return t_x;
	}
	return t_y;
}
function bb_math_Max2(t_x,t_y){
	if(t_x>t_y){
		return t_x;
	}
	return t_y;
}
function c_Material(){
	Object.call(this);
	this.m_mShader=null;
	this.m_mColor=0;
	this.m_mColorTex=null;
	this.m_mShininess=.0;
	this.m_mCubeOpacity=.0;
	this.m_mRefractCoef=.0;
	this.m_mBlendMode=0;
	this.m_mCulling=false;
	this.m_mDepthWrite=false;
	this.m_mLighting=false;
	this.m_mCastShadows=false;
	this.m_mReceiveShadows=false;
	this.m_mFog=false;
	this.m_mSpecularPower=.0;
	this.m_mTextureMatrix=new_number_array(16);
	this.m_mNormalTex=null;
	this.m_mShininessTex=null;
	this.m_mLightTex=null;
	this.m_mCubeTex=null;
}
c_Material.m_new=function(t_colorTex,t_shader){
	this.m_mShader=t_shader;
	this.m_mColor=-1;
	this.m_mColorTex=t_colorTex;
	this.m_mShininess=0.001;
	this.m_mCubeOpacity=0.5;
	this.m_mRefractCoef=-1.0;
	this.m_mBlendMode=0;
	this.m_mCulling=true;
	this.m_mDepthWrite=true;
	this.m_mLighting=true;
	this.m_mCastShadows=true;
	this.m_mReceiveShadows=true;
	this.m_mFog=true;
	this.m_mSpecularPower=64.0;
	bb_math3d_Mat4Identity(this.m_mTextureMatrix);
	return this;
}
c_Material.prototype.p_IsEqual=function(t_other){
	if(this==t_other){
		return true;
	}
	if(this.m_mShader==t_other.m_mShader && this.m_mColor==t_other.m_mColor && this.m_mColorTex==t_other.m_mColorTex && this.m_mNormalTex==t_other.m_mNormalTex && this.m_mShininessTex==t_other.m_mShininessTex && this.m_mLightTex==t_other.m_mLightTex && this.m_mCubeTex==t_other.m_mCubeTex && this.m_mShininess==t_other.m_mShininess && this.m_mSpecularPower==t_other.m_mSpecularPower && this.m_mCubeOpacity==t_other.m_mCubeOpacity && this.m_mRefractCoef==t_other.m_mRefractCoef && this.m_mBlendMode==t_other.m_mBlendMode && this.m_mLighting==t_other.m_mLighting && this.m_mCulling==t_other.m_mCulling && this.m_mDepthWrite==t_other.m_mDepthWrite && this.m_mCastShadows==t_other.m_mCastShadows && this.m_mReceiveShadows==t_other.m_mReceiveShadows && this.m_mFog==t_other.m_mFog){
		return true;
	}else{
		return false;
	}
}
c_Material.prototype.p_Set6=function(t_other){
	if(this.p_IsEqual(t_other)){
		return;
	}
	this.m_mShader=t_other.m_mShader;
	this.m_mColor=t_other.m_mColor;
	this.m_mColorTex=t_other.m_mColorTex;
	this.m_mNormalTex=t_other.m_mNormalTex;
	this.m_mShininessTex=t_other.m_mShininessTex;
	this.m_mLightTex=t_other.m_mLightTex;
	this.m_mCubeTex=t_other.m_mCubeTex;
	this.m_mShininess=t_other.m_mShininess;
	this.m_mSpecularPower=t_other.m_mSpecularPower;
	this.m_mCubeOpacity=t_other.m_mCubeOpacity;
	this.m_mRefractCoef=t_other.m_mRefractCoef;
	this.m_mBlendMode=t_other.m_mBlendMode;
	this.m_mLighting=t_other.m_mLighting;
	this.m_mCulling=t_other.m_mCulling;
	this.m_mDepthWrite=t_other.m_mDepthWrite;
	this.m_mCastShadows=t_other.m_mCastShadows;
	this.m_mReceiveShadows=t_other.m_mReceiveShadows;
	this.m_mFog=t_other.m_mFog;
	bb_math3d_Mat4Copy(t_other.m_mTextureMatrix,this.m_mTextureMatrix);
}
c_Material.m_new2=function(t_other){
	this.p_Set6(t_other);
	return this;
}
c_Material.prototype.p_Shader=function(t_shader){
	this.m_mShader=t_shader;
}
c_Material.prototype.p_Shader2=function(){
	return this.m_mShader;
}
c_Material.prototype.p_DepthWrite=function(t_enable){
	this.m_mDepthWrite=t_enable;
}
c_Material.prototype.p_DepthWrite2=function(){
	return this.m_mDepthWrite;
}
c_Material.prototype.p_ColorTexture=function(t_tex){
	this.m_mColorTex=t_tex;
}
c_Material.prototype.p_ColorTexture2=function(){
	return this.m_mColorTex;
}
c_Material.prototype.p_Culling=function(t_enable){
	this.m_mCulling=t_enable;
}
c_Material.prototype.p_Culling2=function(){
	return this.m_mCulling;
}
c_Material.prototype.p_Lighting=function(t_enable){
	this.m_mLighting=t_enable;
}
c_Material.prototype.p_Lighting2=function(){
	return this.m_mLighting;
}
c_Material.prototype.p_CastShadows=function(t_enable){
	this.m_mCastShadows=t_enable;
}
c_Material.prototype.p_CastShadows2=function(){
	return this.m_mCastShadows;
}
c_Material.prototype.p_ReceiveShadows=function(t_enable){
	this.m_mReceiveShadows=t_enable;
}
c_Material.prototype.p_ReceiveShadows2=function(){
	return this.m_mReceiveShadows;
}
c_Material.prototype.p_Fog=function(){
	return this.m_mFog;
}
c_Material.prototype.p_Fog2=function(t_enable){
	this.m_mFog=t_enable;
}
c_Material.prototype.p_BlendMode=function(t_mode){
	this.m_mBlendMode=t_mode;
}
c_Material.prototype.p_BlendMode2=function(){
	return this.m_mBlendMode;
}
c_Material.prototype.p_Shininess=function(t_shininess){
	this.m_mShininess=t_shininess;
}
c_Material.prototype.p_Shininess2=function(){
	return this.m_mShininess;
}
c_Material.prototype.p_RefractionCoef=function(t_coef){
	this.m_mRefractCoef=t_coef;
}
c_Material.prototype.p_RefractionCoef2=function(){
	return this.m_mRefractCoef;
}
c_Material.prototype.p_SpecularPower=function(t_power){
	this.m_mSpecularPower=t_power;
}
c_Material.prototype.p_SpecularPower2=function(){
	return this.m_mSpecularPower;
}
c_Material.prototype.p_CubeOpacity=function(t_opacity){
	t_opacity=bb_math_Clamp2(t_opacity,0.0,1.0);
	this.m_mCubeOpacity=t_opacity;
}
c_Material.prototype.p_CubeOpacity2=function(){
	return this.m_mCubeOpacity;
}
c_Material.prototype.p_Color=function(t_color){
	this.m_mColor=t_color;
}
c_Material.prototype.p_Color2=function(){
	return this.m_mColor;
}
c_Material.prototype.p_NormalTexture=function(t_tex){
	this.m_mNormalTex=t_tex;
}
c_Material.prototype.p_NormalTexture2=function(){
	return this.m_mNormalTex;
}
c_Material.prototype.p_ShininessTexture=function(t_tex){
	this.m_mShininessTex=t_tex;
}
c_Material.prototype.p_ShininessTexture2=function(){
	return this.m_mShininessTex;
}
c_Material.prototype.p_LightTexture=function(t_tex){
	this.m_mLightTex=t_tex;
}
c_Material.prototype.p_LightTexture2=function(){
	return this.m_mLightTex;
}
c_Material.prototype.p_CubeTexture=function(t_tex){
	this.m_mCubeTex=t_tex;
}
c_Material.prototype.p_CubeTexture2=function(){
	return this.m_mCubeTex;
}
c_Material.prototype.p__PrepareForRender=function(t_step_){
	if(t_step_==0 && (this.m_mBlendMode!=0 || !this.p_CastShadows2())){
		return false;
	}
	if(t_step_==1 && (this.m_mBlendMode!=0 || !this.m_mDepthWrite)){
		return false;
	}
	if(t_step_==2 && (this.m_mBlendMode==0 || !this.m_mDepthWrite)){
		return false;
	}
	if(t_step_==3 && this.m_mDepthWrite){
		return false;
	}
	c_Renderer.m_Color(this.m_mColor);
	c_RenderState.m_Shininess=this.m_mShininess;
	c_RenderState.m_SpecularPower=this.m_mSpecularPower;
	c_RenderState.m_CubeOpacity=this.m_mCubeOpacity;
	c_RenderState.m_RefractCoef=this.m_mRefractCoef;
	c_Renderer.m_BlendMode(this.m_mBlendMode);
	c_Renderer.m_SetCulling(this.m_mCulling);
	bb_math3d_Mat4Copy(this.m_mTextureMatrix,c_RenderState.m_TextureMatrix);
	if(!c_RenderState.m_SeparateDepthPass || t_step_!=1){
		c_Renderer.m_SetDepthWrite(this.m_mDepthWrite);
	}
	var t_colorHandle=0;
	var t_normalHandle=0;
	var t_shininessHandle=0;
	var t_lightHandle=0;
	var t_cubeHandle=0;
	if(this.m_mColorTex!=null){
		t_colorHandle=this.m_mColorTex.p_Handle();
	}
	if(this.m_mNormalTex!=null){
		t_normalHandle=this.m_mNormalTex.p_Handle();
	}
	if(this.m_mShininessTex!=null){
		t_shininessHandle=this.m_mShininessTex.p_Handle();
	}
	if(this.m_mLightTex!=null){
		t_lightHandle=this.m_mLightTex.p_Handle();
	}
	if(this.m_mCubeTex!=null){
		t_cubeHandle=this.m_mCubeTex.p_Handle();
	}
	c_Renderer.m_SetTextures(t_colorHandle,t_normalHandle,t_shininessHandle,t_lightHandle,t_cubeHandle);
	var t_prevNumLights=c_RenderState.m_NumLights;
	if(!this.p_Lighting2()){
		c_RenderState.m_NumLights=0;
	}
	var t_prevShadowsEnabled=c_RenderState.m_ShadowsEnabled;
	if(!this.p_ReceiveShadows2()){
		c_RenderState.m_ShadowsEnabled=false;
	}
	var t_prevFogEnabled=c_RenderState.m_FogEnabled;
	if(!this.p_Fog()){
		c_RenderState.m_FogEnabled=false;
	}
	if(this.m_mShader!=null){
		this.m_mShader.p__Prepare();
	}else{
		c_Shader.m__CurrentDefault2().p__Prepare();
	}
	c_RenderState.m_NumLights=t_prevNumLights;
	c_RenderState.m_ShadowsEnabled=t_prevShadowsEnabled;
	c_RenderState.m_FogEnabled=t_prevFogEnabled;
	return true;
}
c_Material.prototype.p_TextureMatrix=function(){
	return this.m_mTextureMatrix;
}
function c_Bone(){
	Object.call(this);
	this.m_mName="";
	this.m_mParentIndex=0;
	this.m_mTransformMatrix=new_number_array(16);
	this.m_mInvPoseMatrix=new_number_array(16);
	this.m_mPositionKeys=[];
	this.m_mRotationKeys=[];
	this.m_mScaleKeys=[];
	this.m_mPositions=new_array_array(3);
	this.m_mRotations=new_array_array(4);
	this.m_mScales=new_array_array(3);
	this.m_mSurfaces=[];
}
c_Bone.m_new=function(t_name,t_parentIndex){
	this.m_mName=t_name;
	this.m_mParentIndex=t_parentIndex;
	bb_math3d_Mat4Identity(this.m_mTransformMatrix);
	bb_math3d_Mat4Identity(this.m_mInvPoseMatrix);
	this.m_mPositionKeys=new_number_array(0);
	this.m_mRotationKeys=new_number_array(0);
	this.m_mScaleKeys=new_number_array(0);
	this.m_mPositions=new_array_array(0);
	this.m_mRotations=new_array_array(0);
	this.m_mScales=new_array_array(0);
	this.m_mSurfaces=new_number_array(0);
	return this;
}
c_Bone.m_new2=function(t_other){
	this.m_mName=t_other.m_mName;
	this.m_mParentIndex=t_other.m_mParentIndex;
	bb_math3d_Mat4Copy(t_other.m_mTransformMatrix,this.m_mTransformMatrix);
	bb_math3d_Mat4Copy(t_other.m_mInvPoseMatrix,this.m_mInvPoseMatrix);
	this.m_mPositionKeys=t_other.m_mPositionKeys.slice(0);
	this.m_mRotationKeys=t_other.m_mRotationKeys.slice(0);
	this.m_mScaleKeys=t_other.m_mScaleKeys.slice(0);
	this.m_mPositions=new_array_array(t_other.m_mPositions.length);
	for(var t_i=0;t_i<this.m_mPositions.length;t_i=t_i+1){
		this.m_mPositions[t_i]=[t_other.m_mPositions[t_i][0],t_other.m_mPositions[t_i][1],t_other.m_mPositions[t_i][2]];
	}
	this.m_mRotations=new_array_array(t_other.m_mRotations.length);
	for(var t_i2=0;t_i2<this.m_mRotations.length;t_i2=t_i2+1){
		this.m_mRotations[t_i2]=[t_other.m_mRotations[t_i2][0],t_other.m_mRotations[t_i2][1],t_other.m_mRotations[t_i2][2],t_other.m_mRotations[t_i2][3]];
	}
	this.m_mScales=new_array_array(t_other.m_mScales.length);
	for(var t_i3=0;t_i3<this.m_mScales.length;t_i3=t_i3+1){
		this.m_mScales[t_i3]=[t_other.m_mScales[t_i3][0],t_other.m_mScales[t_i3][1],t_other.m_mScales[t_i3][2]];
	}
	this.m_mSurfaces=new_number_array(t_other.m_mSurfaces.length);
	for(var t_i4=0;t_i4<this.m_mSurfaces.length;t_i4=t_i4+1){
		this.m_mSurfaces[t_i4]=t_other.m_mSurfaces[t_i4];
	}
	return this;
}
c_Bone.m_new3=function(){
	return this;
}
function c_AnimSequence(){
	Object.call(this);
	this.m_mName="";
	this.m_mFps=.0;
	this.m_mFirstFrame=0;
	this.m_mLastFrame=0;
}
c_AnimSequence.m_new=function(t_name,t_fps,t_firstFrame,t_lastFrame){
	this.m_mName=t_name;
	this.m_mFps=t_fps;
	this.m_mFirstFrame=t_firstFrame;
	this.m_mLastFrame=t_lastFrame;
	return this;
}
c_AnimSequence.m_new2=function(){
	return this;
}
function bb_math3d_Vec3Set(t_x,t_y,t_z,t_out){
	t_out[0]=t_x;
	t_out[1]=t_y;
	t_out[2]=t_z;
}
function c_Framebuffer(){
	Object.call(this);
	this.m_mColorTex=null;
	this.m_mDepthBuffer=0;
	this.m_mHandle=0;
}
c_Framebuffer.prototype.p_Discard=function(){
	if((this.m_mColorTex)!=null){
		this.m_mColorTex.p_Discard();
	}
	if(this.m_mDepthBuffer!=0){
		c_Renderer.m_FreeRenderbuffer(this.m_mDepthBuffer);
	}
	if(this.m_mHandle!=0){
		c_Renderer.m_FreeFramebuffer(this.m_mHandle);
	}
}
c_Framebuffer.m_new=function(t_width,t_height,t_depthBuffer){
	this.m_mColorTex=c_Texture.m_new.call(new c_Texture,t_width,t_height);
	if(t_depthBuffer){
		this.m_mDepthBuffer=c_Renderer.m_CreateRenderbuffer(t_width,t_height);
	}
	this.m_mHandle=c_Renderer.m_CreateFramebuffer(this.m_mColorTex.p_Handle(),this.m_mDepthBuffer);
	return this;
}
c_Framebuffer.m_new2=function(){
	return this;
}
c_Framebuffer.prototype.p_Use=function(){
	c_Renderer.m_SetFramebuffer(this.m_mHandle,this.m_mColorTex.p_Height());
}
c_Framebuffer.prototype.p_ColorTexture2=function(){
	return this.m_mColorTex;
}
c_Framebuffer.m_UseScreen=function(){
	c_Renderer.m_SetFramebuffer(0,bb_app_DeviceHeight());
}
function c_Graphics(){
	Object.call(this);
}
c_Graphics.m_MaxTextureSize=function(){
	return c_Renderer.m_MaxTextureSize();
}
c_Graphics.m_mFpsCounter=0;
c_Graphics.m_mFpsAccum=0;
c_Graphics.m_mFps=0;
c_Graphics.m__UpdateFPS=function(){
	c_Graphics.m_mFpsCounter+=1;
	c_Graphics.m_mFpsAccum+=c_World.m_DeltaTime();
	if(c_Graphics.m_mFpsAccum>=1.0){
		c_Graphics.m_mFps=c_Graphics.m_mFpsCounter;
		c_Graphics.m_mFpsCounter=0;
		c_Graphics.m_mFpsAccum=0.0;
	}
}
c_Graphics.m_mRenderCalls=0;
c_Graphics.m__SetRenderCalls=function(t_num){
	c_Graphics.m_mRenderCalls=t_num;
}
c_Graphics.m_Setup2D=function(t_x,t_y,t_width,t_height){
	c_Renderer.m_Setup2D(t_x,t_y,t_width,t_height);
}
c_Graphics.m_Color=function(t_color){
	c_Renderer.m_Color(t_color);
}
c_Graphics.m_Clear=function(t_col){
	c_Renderer.m_ClearColorBuffer(t_col);
}
function bb_audio_LoadSound(t_path){
	var t_sample=bb_audio_device.LoadSample(bb_data_FixDataPath(t_path));
	if((t_sample)!=null){
		return c_Sound.m_new.call(new c_Sound,t_sample);
	}
	return null;
}
function c_Node3(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node3.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node3.m_new2=function(){
	return this;
}
function c_Stream(){
	Object.call(this);
}
c_Stream.m_new=function(){
	return this;
}
c_Stream.prototype.p_Read=function(t_buffer,t_offset,t_count){
}
c_Stream.prototype.p_ReadError=function(){
	throw c_StreamReadError.m_new.call(new c_StreamReadError,this);
}
c_Stream.prototype.p_ReadAll=function(t_buffer,t_offset,t_count){
	while(t_count>0){
		var t_n=this.p_Read(t_buffer,t_offset,t_count);
		if(t_n<=0){
			this.p_ReadError();
		}
		t_offset+=t_n;
		t_count-=t_n;
	}
}
c_Stream.prototype.p_ReadAll2=function(){
	var t_bufs=c_Stack2.m_new.call(new c_Stack2);
	var t_buf=c_DataBuffer.m_new.call(new c_DataBuffer,4096,false);
	var t_off=0;
	var t_len=0;
	do{
		var t_n=this.p_Read(t_buf,t_off,4096-t_off);
		if(t_n<=0){
			break;
		}
		t_off+=t_n;
		t_len+=t_n;
		if(t_off==4096){
			t_off=0;
			t_bufs.p_Push4(t_buf);
			t_buf=c_DataBuffer.m_new.call(new c_DataBuffer,4096,false);
		}
	}while(!(false));
	var t_data=c_DataBuffer.m_new.call(new c_DataBuffer,t_len,false);
	t_off=0;
	var t_=t_bufs.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_tbuf=t_.p_NextObject();
		t_tbuf.p_CopyBytes(0,t_data,t_off,4096);
		t_tbuf.Discard();
		t_off+=4096;
	}
	t_buf.p_CopyBytes(0,t_data,t_off,t_len-t_off);
	t_buf.Discard();
	return t_data;
}
c_Stream.prototype.p_ReadString=function(t_count,t_encoding){
	var t_buf=c_DataBuffer.m_new.call(new c_DataBuffer,t_count,false);
	this.p_ReadAll(t_buf,0,t_count);
	return t_buf.p_PeekString2(0,t_encoding);
}
c_Stream.prototype.p_ReadString2=function(t_encoding){
	var t_buf=this.p_ReadAll2();
	return t_buf.p_PeekString2(0,t_encoding);
}
c_Stream.m__tmp=null;
c_Stream.prototype.p_ReadInt=function(){
	this.p_ReadAll(c_Stream.m__tmp,0,4);
	return c_Stream.m__tmp.PeekInt(0);
}
c_Stream.prototype.p_ReadShort=function(){
	this.p_ReadAll(c_Stream.m__tmp,0,2);
	return c_Stream.m__tmp.PeekShort(0);
}
c_Stream.prototype.p_ReadFloat=function(){
	this.p_ReadAll(c_Stream.m__tmp,0,4);
	return c_Stream.m__tmp.PeekFloat(0);
}
c_Stream.prototype.p_Close=function(){
}
c_Stream.prototype.p_Length=function(){
}
c_Stream.prototype.p_Position=function(){
}
c_Stream.prototype.p_ReadByte=function(){
	this.p_ReadAll(c_Stream.m__tmp,0,1);
	return c_Stream.m__tmp.PeekByte(0);
}
function c_DataStream(){
	c_Stream.call(this);
	this.m__buffer=null;
	this.m__offset=0;
	this.m__length=0;
	this.m__position=0;
}
c_DataStream.prototype=extend_class(c_Stream);
c_DataStream.m_new=function(t_buffer,t_offset){
	c_Stream.m_new.call(this);
	this.m__buffer=t_buffer;
	this.m__offset=t_offset;
	this.m__length=t_buffer.Length()-t_offset;
	return this;
}
c_DataStream.m_new2=function(t_buffer,t_offset,t_length){
	c_Stream.m_new.call(this);
	this.m__buffer=t_buffer;
	this.m__offset=t_offset;
	this.m__length=t_length;
	return this;
}
c_DataStream.m_new3=function(){
	c_Stream.m_new.call(this);
	return this;
}
c_DataStream.prototype.p_Close=function(){
	if((this.m__buffer)!=null){
		this.m__buffer=null;
		this.m__offset=0;
		this.m__length=0;
		this.m__position=0;
	}
}
c_DataStream.prototype.p_Length=function(){
	return this.m__length;
}
c_DataStream.prototype.p_Position=function(){
	return this.m__position;
}
c_DataStream.prototype.p_Read=function(t_buf,t_offset,t_count){
	if(this.m__position+t_count>this.m__length){
		t_count=this.m__length-this.m__position;
	}
	this.m__buffer.p_CopyBytes(this.m__offset+this.m__position,t_buf,t_offset,t_count);
	this.m__position+=t_count;
	return t_count;
}
function bb_filepath_ExtractDir(t_path){
	var t_i=t_path.lastIndexOf("/");
	if(t_i==-1){
		t_i=t_path.lastIndexOf("\\");
	}
	if(t_i!=-1){
		return t_path.slice(0,t_i);
	}
	return "";
}
function c_StreamError(){
	ThrowableObject.call(this);
	this.m__stream=null;
}
c_StreamError.prototype=extend_class(ThrowableObject);
c_StreamError.m_new=function(t_stream){
	this.m__stream=t_stream;
	return this;
}
c_StreamError.m_new2=function(){
	return this;
}
function c_StreamReadError(){
	c_StreamError.call(this);
}
c_StreamReadError.prototype=extend_class(c_StreamError);
c_StreamReadError.m_new=function(t_stream){
	c_StreamError.m_new.call(this,t_stream);
	return this;
}
c_StreamReadError.m_new2=function(){
	c_StreamError.m_new2.call(this);
	return this;
}
function c_Stack2(){
	Object.call(this);
	this.m_data=[];
	this.m_length=0;
}
c_Stack2.m_new=function(){
	return this;
}
c_Stack2.m_new2=function(t_data){
	this.m_data=t_data.slice(0);
	this.m_length=t_data.length;
	return this;
}
c_Stack2.prototype.p_Push4=function(t_value){
	if(this.m_length==this.m_data.length){
		this.m_data=resize_object_array(this.m_data,this.m_length*2+10);
	}
	this.m_data[this.m_length]=t_value;
	this.m_length+=1;
}
c_Stack2.prototype.p_Push5=function(t_values,t_offset,t_count){
	for(var t_i=0;t_i<t_count;t_i=t_i+1){
		this.p_Push4(t_values[t_offset+t_i]);
	}
}
c_Stack2.prototype.p_Push6=function(t_values,t_offset){
	this.p_Push5(t_values,t_offset,t_values.length-t_offset);
}
c_Stack2.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator.m_new.call(new c_Enumerator,this);
}
c_Stack2.m_NIL=null;
c_Stack2.prototype.p_Length2=function(t_newlength){
	if(t_newlength<this.m_length){
		for(var t_i=t_newlength;t_i<this.m_length;t_i=t_i+1){
			this.m_data[t_i]=c_Stack2.m_NIL;
		}
	}else{
		if(t_newlength>this.m_data.length){
			this.m_data=resize_object_array(this.m_data,bb_math_Max(this.m_length*2+10,t_newlength));
		}
	}
	this.m_length=t_newlength;
}
c_Stack2.prototype.p_Length=function(){
	return this.m_length;
}
function c_Enumerator(){
	Object.call(this);
	this.m_stack=null;
	this.m_index=0;
}
c_Enumerator.m_new=function(t_stack){
	this.m_stack=t_stack;
	return this;
}
c_Enumerator.m_new2=function(){
	return this;
}
c_Enumerator.prototype.p_HasNext=function(){
	return this.m_index<this.m_stack.p_Length();
}
c_Enumerator.prototype.p_NextObject=function(){
	this.m_index+=1;
	return this.m_stack.m_data[this.m_index-1];
}
function c_Node4(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node4.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node4.m_new2=function(){
	return this;
}
function c_Glyph2(){
	Object.call(this);
	this.m_mX=.0;
	this.m_mY=.0;
	this.m_mWidth=.0;
	this.m_mHeight=.0;
	this.m_mXOffset=.0;
	this.m_mYOffset=.0;
}
c_Glyph2.m_new=function(){
	return this;
}
function c_Entity(){
	Object.call(this);
	this.m_mChildren=null;
	this.m_mParent=null;
	this.m_mPosition=new_number_array(3);
	this.m_mRotation=new_number_array(3);
	this.m_mScale=new_number_array(3);
	this.m_mTransform=new_number_array(16);
	this.m_mActive=false;
	this.m_mVisible=false;
	this.m_mPickable=false;
	this.m_mCollisionMode=0;
	this.m_mCollided=false;
	this.m_mCollidedEntity=null;
	this.m_mSqRadius=.0;
	this.m_mRadius=.0;
}
c_Entity.prototype.p_Parent=function(){
	return this.m_mParent;
}
c_Entity.prototype.p__UpdateTransform=function(){
	bb_math3d_Mat4TransformEuler(this.m_mPosition[0],this.m_mPosition[1],this.m_mPosition[2],this.m_mRotation[0],this.m_mRotation[1],this.m_mRotation[2],this.m_mScale[0],this.m_mScale[1],this.m_mScale[2],this.m_mTransform);
	if((this.m_mParent)!=null){
		bb_math3d_Mat4MulSafe(this.m_mParent.m_mTransform,this.m_mTransform,this.m_mTransform);
	}
	var t_=this.m_mChildren.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_child=t_.p_NextObject();
		t_child.p__UpdateTransform();
	}
}
c_Entity.prototype.p_Parent2=function(t_p){
	if(this.m_mParent!=t_p){
		if((this.m_mParent)!=null){
			this.m_mParent.m_mChildren.p_RemoveFirst2(this);
		}
		if((t_p)!=null){
			t_p.m_mChildren.p_AddLast(this);
		}
		this.m_mParent=t_p;
		this.p__UpdateTransform();
	}
}
c_Entity.prototype.p_Scale=function(t_x,t_y,t_z){
	bb_math3d_Vec3Set(t_x,t_y,t_z,this.m_mScale);
	this.p__UpdateTransform();
}
c_Entity.m_new=function(t_parent){
	this.m_mChildren=c_List.m_new.call(new c_List);
	this.p_Parent2(t_parent);
	this.m_mActive=false;
	this.m_mVisible=false;
	this.m_mPickable=false;
	this.p_Scale(1.0,1.0,1.0);
	c_World.m__AddEntity(this);
	this.p__UpdateTransform();
	return this;
}
c_Entity.prototype.p_Visible=function(){
	return this.m_mVisible;
}
c_Entity.prototype.p_Visible2=function(t_visible){
	this.m_mVisible=t_visible;
	var t_=this.m_mChildren.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_c=t_.p_NextObject();
		t_c.p_Visible2(t_visible);
	}
}
c_Entity.prototype.p_Position2=function(t_x,t_y,t_z){
	bb_math3d_Vec3Set(t_x,t_y,t_z,this.m_mPosition);
	this.p__UpdateTransform();
}
c_Entity.prototype.p_Rotate=function(t_pitch,t_yaw,t_roll){
	bb_math3d_Vec3Set(t_pitch,t_yaw,t_roll,this.m_mRotation);
	this.p__UpdateTransform();
}
c_Entity.m_mTempArr=[];
c_Entity.prototype.p_CollisionMode=function(){
	return this.m_mCollisionMode;
}
c_Entity.prototype.p_CollisionMode2=function(t_mode){
	this.m_mCollisionMode=t_mode;
}
c_Entity.prototype.p_WorldX=function(){
	return this.m_mTransform[12];
}
c_Entity.prototype.p_WorldY=function(){
	return this.m_mTransform[13];
}
c_Entity.prototype.p_WorldZ=function(){
	return this.m_mTransform[14];
}
c_Entity.prototype.p_Active=function(){
	return this.m_mActive;
}
c_Entity.prototype.p_Active2=function(t_active){
	this.m_mActive=t_active;
	var t_=this.m_mChildren.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_c=t_.p_NextObject();
		t_c.p_Active2(t_active);
	}
}
c_Entity.prototype.p_Width=function(){
	return this.m_mScale[0];
}
c_Entity.prototype.p_BoxMinX=function(){
	return this.p_WorldX()-this.p_Width()/2.0;
}
c_Entity.prototype.p_Height=function(){
	return this.m_mScale[1];
}
c_Entity.prototype.p_BoxMinY=function(){
	return this.p_WorldY()-this.p_Height()/2.0;
}
c_Entity.prototype.p_Depth=function(){
	return this.m_mScale[2];
}
c_Entity.prototype.p_BoxMinZ=function(){
	return this.p_WorldZ()-this.p_Depth()/2.0;
}
c_Entity.prototype.p_BoxMaxX=function(){
	return this.p_WorldX()+this.p_Width()/2.0;
}
c_Entity.prototype.p_BoxMaxY=function(){
	return this.p_WorldY()+this.p_Height()/2.0;
}
c_Entity.prototype.p_BoxMaxZ=function(){
	return this.p_WorldZ()+this.p_Depth()/2.0;
}
c_Entity.prototype.p_Move=function(t_x,t_y,t_z,t_collideWithEntities){
	bb_math3d_QuatSetEuler(this.m_mRotation[0],this.m_mRotation[1],this.m_mRotation[2],c_Entity.m_mTempArr);
	bb_math3d_QuatMulVec3(c_Entity.m_mTempArr[0],c_Entity.m_mTempArr[1],c_Entity.m_mTempArr[2],c_Entity.m_mTempArr[3],t_x,t_y,t_z,c_Entity.m_mTempArr);
	if(this.p_CollisionMode()!=0){
		this.m_mCollided=false;
		this.m_mCollidedEntity=null;
		if(c_World.m__CheckStaticCollision(this.p_WorldX()+c_Entity.m_mTempArr[0],this.p_WorldY(),this.p_WorldZ(),this.m_mSqRadius)){
			this.m_mCollided=true;
			c_Entity.m_mTempArr[0]=0.0;
		}
		if(c_World.m__CheckStaticCollision(this.p_WorldX(),this.p_WorldY()+c_Entity.m_mTempArr[1],this.p_WorldZ(),this.m_mSqRadius)){
			this.m_mCollided=true;
			c_Entity.m_mTempArr[1]=0.0;
		}
		if(c_World.m__CheckStaticCollision(this.p_WorldX(),this.p_WorldY(),this.p_WorldZ()+c_Entity.m_mTempArr[2],this.m_mSqRadius)){
			this.m_mCollided=true;
			c_Entity.m_mTempArr[2]=0.0;
		}
		if(t_collideWithEntities){
			var t_=c_World.m__Entities().p_ObjectEnumerator();
			while(t_.p_HasNext()){
				var t_other=t_.p_NextObject();
				if(t_other!=this && t_other.p_CollisionMode()!=0 && t_other.p_Active()){
					if(this.p_CollisionMode()==1 && t_other.p_CollisionMode()==1){
						if(c_Collision.m_SphereSphere(this.p_WorldX()+c_Entity.m_mTempArr[0],this.p_WorldY(),this.p_WorldZ(),this.m_mSqRadius,t_other.p_WorldX(),t_other.p_WorldY(),t_other.p_WorldZ(),t_other.m_mSqRadius)){
							this.m_mCollided=true;
							this.m_mCollidedEntity=t_other;
							c_Entity.m_mTempArr[0]=0.0;
						}
						if(c_Collision.m_SphereSphere(this.p_WorldX(),this.p_WorldY()+c_Entity.m_mTempArr[1],this.p_WorldZ(),this.m_mSqRadius,t_other.p_WorldX(),t_other.p_WorldY(),t_other.p_WorldZ(),t_other.m_mSqRadius)){
							this.m_mCollided=true;
							this.m_mCollidedEntity=t_other;
							c_Entity.m_mTempArr[1]=0.0;
						}
						if(c_Collision.m_SphereSphere(this.p_WorldX(),this.p_WorldY(),this.p_WorldZ()+c_Entity.m_mTempArr[2],this.m_mSqRadius,t_other.p_WorldX(),t_other.p_WorldY(),t_other.p_WorldZ(),t_other.m_mSqRadius)){
							this.m_mCollided=true;
							this.m_mCollidedEntity=t_other;
							c_Entity.m_mTempArr[2]=0.0;
						}
					}else{
						if(this.p_CollisionMode()==1 && t_other.p_CollisionMode()==2){
							if(c_Collision.m_BoxSphere(t_other.p_BoxMinX(),t_other.p_BoxMinY(),t_other.p_BoxMinZ(),t_other.p_BoxMaxX(),t_other.p_BoxMaxY(),t_other.p_BoxMaxZ(),this.p_WorldX()+c_Entity.m_mTempArr[0],this.p_WorldY(),this.p_WorldZ(),this.m_mSqRadius)){
								this.m_mCollided=true;
								this.m_mCollidedEntity=t_other;
								c_Entity.m_mTempArr[0]=0.0;
							}
							if(c_Collision.m_BoxSphere(t_other.p_BoxMinX(),t_other.p_BoxMinY(),t_other.p_BoxMinZ(),t_other.p_BoxMaxX(),t_other.p_BoxMaxY(),t_other.p_BoxMaxZ(),this.p_WorldX(),this.p_WorldY()+c_Entity.m_mTempArr[1],this.p_WorldZ(),this.m_mSqRadius)){
								this.m_mCollided=true;
								this.m_mCollidedEntity=t_other;
								c_Entity.m_mTempArr[1]=0.0;
							}
							if(c_Collision.m_BoxSphere(t_other.p_BoxMinX(),t_other.p_BoxMinY(),t_other.p_BoxMinZ(),t_other.p_BoxMaxX(),t_other.p_BoxMaxY(),t_other.p_BoxMaxZ(),this.p_WorldX(),this.p_WorldY(),this.p_WorldZ()+c_Entity.m_mTempArr[2],this.m_mSqRadius)){
								this.m_mCollided=true;
								this.m_mCollidedEntity=t_other;
								c_Entity.m_mTempArr[2]=0.0;
							}
						}else{
							if(this.p_CollisionMode()==2 && t_other.p_CollisionMode()==1){
								if(c_Collision.m_BoxSphere(this.p_BoxMinX()+c_Entity.m_mTempArr[0],this.p_BoxMinY(),this.p_BoxMinZ(),this.p_BoxMaxX()+c_Entity.m_mTempArr[0],this.p_BoxMaxY(),this.p_BoxMaxZ(),t_other.p_WorldX(),t_other.p_WorldY(),t_other.p_WorldZ(),t_other.m_mSqRadius)){
									this.m_mCollided=true;
									this.m_mCollidedEntity=t_other;
									c_Entity.m_mTempArr[0]=0.0;
								}
								if(c_Collision.m_BoxSphere(this.p_BoxMinX(),this.p_BoxMinY()+c_Entity.m_mTempArr[1],this.p_BoxMinZ(),this.p_BoxMaxX(),this.p_BoxMaxY()+c_Entity.m_mTempArr[1],this.p_BoxMaxZ(),t_other.p_WorldX(),t_other.p_WorldY(),t_other.p_WorldZ(),t_other.m_mSqRadius)){
									this.m_mCollided=true;
									this.m_mCollidedEntity=t_other;
									c_Entity.m_mTempArr[1]=0.0;
								}
								if(c_Collision.m_BoxSphere(this.p_BoxMinX(),this.p_BoxMinY(),this.p_BoxMinZ()+c_Entity.m_mTempArr[2],this.p_BoxMaxX(),this.p_BoxMaxY(),this.p_BoxMaxZ()+c_Entity.m_mTempArr[2],t_other.p_WorldX(),t_other.p_WorldY(),t_other.p_WorldZ(),t_other.m_mSqRadius)){
									this.m_mCollided=true;
									this.m_mCollidedEntity=t_other;
									c_Entity.m_mTempArr[2]=0.0;
								}
							}else{
								if(this.p_CollisionMode()==2 && t_other.p_CollisionMode()==2){
									if(c_Collision.m_BoxBox(this.p_BoxMinX()+c_Entity.m_mTempArr[0],this.p_BoxMinY(),this.p_BoxMinZ(),this.p_BoxMaxX()+c_Entity.m_mTempArr[0],this.p_BoxMaxY(),this.p_BoxMaxZ(),t_other.p_BoxMinX(),t_other.p_BoxMinY(),t_other.p_BoxMinZ(),t_other.p_BoxMaxX(),t_other.p_BoxMaxY(),t_other.p_BoxMaxZ())){
										this.m_mCollided=true;
										this.m_mCollidedEntity=t_other;
										c_Entity.m_mTempArr[0]=0.0;
									}
									if(c_Collision.m_BoxBox(this.p_BoxMinX(),this.p_BoxMinY()+c_Entity.m_mTempArr[1],this.p_BoxMinZ(),this.p_BoxMaxX(),this.p_BoxMaxY()+c_Entity.m_mTempArr[1],this.p_BoxMaxZ(),t_other.p_BoxMinX(),t_other.p_BoxMinY(),t_other.p_BoxMinZ(),t_other.p_BoxMaxX(),t_other.p_BoxMaxY(),t_other.p_BoxMaxZ())){
										this.m_mCollided=true;
										this.m_mCollidedEntity=t_other;
										c_Entity.m_mTempArr[1]=0.0;
									}
									if(c_Collision.m_BoxBox(this.p_BoxMinX(),this.p_BoxMinY(),this.p_BoxMinZ()+c_Entity.m_mTempArr[2],this.p_BoxMaxX(),this.p_BoxMaxY(),this.p_BoxMaxZ()+c_Entity.m_mTempArr[2],t_other.p_BoxMinX(),t_other.p_BoxMinY(),t_other.p_BoxMinZ(),t_other.p_BoxMaxX(),t_other.p_BoxMaxY(),t_other.p_BoxMaxZ())){
										this.m_mCollided=true;
										this.m_mCollidedEntity=t_other;
										c_Entity.m_mTempArr[2]=0.0;
									}
								}
							}
						}
					}
					if(this.m_mCollidedEntity!=null){
						break;
					}
				}
			}
		}
	}
	bb_math3d_Vec3Add(this.m_mPosition[0],this.m_mPosition[1],this.m_mPosition[2],c_Entity.m_mTempArr[0],c_Entity.m_mTempArr[1],c_Entity.m_mTempArr[2],this.m_mPosition);
	this.p__UpdateTransform();
}
c_Entity.prototype.p_Discard=function(){
	this.p_Visible2(false);
	while(!this.m_mChildren.p_IsEmpty()){
		this.m_mChildren.p_First().p_Discard();
	}
	this.p_Parent2(null);
	c_World.m__FreeEntity(this);
}
c_Entity.prototype.p_Material=function(t_index){
	return null;
}
c_Entity.prototype.p_Material2=function(){
	return this.p_Material(0);
}
c_Entity.prototype.p_Pickable=function(){
	return this.m_mPickable;
}
c_Entity.prototype.p_Pickable2=function(t_state){
	this.m_mPickable=t_state;
}
c_Entity.prototype.p_Pitch=function(){
	return this.m_mRotation[0];
}
c_Entity.prototype.p_Pitch2=function(t_val){
	this.m_mRotation[0]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p_Yaw=function(){
	return this.m_mRotation[1];
}
c_Entity.prototype.p_Yaw2=function(t_val){
	this.m_mRotation[1]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p_Roll=function(){
	return this.m_mRotation[2];
}
c_Entity.prototype.p_Roll2=function(t_val){
	this.m_mRotation[2]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p_RayTrace2=function(t_traceInfo,t_rayOrigin,t_rayDirection,t_maxDistance){
	return false;
}
c_Entity.prototype.p__Update=function(){
}
c_Entity.prototype.p_Distance=function(t_other){
	bb_math3d_Vec3Sub(this.m_mPosition[0],this.m_mPosition[1],this.m_mPosition[2],t_other.m_mPosition[0],t_other.m_mPosition[1],t_other.m_mPosition[2],c_Entity.m_mTempArr);
	return bb_math3d_Vec3Length(c_Entity.m_mTempArr[0],c_Entity.m_mTempArr[1],c_Entity.m_mTempArr[2]);
}
c_Entity.prototype.p__Render2=function(t_step_){
	bb_math3d_Mat4Copy(this.m_mTransform,c_RenderState.m_ModelMatrix);
	return 0;
}
c_Entity.prototype.p_Radius=function(){
	return this.m_mRadius;
}
c_Entity.prototype.p_Radius2=function(t_rad){
	this.m_mRadius=t_rad;
	this.m_mSqRadius=t_rad*t_rad;
}
c_Entity.prototype.p_X2=function(){
	return this.m_mPosition[0];
}
c_Entity.prototype.p_X3=function(t_val){
	this.m_mPosition[0]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p_Y2=function(){
	return this.m_mPosition[1];
}
c_Entity.prototype.p_Y3=function(t_val){
	this.m_mPosition[1]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p_Z2=function(){
	return this.m_mPosition[2];
}
c_Entity.prototype.p_Z3=function(t_val){
	this.m_mPosition[2]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p_ScaleX=function(){
	return this.m_mScale[0];
}
c_Entity.prototype.p_ScaleX2=function(t_val){
	this.m_mScale[0]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p_ScaleY=function(){
	return this.m_mScale[1];
}
c_Entity.prototype.p_ScaleY2=function(t_val){
	this.m_mScale[1]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p_ScaleZ=function(){
	return this.m_mScale[2];
}
c_Entity.prototype.p_ScaleZ2=function(t_val){
	this.m_mScale[2]=t_val;
	this.p__UpdateTransform();
}
c_Entity.prototype.p__Transform=function(){
	return this.m_mTransform;
}
function c_Camera(){
	c_Entity.call(this);
	this.m_mVX=0;
	this.m_mVY=0;
	this.m_mVW=0;
	this.m_mVH=0;
	this.m_mClearMode=0;
	this.m_mBackgroundColor=0;
	this.m_mFovY=.0;
	this.m_mRatio=.0;
	this.m_mNear=.0;
	this.m_mFar=.0;
	this.m_mFramebuffer=null;
	this.m_mOrtho=false;
}
c_Camera.prototype=extend_class(c_Entity);
c_Camera.prototype.p_Viewport=function(t_x,t_y,t_width,t_height){
	this.m_mVX=t_x;
	this.m_mVY=t_y;
	this.m_mVW=t_width;
	this.m_mVH=t_height;
}
c_Camera.prototype.p_FovY=function(){
	return this.m_mFovY;
}
c_Camera.prototype.p_FovY2=function(t_fovy){
	this.m_mFovY=t_fovy;
}
c_Camera.prototype.p_ViewportWidth=function(){
	if(this.m_mVW!=-1){
		return this.m_mVW;
	}else{
		return bb_app_DeviceWidth();
	}
}
c_Camera.prototype.p_ViewportWidth2=function(t_val){
	this.m_mVW=t_val;
}
c_Camera.prototype.p_ViewportHeight=function(){
	if(this.m_mVH!=-1){
		return this.m_mVH;
	}else{
		return bb_app_DeviceHeight();
	}
}
c_Camera.prototype.p_ViewportHeight2=function(t_val){
	this.m_mVH=t_val;
}
c_Camera.prototype.p_AspectRatio=function(){
	if(this.m_mRatio!=-1.0){
		return this.m_mRatio;
	}else{
		return (this.p_ViewportWidth())/(this.p_ViewportHeight());
	}
}
c_Camera.prototype.p_AspectRatio2=function(t_ratio){
	this.m_mRatio=t_ratio;
}
c_Camera.prototype.p_Near=function(){
	return this.m_mNear;
}
c_Camera.prototype.p_Near2=function(t_near){
	this.m_mNear=t_near;
}
c_Camera.prototype.p_Far=function(){
	return this.m_mFar;
}
c_Camera.prototype.p_Far2=function(t_far){
	this.m_mFar=t_far;
}
c_Camera.prototype.p_Visible2=function(t_visible){
	if(t_visible!=c_Entity.prototype.p_Visible.call(this)){
		c_Entity.prototype.p_Visible2.call(this,t_visible);
		if(t_visible){
			c_World.m__AddCamera(this);
		}else{
			c_World.m__FreeCamera(this);
		}
	}
}
c_Camera.m_new=function(t_parent){
	c_Entity.m_new.call(this,t_parent);
	this.p_Viewport(0,0,-1,-1);
	this.m_mClearMode=1;
	this.m_mBackgroundColor=c_Color2.m_RGB(55,155,255,255);
	this.p_FovY2(50.0);
	this.p_AspectRatio2(-1.0);
	this.p_Near2(1.0);
	this.p_Far2(1000.0);
	this.p_Visible2(true);
	if(c_Listener.m_Instance()==null){
		c_Listener.m_Instance2(this);
	}
	return this;
}
c_Camera.prototype.p_Framebuffer=function(){
	return this.m_mFramebuffer;
}
c_Camera.prototype.p_Framebuffer2=function(t_fb){
	this.m_mFramebuffer=t_fb;
}
c_Camera.m_mCurrent=null;
c_Camera.prototype.p_BackgroundColor=function(){
	return this.m_mBackgroundColor;
}
c_Camera.prototype.p_BackgroundColor2=function(t_color){
	this.m_mBackgroundColor=t_color;
}
c_Camera.prototype.p__PrepareForRender2=function(){
	c_Camera.m_mCurrent=this;
	if((this.m_mFramebuffer)!=null){
		this.m_mFramebuffer.p_Use();
	}else{
		c_Framebuffer.m_UseScreen();
	}
	c_Renderer.m_Setup3D(this.m_mVX,this.m_mVY,this.p_ViewportWidth(),this.p_ViewportHeight());
	if(this.m_mOrtho){
		var t_height=this.m_mFovY*0.5;
		var t_width=t_height*this.p_AspectRatio();
		bb_math3d_Mat4OrthoLH(-t_width,t_width,-t_height,t_height,this.m_mNear,this.m_mFar,c_RenderState.m_ProjectionMatrix);
	}else{
		bb_math3d_Mat4PerspectiveLH(this.m_mFovY,this.p_AspectRatio(),this.m_mNear,this.m_mFar,c_RenderState.m_ProjectionMatrix);
	}
	bb_math3d_Mat4ViewEuler(this.p_WorldX(),this.p_WorldY(),this.p_WorldZ(),this.p_Pitch(),this.p_Yaw(),this.p_Roll(),c_RenderState.m_ViewMatrix);
	c_Renderer.m_ClearDepthBuffer();
	var t_1=this.m_mClearMode;
	if(t_1==1){
		c_Renderer.m_ClearColorBuffer(this.p_BackgroundColor());
	}else{
		if(t_1==2){
			c_World.m__RenderSkybox(this.p_WorldX(),this.p_WorldY(),this.p_WorldZ());
		}
	}
}
c_Camera.prototype.p_Discard=function(){
	c_Entity.prototype.p_Discard.call(this);
	if(c_Listener.m_Instance()==(this)){
		c_Listener.m_Instance2(null);
	}
}
c_Camera.prototype.p_CollisionMode2=function(t_mode){
	if(t_mode!=c_Entity.prototype.p_CollisionMode.call(this)){
		c_Entity.prototype.p_CollisionMode2.call(this,t_mode);
		if(t_mode!=0){
			this.p_Active2(true);
		}
	}
}
function c_List(){
	Object.call(this);
	this.m__head=(c_HeadNode.m_new.call(new c_HeadNode));
}
c_List.m_new=function(){
	return this;
}
c_List.prototype.p_AddLast=function(t_data){
	return c_Node5.m_new.call(new c_Node5,this.m__head,this.m__head.m__pred,t_data);
}
c_List.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast(t_t);
	}
	return this;
}
c_List.prototype.p_RemoveFirst=function(){
	var t_data=this.m__head.m__succ.m__data;
	this.m__head.m__succ.p_Remove();
	return t_data;
}
c_List.prototype.p_Equals=function(t_lhs,t_rhs){
	return t_lhs==t_rhs;
}
c_List.prototype.p_Find=function(t_value,t_start){
	while(t_start!=this.m__head){
		if(this.p_Equals(t_value,t_start.m__data)){
			return t_start;
		}
		t_start=t_start.m__succ;
	}
	return null;
}
c_List.prototype.p_Find2=function(t_value){
	return this.p_Find(t_value,this.m__head.m__succ);
}
c_List.prototype.p_RemoveFirst2=function(t_value){
	var t_node=this.p_Find2(t_value);
	if((t_node)!=null){
		t_node.p_Remove();
	}
}
c_List.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator2.m_new.call(new c_Enumerator2,this);
}
c_List.prototype.p_IsEmpty=function(){
	return this.m__head.m__succ==this.m__head;
}
c_List.prototype.p_First=function(){
	return this.m__head.m__succ.m__data;
}
c_List.prototype.p_Contains3=function(t_value){
	var t_node=this.m__head.m__succ;
	while(t_node!=this.m__head){
		if(this.p_Equals(t_node.m__data,t_value)){
			return true;
		}
		t_node=t_node.m__succ;
	}
	return false;
}
function c_Node5(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node5.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node5.m_new2=function(){
	return this;
}
c_Node5.prototype.p_Remove=function(){
	this.m__succ.m__pred=this.m__pred;
	this.m__pred.m__succ=this.m__succ;
	return 0;
}
function c_HeadNode(){
	c_Node5.call(this);
}
c_HeadNode.prototype=extend_class(c_Node5);
c_HeadNode.m_new=function(){
	c_Node5.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function bb_math3d_QuatSetEuler(t_x,t_y,t_z,t_out){
	var t_halfx=t_x*0.5;
	var t_halfy=t_y*0.5;
	var t_halfz=t_z*0.5;
	var t_sinyaw=Math.sin((t_halfy)*D2R);
	var t_sinpitch=Math.sin((t_halfx)*D2R);
	var t_sinroll=Math.sin((t_halfz)*D2R);
	var t_cosyaw=Math.cos((t_halfy)*D2R);
	var t_cospitch=Math.cos((t_halfx)*D2R);
	var t_cosroll=Math.cos((t_halfz)*D2R);
	t_out[0]=t_cospitch*t_cosyaw*t_cosroll+t_sinpitch*t_sinyaw*t_sinroll;
	t_out[1]=t_sinpitch*t_cosyaw*t_cosroll-t_cospitch*t_sinyaw*t_sinroll;
	t_out[2]=t_cospitch*t_sinyaw*t_cosroll+t_sinpitch*t_cosyaw*t_sinroll;
	t_out[3]=t_cospitch*t_cosyaw*t_sinroll-t_sinpitch*t_sinyaw*t_cosroll;
}
function bb_math3d_Vec3MulScalar(t_x,t_y,t_z,t_s,t_out){
	t_out[0]=t_x*t_s;
	t_out[1]=t_y*t_s;
	t_out[2]=t_z*t_s;
}
function bb_math3d_Vec3DivScalar(t_x,t_y,t_z,t_s,t_out){
	if(t_s==0.0){
		t_s=0.00001;
	}
	bb_math3d_Vec3MulScalar(t_x,t_y,t_z,1.0/t_s,t_out);
}
function bb_math3d_QuatAxis(t_w,t_x,t_y,t_z,t_out){
	bb_math3d_Vec3DivScalar(t_x,t_y,t_z,Math.sqrt(t_x*t_x+t_y*t_y+t_z*t_z),t_out);
}
function bb_math3d_Mat4Translate(t_m,t_x,t_y,t_z,t_out){
	bb_math3d_Mat4Identity(bb_math3d_tempMat4);
	bb_math3d_tempMat4[12]=t_x;
	bb_math3d_tempMat4[13]=t_y;
	bb_math3d_tempMat4[14]=t_z;
	bb_math3d_Mat4Mul(t_m,bb_math3d_tempMat4,t_out);
}
function bb_math3d_QuatDegrees(t_w,t_x,t_y,t_z){
	return (Math.acos(t_w)*R2D)*2.0;
}
function bb_math3d_Mat4Rotate(t_m,t_deg,t_x,t_y,t_z,t_out){
	bb_math3d_Mat4Identity(bb_math3d_tempMat4);
	var t_c=Math.cos((t_deg)*D2R);
	var t_s=Math.sin((t_deg)*D2R);
	var t_xx=t_x*t_x;
	var t_xy=t_x*t_y;
	var t_xz=t_x*t_z;
	var t_yy=t_y*t_y;
	var t_yz=t_y*t_z;
	var t_zz=t_z*t_z;
	bb_math3d_tempMat4[0]=t_xx*(1.0-t_c)+t_c;
	bb_math3d_tempMat4[1]=t_xy*(1.0-t_c)+t_z*t_s;
	bb_math3d_tempMat4[2]=t_xz*(1.0-t_c)-t_y*t_s;
	bb_math3d_tempMat4[4]=t_xy*(1.0-t_c)-t_z*t_s;
	bb_math3d_tempMat4[5]=t_yy*(1.0-t_c)+t_c;
	bb_math3d_tempMat4[6]=t_yz*(1.0-t_c)+t_x*t_s;
	bb_math3d_tempMat4[8]=t_xz*(1.0-t_c)+t_y*t_s;
	bb_math3d_tempMat4[9]=t_yz*(1.0-t_c)-t_x*t_s;
	bb_math3d_tempMat4[10]=t_zz*(1.0-t_c)+t_c;
	bb_math3d_Mat4Mul(t_m,bb_math3d_tempMat4,t_out);
}
function bb_math3d_Mat4Scale(t_m,t_x,t_y,t_z,t_out){
	bb_math3d_Mat4Identity(bb_math3d_tempMat4);
	bb_math3d_tempMat4[0]=t_x;
	bb_math3d_tempMat4[5]=t_y;
	bb_math3d_tempMat4[10]=t_z;
	bb_math3d_Mat4Mul(t_m,bb_math3d_tempMat4,t_out);
}
function bb_math3d_Mat4Transform(t_x,t_y,t_z,t_rw,t_rx,t_ry,t_rz,t_sx,t_sy,t_sz,t_out){
	bb_math3d_QuatAxis(t_rw,t_rx,t_ry,t_rz,t_out);
	var t_ax=t_out[0];
	var t_ay=t_out[1];
	var t_az=t_out[2];
	bb_math3d_Mat4Identity(t_out);
	bb_math3d_Mat4Translate(t_out,t_x,t_y,t_z,t_out);
	bb_math3d_Mat4Rotate(t_out,bb_math3d_QuatDegrees(t_rw,t_rx,t_ry,t_rz),t_ax,t_ay,t_az,t_out);
	bb_math3d_Mat4Scale(t_out,t_sx,t_sy,t_sz,t_out);
}
function bb_math3d_Mat4TransformEuler(t_x,t_y,t_z,t_rx,t_ry,t_rz,t_sx,t_sy,t_sz,t_out){
	bb_math3d_QuatSetEuler(t_rx,t_ry,t_rz,t_out);
	bb_math3d_Mat4Transform(t_x,t_y,t_z,t_out[0],t_out[1],t_out[2],t_out[3],t_sx,t_sy,t_sz,t_out);
}
function bb_math3d_Mat4MulSafe(t_a,t_b,t_out){
	bb_math3d_Mat4Copy(t_b,bb_math3d_tempMat4);
	bb_math3d_Mat4Mul(t_a,bb_math3d_tempMat4,t_out);
}
function c_Enumerator2(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator2.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator2.m_new2=function(){
	return this;
}
c_Enumerator2.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator2.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function c_List2(){
	Object.call(this);
	this.m__head=(c_HeadNode2.m_new.call(new c_HeadNode2));
}
c_List2.m_new=function(){
	return this;
}
c_List2.prototype.p_AddLast2=function(t_data){
	return c_Node6.m_new.call(new c_Node6,this.m__head,this.m__head.m__pred,t_data);
}
c_List2.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast2(t_t);
	}
	return this;
}
c_List2.prototype.p_RemoveFirst=function(){
	var t_data=this.m__head.m__succ.m__data;
	this.m__head.m__succ.p_Remove();
	return t_data;
}
c_List2.prototype.p_Equals2=function(t_lhs,t_rhs){
	return t_lhs==t_rhs;
}
c_List2.prototype.p_Find3=function(t_value,t_start){
	while(t_start!=this.m__head){
		if(this.p_Equals2(t_value,t_start.m__data)){
			return t_start;
		}
		t_start=t_start.m__succ;
	}
	return null;
}
c_List2.prototype.p_Find4=function(t_value){
	return this.p_Find3(t_value,this.m__head.m__succ);
}
c_List2.prototype.p_RemoveFirst3=function(t_value){
	var t_node=this.p_Find4(t_value);
	if((t_node)!=null){
		t_node.p_Remove();
	}
}
c_List2.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator10.m_new.call(new c_Enumerator10,this);
}
function c_Node6(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node6.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node6.m_new2=function(){
	return this;
}
c_Node6.prototype.p_Remove=function(){
	this.m__succ.m__pred=this.m__pred;
	this.m__pred.m__succ=this.m__succ;
	return 0;
}
function c_HeadNode2(){
	c_Node6.call(this);
}
c_HeadNode2.prototype=extend_class(c_Node6);
c_HeadNode2.m_new=function(){
	c_Node6.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_Listener(){
	Object.call(this);
}
c_Listener.m_mListener=null;
c_Listener.m_Instance=function(){
	return c_Listener.m_mListener;
}
c_Listener.m_Instance2=function(t_e){
	if(t_e!=null){
		c_Listener.m_mListener=t_e;
	}
}
c_Listener.m_mEmittedSounds=null;
c_Listener.m__Update=function(){
	if(c_Listener.m_mListener!=null){
		var t_=c_Listener.m_mEmittedSounds.p_ObjectEnumerator();
		while(t_.p_HasNext()){
			var t_es=t_.p_NextObject();
			if(!t_es.p__Update()){
				c_Listener.m_mEmittedSounds.p_RemoveFirst6(t_es);
			}
		}
	}
}
function c_Tile(){
	Object.call(this);
	this.m_Column=0;
	this.m_Row=0;
}
c_Tile.m_new=function(t_column,t_row){
	this.m_Column=t_column;
	this.m_Row=t_row;
	return this;
}
c_Tile.m_new2=function(){
	return this;
}
c_Tile.prototype.p_X2=function(){
	return (this.m_Column);
}
c_Tile.prototype.p_Z2=function(){
	return (3-this.m_Row-1);
}
c_Tile.m_FromPoint=function(t_x,t_y){
	return c_Tile.m_new.call(new c_Tile,((t_x)|0),3-((t_y)|0)-1);
}
c_Tile.m_FromEntity=function(t_entity){
	return c_Tile.m_FromPoint(t_entity.p_WorldX(),t_entity.p_WorldZ());
}
c_Tile.prototype.p_IsInner=function(){
	return this.m_Column>=0 && this.m_Column<3 && this.m_Row>=0 && this.m_Row<3;
}
c_Tile.prototype.p_Equals3=function(t_other){
	if(t_other!=null && this.m_Column==t_other.m_Column && this.m_Row==t_other.m_Row){
		return true;
	}else{
		return false;
	}
}
function bb_math3d_QuatMul(t_aw,t_ax,t_ay,t_az,t_bw,t_bx,t_by,t_bz,t_out){
	t_out[0]=t_aw*t_bw-t_ax*t_bx-t_ay*t_by-t_az*t_bz;
	t_out[1]=t_aw*t_bx+t_ax*t_bw+t_ay*t_bz-t_az*t_by;
	t_out[2]=t_aw*t_by+t_ay*t_bw+t_az*t_bx-t_ax*t_bz;
	t_out[3]=t_aw*t_bz+t_az*t_bw+t_ax*t_by-t_ay*t_bx;
}
function bb_math3d_QuatMulVec3(t_w,t_x,t_y,t_z,t_vx,t_vy,t_vz,t_out){
	bb_math3d_QuatMul(t_w,t_x,t_y,t_z,0.0,t_vx,t_vy,t_vz,t_out);
	bb_math3d_QuatMul(t_out[0],t_out[1],t_out[2],t_out[3],t_w,-t_x,-t_y,-t_z,t_out);
	t_out[0]=t_out[1];
	t_out[1]=t_out[2];
	t_out[2]=t_out[3];
}
function c_Box(){
	Object.call(this);
	this.m_mMin=[];
	this.m_mMax=[];
}
c_Box.prototype.p_Min=function(){
	return this.m_mMin;
}
c_Box.prototype.p_Max=function(){
	return this.m_mMax;
}
function c_Collision(){
	Object.call(this);
}
c_Collision.m_InRangeStrict=function(t_val,t_min,t_max){
	if(t_val>t_min && t_val<t_max){
		return true;
	}else{
		return false;
	}
}
c_Collision.m_IsPointInBox=function(t_x,t_y,t_z,t_minx,t_miny,t_minz,t_maxx,t_maxy,t_maxz){
	if(c_Collision.m_InRangeStrict(t_x,t_minx,t_maxx) && c_Collision.m_InRangeStrict(t_y,t_miny,t_maxy) && c_Collision.m_InRangeStrict(t_z,t_minz,t_maxz)){
		return true;
	}else{
		return false;
	}
}
c_Collision.m_mTempVec=[];
c_Collision.m_BoxSphere=function(t_minx,t_miny,t_minz,t_maxx,t_maxy,t_maxz,t_sx,t_sy,t_sz,t_sqrad){
	if(c_Collision.m_IsPointInBox(t_sx,t_sy,t_sz,t_minx,t_miny,t_minz,t_maxx,t_maxy,t_maxz)){
		return true;
	}else{
		bb_math3d_Vec3Set(bb_math_Clamp2(t_sx,t_minx,t_maxx),bb_math_Clamp2(t_sy,t_miny,t_maxy),bb_math_Clamp2(t_sz,t_minz,t_maxz),c_Collision.m_mTempVec);
		bb_math3d_Vec3Sub(c_Collision.m_mTempVec[0],c_Collision.m_mTempVec[1],c_Collision.m_mTempVec[2],t_sx,t_sy,t_sz,c_Collision.m_mTempVec);
		if(bb_math3d_Vec3SqLength(c_Collision.m_mTempVec[0],c_Collision.m_mTempVec[1],c_Collision.m_mTempVec[2])<t_sqrad){
			return true;
		}else{
			return false;
		}
	}
}
c_Collision.m_SphereSphere=function(t_sx1,t_sy1,t_sz1,t_sqrad1,t_sx2,t_sy2,t_sz2,t_sqrad2){
	bb_math3d_Vec3Sub(t_sx1,t_sy1,t_sz1,t_sx2,t_sy2,t_sz2,c_Collision.m_mTempVec);
	if(bb_math3d_Vec3SqLength(c_Collision.m_mTempVec[0],c_Collision.m_mTempVec[1],c_Collision.m_mTempVec[2])<t_sqrad1+t_sqrad2){
		return true;
	}else{
		return false;
	}
}
c_Collision.m_BoxBox=function(t_minx1,t_miny1,t_minz1,t_maxx1,t_maxy1,t_maxz1,t_minx2,t_miny2,t_minz2,t_maxx2,t_maxy2,t_maxz2){
	if(c_Collision.m_IsPointInBox(t_minx1,t_miny1,t_minz1,t_minx2,t_miny2,t_minz2,t_maxx2,t_maxy2,t_maxz2) || c_Collision.m_IsPointInBox(t_maxx1,t_maxy1,t_maxz1,t_minx2,t_miny2,t_minz2,t_maxx2,t_maxy2,t_maxz2) || c_Collision.m_IsPointInBox(t_minx2,t_miny2,t_minz2,t_minx1,t_miny1,t_minz1,t_maxx1,t_maxy1,t_maxz1) || c_Collision.m_IsPointInBox(t_maxx2,t_maxy2,t_maxz2,t_minx1,t_miny1,t_minz1,t_maxx1,t_maxy1,t_maxz1)){
		return true;
	}else{
		return false;
	}
}
function bb_math3d_Vec3Sub(t_ax,t_ay,t_az,t_bx,t_by,t_bz,t_out){
	t_out[0]=t_ax-t_bx;
	t_out[1]=t_ay-t_by;
	t_out[2]=t_az-t_bz;
}
function bb_math3d_Vec3Sub2(t_result,t_l,t_r){
	t_result[0]=t_l[0]-t_r[0];
	t_result[1]=t_l[1]-t_r[1];
	t_result[2]=t_l[2]-t_r[2];
}
function bb_math3d_Vec3Dot(t_ax,t_ay,t_az,t_bx,t_by,t_bz){
	return t_ax*t_bx+t_ay*t_by+t_az*t_bz;
}
function bb_math3d_Vec3Dot2(t_l,t_r){
	return t_l[0]*t_r[0]+t_l[1]*t_r[1]+t_l[2]*t_r[2];
}
function bb_math3d_Vec3SqLength(t_x,t_y,t_z){
	return bb_math3d_Vec3Dot(t_x,t_y,t_z,t_x,t_y,t_z);
}
function bb_math3d_Vec3Add(t_ax,t_ay,t_az,t_bx,t_by,t_bz,t_out){
	t_out[0]=t_ax+t_bx;
	t_out[1]=t_ay+t_by;
	t_out[2]=t_az+t_bz;
}
function c_Widget(){
	Object.call(this);
	this.m_mDelegate=null;
	this.m_mX=0;
	this.m_mY=0;
	this.m_mVisible=false;
	this.m_mColor=0;
	this.m_mWidth=0;
	this.m_mHeight=0;
}
c_Widget.m_widgets=null;
c_Widget.prototype.p_X2=function(){
	return this.m_mX;
}
c_Widget.prototype.p_X=function(t_x){
	this.m_mX=t_x;
}
c_Widget.prototype.p_Y2=function(){
	return this.m_mY;
}
c_Widget.prototype.p_Y=function(t_y){
	this.m_mY=t_y;
}
c_Widget.prototype.p_Visible=function(){
	return this.m_mVisible;
}
c_Widget.prototype.p_Visible2=function(t_visible){
	this.m_mVisible=t_visible;
}
c_Widget.prototype.p_Color2=function(){
	return this.m_mColor;
}
c_Widget.prototype.p_Color=function(t_color){
	this.m_mColor=t_color;
}
c_Widget.m_new=function(t_x,t_y,t_delegate){
	c_Widget.m_widgets.p_AddLast3(this);
	this.m_mDelegate=t_delegate;
	this.p_X(t_x);
	this.p_Y(t_y);
	this.p_Visible2(true);
	this.p_Color(-1);
	return this;
}
c_Widget.m_new2=function(){
	return this;
}
c_Widget.prototype.p_Width=function(){
	return this.m_mWidth;
}
c_Widget.prototype.p_Width2=function(t_width){
	this.m_mWidth=t_width;
}
c_Widget.prototype.p_Height=function(){
	return this.m_mHeight;
}
c_Widget.prototype.p_Height2=function(t_height){
	this.m_mHeight=t_height;
}
c_Widget.prototype.p_IsHovered=function(t_x,t_y){
	return t_x>=this.p_X2() && t_x<=this.p_X2()+this.p_Width() && t_y>=this.p_Y2() && t_y<=this.p_Y2()+this.p_Height();
}
c_Widget.prototype.p_Update=function(t_x,t_y,t_clicked){
	if(this.p_IsHovered(t_x,t_y) && t_clicked && this.m_mDelegate!=null){
		this.m_mDelegate.p_OnClick(this);
	}
}
c_Widget.m_UpdateAll=function(t_x,t_y,t_clicked){
	var t_=c_Widget.m_widgets.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_widget=t_.p_NextObject();
		if(t_widget.p_Visible()){
			t_widget.p_Update(t_x,t_y,t_clicked);
		}
	}
}
c_Widget.prototype.p_Draw3=function(){
	c_Graphics.m_Color(this.m_mColor);
}
c_Widget.m_DrawAll=function(){
	var t_=c_Widget.m_widgets.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_widget=t_.p_NextObject();
		if(t_widget.p_Visible()){
			t_widget.p_Draw3();
		}
	}
}
function c_TextureWidget(){
	c_Widget.call(this);
	this.m_mTexture=null;
}
c_TextureWidget.prototype=extend_class(c_Widget);
c_TextureWidget.prototype.p_Texture=function(){
	return this.m_mTexture;
}
c_TextureWidget.prototype.p_Texture2=function(t_tex){
	this.m_mTexture=t_tex;
	this.p_Width2(t_tex.p_Width());
	this.p_Height2(t_tex.p_Height());
}
c_TextureWidget.m_new=function(t_texture,t_x,t_y,t_delegate){
	c_Widget.m_new.call(this,t_x,t_y,t_delegate);
	this.p_Texture2(t_texture);
	return this;
}
c_TextureWidget.m_new2=function(){
	c_Widget.m_new2.call(this);
	return this;
}
c_TextureWidget.prototype.p_Draw3=function(){
	c_Widget.prototype.p_Draw3.call(this);
	this.m_mTexture.p_Draw2((this.p_X2()),(this.p_Y2()),(this.p_Width()),(this.p_Height()),0.0,0.0,0.0,0.0);
}
function c_List3(){
	Object.call(this);
	this.m__head=(c_HeadNode3.m_new.call(new c_HeadNode3));
}
c_List3.m_new=function(){
	return this;
}
c_List3.prototype.p_AddLast3=function(t_data){
	return c_Node7.m_new.call(new c_Node7,this.m__head,this.m__head.m__pred,t_data);
}
c_List3.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast3(t_t);
	}
	return this;
}
c_List3.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator8.m_new.call(new c_Enumerator8,this);
}
function c_Node7(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node7.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node7.m_new2=function(){
	return this;
}
function c_HeadNode3(){
	c_Node7.call(this);
}
c_HeadNode3.prototype=extend_class(c_Node7);
c_HeadNode3.m_new=function(){
	c_Node7.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_TextWidget(){
	c_Widget.call(this);
	this.m_mFont=null;
	this.m_mText="";
}
c_TextWidget.prototype=extend_class(c_Widget);
c_TextWidget.prototype.p_Font=function(){
	return this.m_mFont;
}
c_TextWidget.prototype.p_Font2=function(t_font){
	this.m_mFont=t_font;
}
c_TextWidget.prototype.p_Text=function(){
	return this.m_mText;
}
c_TextWidget.prototype.p_Text2=function(t_text){
	this.m_mText=t_text;
	this.p_Width2((this.m_mFont.p_TextWidth(t_text))|0);
	this.p_Height2((this.m_mFont.p_TextHeight(t_text))|0);
}
c_TextWidget.m_new=function(t_font,t_text,t_x,t_y,t_delegate){
	c_Widget.m_new.call(this,t_x,t_y,t_delegate);
	this.p_Font2(t_font);
	this.p_Text2(t_text);
	return this;
}
c_TextWidget.m_new2=function(){
	c_Widget.m_new2.call(this);
	return this;
}
c_TextWidget.prototype.p_Draw3=function(){
	c_Widget.prototype.p_Draw3.call(this);
	this.m_mFont.p_Draw((this.p_X2()),(this.p_Y2()),this.m_mText);
}
function c_ScreenRect(){
	Object.call(this);
	this.m_Width=0;
	this.m_Height=0;
	this.m_X=0;
	this.m_Y=0;
}
c_ScreenRect.m_new=function(){
	return this;
}
c_ScreenRect.m_Calculate=function(){
	var t_rect=c_ScreenRect.m_new.call(new c_ScreenRect);
	if(bb_app_DeviceWidth()>bb_app_DeviceHeight()){
		var t_ratio=(bb_app_DeviceHeight())/(bb_app_DeviceWidth());
		t_rect.m_Width=(((bb_app_DeviceWidth())*t_ratio)|0);
		t_rect.m_Height=bb_app_DeviceHeight();
		t_rect.m_X=(((bb_app_DeviceWidth()-t_rect.m_Width)/2)|0);
		t_rect.m_Y=0;
	}else{
		var t_ratio2=(bb_app_DeviceWidth())/(bb_app_DeviceHeight());
		t_rect.m_Width=bb_app_DeviceWidth();
		t_rect.m_Height=(((bb_app_DeviceHeight())*t_ratio2)|0);
		t_rect.m_X=0;
		t_rect.m_Y=(((bb_app_DeviceHeight()-t_rect.m_Height)/2)|0);
	}
	return t_rect;
}
c_ScreenRect.prototype.p_ScreenX=function(t_x){
	return (((t_x-this.m_X)*64.0/(this.m_Width))|0);
}
c_ScreenRect.prototype.p_ScreenY=function(t_y){
	return (((t_y-this.m_Y)*64.0/(this.m_Height))|0);
}
function c_Level(){
	Object.call(this);
	this.m_mGrid=null;
	this.m_mCarTile=null;
	this.m_mFlagTile=null;
}
c_Level.prototype.p_Discard=function(){
	this.m_mGrid.p_Discard();
}
c_Level.m_new=function(){
	return this;
}
c_Level.m_Load=function(t_levelNumber){
	var t_lines=string_replace(string_replace(bb_app_LoadString("levels.txt"),"\r\n","\n"),"\r","\n").split("\n");
	if(t_lines.length>=t_levelNumber){
		var t_line=t_lines[t_levelNumber-1];
		var t_lineSplit=t_line.split(":");
		var t_carSplit=t_lineSplit[0].split(",");
		var t_flagSplit=t_lineSplit[1].split(",");
		var t_gridSplit=t_lineSplit[2].split(",");
		var t_gridData=new_array_array(3);
		for(var t_i=0;t_i<3;t_i=t_i+1){
			var t_offset=3*t_i;
			t_gridData[t_i]=[parseInt((t_gridSplit[t_offset]),10),parseInt((t_gridSplit[t_offset+1]),10),parseInt((t_gridSplit[t_offset+2]),10)];
		}
		var t_level=c_Level.m_new.call(new c_Level);
		t_level.m_mCarTile=c_Tile.m_new.call(new c_Tile,parseInt((t_carSplit[0]),10),parseInt((t_carSplit[1]),10));
		t_level.m_mFlagTile=c_Tile.m_new.call(new c_Tile,parseInt((t_flagSplit[0]),10),parseInt((t_flagSplit[1]),10));
		t_level.m_mGrid=c_Grid.m_Create(t_gridData);
		return t_level;
	}else{
		return null;
	}
}
c_Level.prototype.p_CarTile=function(){
	return this.m_mCarTile;
}
c_Level.prototype.p_FlagTile=function(){
	return this.m_mFlagTile;
}
c_Level.prototype.p_MoveTile=function(t_tile){
	return this.m_mGrid.p_MoveTile(t_tile);
}
c_Level.prototype.p_CarHasEntry=function(){
	return this.m_mGrid.p_NextTile(this.m_mCarTile,this.m_mGrid.p_TileExit(this.m_mCarTile,-1))!=null;
}
c_Level.prototype.p_CalculatePathToFlag=function(){
	var t_path=c_List8.m_new.call(new c_List8);
	var t_currentTile=this.m_mCarTile;
	var t_currentExit=this.m_mGrid.p_TileExit(t_currentTile,-1);
	while(!t_currentTile.p_Equals3(this.m_mFlagTile)){
		if(!t_currentTile.p_Equals3(this.m_mCarTile)){
			t_path.p_AddLast8(t_currentTile);
		}
		t_currentTile=this.m_mGrid.p_NextTile(t_currentTile,t_currentExit);
		if(t_currentTile==null){
			break;
		}
		t_currentExit=this.m_mGrid.p_TileExit(t_currentTile,t_currentExit);
	}
	if(t_currentTile!=null && t_currentTile.p_Equals3(this.m_mFlagTile)){
		t_path.p_AddLast8(t_currentTile);
	}
	return t_path;
}
function c_Grid(){
	Object.call(this);
	this.m_mRows=[];
}
c_Grid.prototype.p_Discard=function(){
	var t_=this.m_mRows;
	var t_2=0;
	while(t_2<t_.length){
		var t_row=t_[t_2];
		t_2=t_2+1;
		var t_3=t_row;
		var t_4=0;
		while(t_4<t_3.length){
			var t_model=t_3[t_4];
			t_4=t_4+1;
			if(t_model!=null){
				t_model.p_Discard();
			}
		}
	}
}
c_Grid.m_mQuad=null;
c_Grid.m_InitQuad=function(){
	if(c_Grid.m_mQuad==null){
		c_Grid.m_mQuad=c_Mesh.m_CreateQuad(null);
		c_Grid.m_mQuad.p_Rotate(90.0,0.0,0.0);
		c_Grid.m_mQuad.p_Rebuild();
	}
}
c_Grid.m_CheckRow=function(t_row){
	if(t_row.length==3){
		return true;
	}else{
		return false;
	}
}
c_Grid.m_CheckRows=function(t_rows){
	if(t_rows.length==3){
		var t_=t_rows;
		var t_2=0;
		while(t_2<t_.length){
			var t_row=t_[t_2];
			t_2=t_2+1;
			if(!c_Grid.m_CheckRow(t_row)){
				return false;
			}
		}
		return true;
	}else{
		return false;
	}
}
c_Grid.m_LPad=function(t_str,t_char,t_len){
	t_char=t_char.slice(0,1);
	var t_amount=bb_math_Max(0,t_len-t_str.length);
	var t_lpad="";
	for(var t_i=0;t_i<t_amount;t_i=t_i+1){
		t_lpad=t_lpad+t_char;
	}
	return t_lpad+t_str;
}
c_Grid.m_LoadModel=function(t_id,t_rowIndex,t_colIndex){
	if(t_id!=0){
		var t_tile=c_Tile.m_new.call(new c_Tile,t_colIndex,t_rowIndex);
		var t_model=c_Model.m_new.call(new c_Model,c_Grid.m_mQuad,null);
		t_model.p_Material(0).p_ColorTexture(c_Texture.m_Load2(c_Grid.m_LPad(String(t_id),"0",2)+".png",0,true));
		t_model.p_Position2(t_tile.p_X2(),0.0,t_tile.p_Z2());
		t_model.p_Pickable2(true);
		return t_model;
	}else{
		return null;
	}
}
c_Grid.m_ParseRow=function(t_row,t_rowIndex){
	var t_modelRow=new_object_array(t_row.length);
	for(var t_i=0;t_i<t_row.length;t_i=t_i+1){
		t_modelRow[t_i]=c_Grid.m_LoadModel(t_row[t_i],t_rowIndex,t_i);
	}
	return t_modelRow;
}
c_Grid.m_Append=function(t_arr,t_row){
	t_arr=resize_array_array(t_arr,t_arr.length+1);
	t_arr[t_arr.length-1]=resize_object_array(t_row,t_row.length);
	return t_arr;
}
c_Grid.m_new=function(t_rows){
	this.m_mRows=new_array_array(0);
	for(var t_i=0;t_i<t_rows.length;t_i=t_i+1){
		this.m_mRows=c_Grid.m_Append(this.m_mRows,c_Grid.m_ParseRow(t_rows[t_i],t_i));
	}
	return this;
}
c_Grid.m_new2=function(){
	return this;
}
c_Grid.m_Create=function(t_rows){
	c_Grid.m_InitQuad();
	if(c_Grid.m_CheckRows(t_rows)){
		return c_Grid.m_new.call(new c_Grid,t_rows);
	}else{
		return null;
	}
}
c_Grid.prototype.p_ModelAt=function(t_tile){
	if(t_tile.p_IsInner()){
		return this.m_mRows[t_tile.m_Row][t_tile.m_Column];
	}else{
		return null;
	}
}
c_Grid.prototype.p_IsEmptyTile=function(t_tile){
	if(t_tile.m_Row>=0 && t_tile.m_Row<3 && t_tile.m_Column>=0 && t_tile.m_Column<3 && this.p_ModelAt(t_tile)==null){
		return true;
	}else{
		return false;
	}
}
c_Grid.prototype.p_EmptyAdjacentTile=function(t_tile){
	var t_left=c_Tile.m_new.call(new c_Tile,t_tile.m_Column-1,t_tile.m_Row);
	var t_right=c_Tile.m_new.call(new c_Tile,t_tile.m_Column+1,t_tile.m_Row);
	var t_up=c_Tile.m_new.call(new c_Tile,t_tile.m_Column,t_tile.m_Row-1);
	var t_down=c_Tile.m_new.call(new c_Tile,t_tile.m_Column,t_tile.m_Row+1);
	if(this.p_IsEmptyTile(t_left)){
		return t_left;
	}else{
		if(this.p_IsEmptyTile(t_right)){
			return t_right;
		}else{
			if(this.p_IsEmptyTile(t_up)){
				return t_up;
			}else{
				if(this.p_IsEmptyTile(t_down)){
					return t_down;
				}else{
					return null;
				}
			}
		}
	}
}
c_Grid.prototype.p_MoveTile=function(t_tile){
	var t_adjacent=this.p_EmptyAdjacentTile(t_tile);
	if(t_adjacent!=null){
		var t_model=this.p_ModelAt(t_tile);
		this.m_mRows[t_adjacent.m_Row][t_adjacent.m_Column]=t_model;
		this.m_mRows[t_tile.m_Row][t_tile.m_Column]=null;
		t_model.p_Position2(t_adjacent.p_X2(),0.0,t_adjacent.p_Z2());
		return true;
	}else{
		return false;
	}
}
c_Grid.m_ExitsMap=function(){
	var t_exitsMap=c_IntMap3.m_new.call(new c_IntMap3);
	t_exitsMap.p_Add3(1,[1,3]);
	t_exitsMap.p_Add3(2,[2,0]);
	t_exitsMap.p_Add3(3,[0,3]);
	t_exitsMap.p_Add3(4,[2,3]);
	t_exitsMap.p_Add3(5,[2,1]);
	t_exitsMap.p_Add3(6,[0,1]);
	return t_exitsMap;
}
c_Grid.prototype.p_AllExitsForTile=function(t_tile){
	var t_model=this.p_ModelAt(t_tile);
	var t_exits=[];
	if(t_model!=null){
		var t_id=parseInt((bb_filepath_StripExt(t_model.p_Material(0).p_ColorTexture2().p_Filename2())),10);
		var t_exitsMap=c_Grid.m_ExitsMap();
		if(t_exitsMap.p_Contains(t_id)){
			t_exits=t_exitsMap.p_Get2(t_id);
		}
	}
	if(t_exits.length==0 && !t_tile.p_IsInner()){
		if(t_tile.m_Column<0){
			t_exits=[0];
		}else{
			if(t_tile.m_Column>=3){
				t_exits=[2];
			}else{
				if(t_tile.m_Row<0){
					t_exits=[3];
				}else{
					t_exits=[1];
				}
			}
		}
	}
	return t_exits;
}
c_Grid.m_AdjacentExit=function(t_selectedExit){
	var t_2=t_selectedExit;
	if(t_2==2){
		return 0;
	}else{
		if(t_2==0){
			return 2;
		}else{
			if(t_2==1){
				return 3;
			}else{
				if(t_2==3){
					return 1;
				}else{
					return -1;
				}
			}
		}
	}
}
c_Grid.prototype.p_NextTile=function(t_fromTile,t_selectedExit){
	var t_nextTile=null;
	var t_1=t_selectedExit;
	if(t_1==2){
		return c_Tile.m_new.call(new c_Tile,t_fromTile.m_Column-1,t_fromTile.m_Row);
	}else{
		if(t_1==0){
			return c_Tile.m_new.call(new c_Tile,t_fromTile.m_Column+1,t_fromTile.m_Row);
		}else{
			if(t_1==1){
				return c_Tile.m_new.call(new c_Tile,t_fromTile.m_Column,t_fromTile.m_Row-1);
			}else{
				if(t_1==3){
					return c_Tile.m_new.call(new c_Tile,t_fromTile.m_Column,t_fromTile.m_Row+1);
				}else{
					return null;
				}
			}
		}
	}
}
c_Grid.prototype.p_TileHasExit=function(t_tile,t_exit_){
	var t_exits=this.p_AllExitsForTile(t_tile);
	var t_=t_exits;
	var t_2=0;
	while(t_2<t_.length){
		var t_ex=t_[t_2];
		t_2=t_2+1;
		if(t_ex==t_exit_){
			return true;
		}
	}
	return false;
}
c_Grid.prototype.p_TileExit=function(t_tile,t_lastExit){
	var t_exits=this.p_AllExitsForTile(t_tile);
	var t_excludeExit=c_Grid.m_AdjacentExit(t_lastExit);
	if(t_excludeExit!=-1){
		if(t_exits.length>=2 && t_exits[1]==t_excludeExit){
			t_exits=t_exits.slice(0,1);
		}
		if(t_exits.length>=1 && t_exits[0]==t_excludeExit){
			t_exits=t_exits.slice(1,t_exits.length);
		}
	}
	if(t_exits.length>0){
		var t_nextTile=this.p_NextTile(t_tile,t_exits[0]);
		if(this.p_TileHasExit(t_nextTile,c_Grid.m_AdjacentExit(t_exits[0]))){
			return t_exits[0];
		}else{
			return -1;
		}
	}else{
		return -1;
	}
}
function c_Model(){
	c_Entity.call(this);
	this.m_mMesh=null;
	this.m_mMaterials=[];
	this.m_mCurrentFrame=.0;
	this.m_mFirstFrame=0;
	this.m_mLastFrame=0;
	this.m_rtModelBox=new_number_array(6);
	this.m_rtModelSphere=new_number_array(4);
	this.m_rtIntersectionInfo=new_number_array(2);
	this.m_rtModelTransform=new_number_array(16);
	this.m_rtInverseModelTransform=new_number_array(16);
	this.m_rtLocalRayOrigin=new_number_array(3);
	this.m_rtLocalRayDirection=new_number_array(3);
	this.m_mAnimFps=.0;
}
c_Model.prototype=extend_class(c_Entity);
c_Model.prototype.p_Visible=function(){
	return c_Entity.prototype.p_Visible.call(this);
}
c_Model.prototype.p_Visible2=function(t_visible){
	if(t_visible!=c_Entity.prototype.p_Visible.call(this)){
		c_Entity.prototype.p_Visible2.call(this,t_visible);
		c_World.m__EntitySetVisible((this),t_visible);
	}
}
c_Model.prototype.p_Active=function(){
	return c_Entity.prototype.p_Active.call(this);
}
c_Model.prototype.p_Active2=function(t_active){
	if(t_active!=c_Entity.prototype.p_Active.call(this)){
		c_Entity.prototype.p_Active2.call(this,t_active);
		c_World.m__EntityNeedsUpdate((this),t_active);
	}
}
c_Model.m_new=function(t_mesh,t_parent){
	c_Entity.m_new.call(this,t_parent);
	this.m_mMesh=t_mesh;
	this.m_mMaterials=new_object_array(this.m_mMesh.p_NumSurfaces());
	for(var t_i=0;t_i<this.m_mMaterials.length;t_i=t_i+1){
		this.m_mMaterials[t_i]=c_Material.m_new2.call(new c_Material,this.m_mMesh.p_Material(t_i));
	}
	this.m_mCurrentFrame=0.0;
	this.m_mFirstFrame=0;
	this.m_mLastFrame=t_mesh.p_NumFrames();
	this.p_Visible2(true);
	this.p_Active2(true);
	return this;
}
c_Model.m_new2=function(){
	c_Entity.m_new.call(this,null);
	return this;
}
c_Model.prototype.p_Material=function(t_index){
	return this.m_mMaterials[t_index];
}
c_Model.prototype.p_Material2=function(){
	return this.p_Material(0);
}
c_Model.prototype.p_BoxMinX=function(){
	return this.p_WorldX()+this.m_mMesh.p_BoxMinX()*this.p_ScaleX();
}
c_Model.prototype.p_BoxMinY=function(){
	return this.p_WorldY()+this.m_mMesh.p_BoxMinY()*this.p_ScaleY();
}
c_Model.prototype.p_BoxMinZ=function(){
	return this.p_WorldZ()+this.m_mMesh.p_BoxMinZ()*this.p_ScaleZ();
}
c_Model.prototype.p_BoxMaxX=function(){
	return this.p_WorldX()+this.m_mMesh.p_BoxMaxX()*this.p_ScaleX();
}
c_Model.prototype.p_BoxMaxY=function(){
	return this.p_WorldY()+this.m_mMesh.p_BoxMaxY()*this.p_ScaleY();
}
c_Model.prototype.p_BoxMaxZ=function(){
	return this.p_WorldZ()+this.m_mMesh.p_BoxMaxZ()*this.p_ScaleZ();
}
c_Model.prototype.p_Mesh=function(){
	return this.m_mMesh;
}
c_Model.prototype.p_RayTrace2=function(t_ti,t_rayOrigin,t_rayDirection,t_maxDistance){
	var t_traceInfo=object_downcast((t_ti),c_TraceInfo);
	this.m_rtModelBox[0]=this.p_BoxMinX();
	this.m_rtModelBox[1]=this.p_BoxMinY();
	this.m_rtModelBox[2]=this.p_BoxMinZ();
	this.m_rtModelBox[3]=this.p_BoxMaxX();
	this.m_rtModelBox[4]=this.p_BoxMaxY();
	this.m_rtModelBox[5]=this.p_BoxMaxZ();
	this.m_rtModelSphere[0]=(this.m_rtModelBox[0]+this.m_rtModelBox[3])*0.5;
	this.m_rtModelSphere[1]=(this.m_rtModelBox[1]+this.m_rtModelBox[4])*0.5;
	this.m_rtModelSphere[2]=(this.m_rtModelBox[2]+this.m_rtModelBox[5])*0.5;
	this.m_rtModelSphere[3]=bb_math_Max2(this.m_rtModelBox[5]-this.m_rtModelBox[2],bb_math_Max2(this.m_rtModelBox[3]-this.m_rtModelBox[0],this.m_rtModelBox[4]-this.m_rtModelBox[1]));
	if(!bb_math3d_RaySphereIntersection(this.m_rtIntersectionInfo,t_rayOrigin,t_rayDirection,this.m_rtModelSphere)){
		return false;
	}
	if(t_maxDistance>0.0 && this.m_rtIntersectionInfo[0]>t_maxDistance){
		return false;
	}
	bb_math3d_Mat4TransformEuler(this.p_WorldX(),this.p_WorldY(),this.p_WorldZ(),this.p_Pitch(),this.p_Yaw(),this.p_Roll(),this.p_ScaleX(),this.p_ScaleY(),this.p_ScaleZ(),this.m_rtModelTransform);
	bb_math3d_Mat4Invert(this.m_rtModelTransform,this.m_rtInverseModelTransform);
	bb_math3d_Vec3TransformCoord(this.m_rtLocalRayOrigin,t_rayOrigin,this.m_rtInverseModelTransform);
	bb_math3d_Vec3TransformNormal(this.m_rtLocalRayDirection,t_rayDirection,this.m_rtInverseModelTransform);
	if(!this.p_Mesh().p_RayTrace(t_traceInfo,this.m_rtLocalRayOrigin,this.m_rtLocalRayDirection)){
		return false;
	}
	if(t_maxDistance>0.0 && t_traceInfo.m_mDistance>t_maxDistance){
		return false;
	}
	bb_math3d_Vec3Transform(t_traceInfo.m_mPoint,t_traceInfo.m_mPoint,this.m_rtModelTransform);
	return true;
}
c_Model.prototype.p_Width=function(){
	return this.m_mMesh.p_Width()*this.p_ScaleX();
}
c_Model.prototype.p_Height=function(){
	return this.m_mMesh.p_Height()*this.p_ScaleY();
}
c_Model.prototype.p_Depth=function(){
	return this.m_mMesh.p_Depth()*this.p_ScaleZ();
}
c_Model.prototype.p__Update=function(){
	if(this.m_mAnimFps!=0.0){
		this.m_mCurrentFrame+=this.m_mAnimFps*c_World.m_DeltaTime();
		if(this.m_mCurrentFrame>(this.m_mLastFrame)){
			this.m_mCurrentFrame=this.m_mCurrentFrame-(this.m_mLastFrame-this.m_mFirstFrame);
		}
		if(this.m_mCurrentFrame<(this.m_mFirstFrame)){
			this.m_mCurrentFrame=this.m_mCurrentFrame+(this.m_mLastFrame-this.m_mFirstFrame);
		}
	}
}
c_Model.prototype.p__Render2=function(t_step_){
	if(this.m_mAnimFps!=0.0){
		this.m_mMesh.p__AnimateVertices(this.m_mCurrentFrame,this.m_mFirstFrame,this.m_mLastFrame);
	}
	var t_numRenders=0;
	c_Entity.prototype.p__Render2.call(this,t_step_);
	for(var t_i=0;t_i<this.m_mMesh.p_NumSurfaces();t_i=t_i+1){
		if(this.m_mMaterials[t_i].p__PrepareForRender(t_step_)){
			this.m_mMesh.p_Surface(t_i).p__Render();
			t_numRenders+=1;
		}
	}
	return t_numRenders;
}
function c_Car(){
	Object.call(this);
	this.m_mEntity=null;
	this.m_mGameDelegate=null;
	this.m_mPath=null;
	this.m_mTarget=null;
	this.implments={c_AnimatorDelegate:1};
}
c_Car.prototype.p_Discard=function(){
	this.m_mEntity.p_Discard();
}
c_Car.m_sound=null;
c_Car.m_InitSound=function(){
	if(c_Car.m_sound==null){
		c_Car.m_sound=bb_audio_LoadSound("car.ogg");
	}
}
c_Car.m_LoadUnitMesh=function(t_filename){
	var t_wasLoaded=c_Mesh.m_IsLoaded(t_filename);
	var t_mesh=c_Mesh.m_Load(t_filename,3,true);
	if(!t_wasLoaded){
		var t_max=bb_math_Max2(bb_math_Max2(t_mesh.p_Width(),t_mesh.p_Height()),t_mesh.p_Depth());
		t_mesh.p_Scale(1.0/t_max,1.0/t_max,1.0/t_max);
	}
	return t_mesh;
}
c_Car.prototype.p_Yaw3=function(t_tile){
	if(t_tile.m_Column<0){
		return 90.0;
	}else{
		if(t_tile.m_Column>=3){
			return -90.0;
		}else{
			if(t_tile.m_Row<0){
				return 180.0;
			}else{
				return 0.0;
			}
		}
	}
}
c_Car.m_new=function(t_tile,t_delegate){
	c_Car.m_InitSound();
	this.m_mGameDelegate=t_delegate;
	this.m_mEntity=c_Entity.m_new.call(new c_Entity,null);
	var t_car=c_Model.m_new.call(new c_Model,c_Car.m_LoadUnitMesh("sedanSports.msh.dat"),this.m_mEntity);
	t_car.p_Rotate(0.0,-90.0,0.0);
	t_car.p_Scale(0.8,0.8,0.8);
	this.m_mEntity.p_Position2(t_tile.p_X2(),0.0,t_tile.p_Z2());
	this.m_mEntity.p_Rotate(0.0,this.p_Yaw3(t_tile),0.0);
	this.m_mPath=null;
	this.m_mTarget=null;
	return this;
}
c_Car.m_new2=function(){
	return this;
}
c_Car.prototype.p_Moving=function(){
	return this.m_mPath!=null;
}
c_Car.prototype.p_RotateToTile=function(t_tile){
	var t_myTile=c_Tile.m_FromEntity(this.m_mEntity);
	var t_yaw=this.m_mEntity.p_Yaw();
	if(t_myTile.m_Column<t_tile.m_Column){
		t_yaw=90.0;
	}else{
		if(t_myTile.m_Column>t_tile.m_Column){
			t_yaw=-90.0;
		}else{
			if(t_myTile.m_Row<t_tile.m_Row){
				t_yaw=180.0;
			}else{
				t_yaw=0.0;
			}
		}
	}
	this.m_mEntity.p_Rotate(0.0,t_yaw,0.0);
}
c_Car.prototype.p_CreateAnimatorToNextNode=function(){
	if(!this.m_mPath.p_IsEmpty()){
		var t_nextTile=this.m_mPath.p_RemoveFirst();
		this.p_RotateToTile(t_nextTile);
		c_PositionAnimator.m_new.call(new c_PositionAnimator,this.m_mEntity,t_nextTile.p_X2(),0.0,t_nextTile.p_Z2(),"CarAnimator",0.5,0.0,(this));
		return true;
	}else{
		return false;
	}
}
c_Car.prototype.p_SetPath=function(t_path,t_target){
	this.m_mPath=t_path;
	this.m_mTarget=t_target;
	bb_audio_PlaySound(c_Car.m_sound,3,1);
	this.p_CreateAnimatorToNextNode();
}
c_Car.prototype.p_OnAnimatorEnd=function(t_animator){
	if(!this.p_CreateAnimatorToNextNode()){
		bb_audio_StopChannel(3);
		if(c_Tile.m_FromEntity(this.m_mEntity).p_Equals3(this.m_mTarget)){
			if(this.m_mGameDelegate!=null){
				this.m_mGameDelegate.p_OnWin();
			}
		}else{
			if(this.m_mGameDelegate!=null){
				this.m_mGameDelegate.p_OnLose();
			}
		}
	}
}
function c_FlagPole(){
	Object.call(this);
	this.m_mSprite=null;
}
c_FlagPole.prototype.p_Discard=function(){
	this.m_mSprite.p_Discard();
}
c_FlagPole.m_new=function(t_tile){
	this.m_mSprite=c_Sprite.m_new.call(new c_Sprite,c_Texture.m_Load2("flagpole.png",0,true),2,1,1,null);
	this.m_mSprite.p_Size(0.8,0.8);
	this.m_mSprite.p_AnimFPS2(4);
	this.m_mSprite.p_Position2(t_tile.p_X2(),0.4,t_tile.p_Z2());
	return this;
}
c_FlagPole.m_new2=function(){
	return this;
}
function c_Sprite(){
	c_Entity.call(this);
	this.m_mOrientation=0;
	this.m_mMaterial=null;
	this.m_mHFrames=0;
	this.m_mVFrames=0;
	this.m_mLastFrame=0;
	this.m_mAnimFPS=0;
	this.m_mCurrentFrame=.0;
	this.m_mFirstFrame=0;
}
c_Sprite.prototype=extend_class(c_Entity);
c_Sprite.m_mSurface=null;
c_Sprite.prototype.p_Size=function(t_width,t_height){
	this.p_Scale(t_width,t_height,1.0);
}
c_Sprite.prototype.p_HFrames=function(){
	return this.m_mHFrames;
}
c_Sprite.prototype.p_VFrames=function(){
	return this.m_mVFrames;
}
c_Sprite.prototype.p_Frames=function(){
	return this.p_HFrames()*this.p_VFrames();
}
c_Sprite.prototype.p_Frames2=function(t_horizontal,t_vertical){
	this.m_mHFrames=t_horizontal;
	this.m_mVFrames=t_vertical;
}
c_Sprite.prototype.p_LastFrame=function(){
	return this.m_mLastFrame;
}
c_Sprite.prototype.p_LastFrame2=function(t_frame){
	this.m_mLastFrame=bb_math_Clamp(t_frame,0,this.p_Frames()-1);
}
c_Sprite.prototype.p_Visible2=function(t_visible){
	if(t_visible!=c_Entity.prototype.p_Visible.call(this)){
		c_Entity.prototype.p_Visible2.call(this,t_visible);
		c_World.m__EntitySetVisible((this),t_visible);
	}
}
c_Sprite.prototype.p_Visible=function(){
	return c_Entity.prototype.p_Visible.call(this);
}
c_Sprite.prototype.p_Active=function(){
	return c_Entity.prototype.p_Active.call(this);
}
c_Sprite.prototype.p_Active2=function(t_active){
	if(t_active!=c_Entity.prototype.p_Active.call(this)){
		c_Entity.prototype.p_Active2.call(this,t_active);
		c_World.m__EntityNeedsUpdate((this),t_active);
	}
}
c_Sprite.m_new=function(t_texture,t_hframes,t_vframes,t_orientation,t_parent){
	c_Entity.m_new.call(this,t_parent);
	this.m_mOrientation=t_orientation;
	this.m_mMaterial=c_Material.m_new.call(new c_Material,t_texture,null);
	this.m_mMaterial.p_BlendMode(1);
	this.m_mMaterial.p_Culling(false);
	if(c_Sprite.m_mSurface==null){
		c_Sprite.m_mSurface=c_Surface.m_new.call(new c_Surface,2);
		c_Sprite.m_mSurface.p_AddVertex(-0.5,0.5,0.0,0.0,0.0,-1.0,-1,0.0,0.0);
		c_Sprite.m_mSurface.p_AddVertex(0.5,0.5,0.0,0.0,0.0,-1.0,-1,1.0,0.0);
		c_Sprite.m_mSurface.p_AddVertex(0.5,-0.5,0.0,0.0,0.0,-1.0,-1,1.0,1.0);
		c_Sprite.m_mSurface.p_AddVertex(-0.5,-0.5,0.0,0.0,0.0,-1.0,-1,0.0,1.0);
		c_Sprite.m_mSurface.p_AddTriangle(0,1,2);
		c_Sprite.m_mSurface.p_AddTriangle(0,2,3);
		c_Sprite.m_mSurface.p_Rebuild();
	}
	if(t_texture!=null){
		this.p_Size(((t_texture.p_Width()/t_hframes)|0),((t_texture.p_Height()/t_vframes)|0));
	}else{
		this.p_Size(1.0,1.0);
	}
	this.p_Frames2(t_hframes,t_vframes);
	this.p_LastFrame2(this.p_Frames()-1);
	this.p_Visible2(true);
	this.p_Active2(true);
	return this;
}
c_Sprite.m_new2=function(){
	c_Entity.m_new.call(this,null);
	return this;
}
c_Sprite.prototype.p_AnimFPS=function(){
	return this.m_mAnimFPS;
}
c_Sprite.prototype.p_AnimFPS2=function(t_fps){
	this.m_mAnimFPS=t_fps;
}
c_Sprite.prototype.p_Depth=function(){
	return 0.0;
}
c_Sprite.prototype.p_Material=function(t_index){
	return this.m_mMaterial;
}
c_Sprite.prototype.p_Material2=function(){
	return this.p_Material(0);
}
c_Sprite.prototype.p_BoxMinZ=function(){
	return this.p_BoxMinX();
}
c_Sprite.prototype.p_BoxMaxZ=function(){
	return this.p_BoxMaxX();
}
c_Sprite.prototype.p_FirstFrame=function(){
	return this.m_mFirstFrame;
}
c_Sprite.prototype.p_FirstFrame2=function(t_frame){
	this.m_mFirstFrame=bb_math_Clamp(t_frame,0,this.p_Frames()-1);
}
c_Sprite.prototype.p__Update=function(){
	if(this.m_mAnimFPS!=0){
		this.m_mCurrentFrame+=(this.m_mAnimFPS)*c_World.m_DeltaTime();
		if(((this.m_mCurrentFrame)|0)>this.p_LastFrame()){
			this.m_mCurrentFrame=this.m_mCurrentFrame-(this.p_LastFrame()-this.p_FirstFrame()+1);
		}
		if(((this.m_mCurrentFrame)|0)<this.p_FirstFrame()){
			this.m_mCurrentFrame=this.m_mCurrentFrame+(this.p_LastFrame()-this.p_FirstFrame()+2);
		}
	}
}
c_Sprite.prototype.p_Spin=function(){
	return this.p_Roll();
}
c_Sprite.prototype.p_Spin2=function(t_spin){
	this.p_Rotate(this.p_Pitch(),this.p_Yaw(),t_spin);
}
c_Sprite.prototype.p__Render2=function(t_step_){
	var t_row=((((this.m_mCurrentFrame)|0)/this.p_HFrames())|0);
	var t_col=((this.m_mCurrentFrame)|0) % this.p_HFrames();
	bb_math3d_Mat4Identity(this.m_mMaterial.p_TextureMatrix());
	bb_math3d_Mat4Scale(this.m_mMaterial.p_TextureMatrix(),1.0/(this.p_HFrames()),1.0/(this.p_VFrames()),1.0,this.m_mMaterial.p_TextureMatrix());
	bb_math3d_Mat4Translate(this.m_mMaterial.p_TextureMatrix(),(t_col),(t_row),0.0,this.m_mMaterial.p_TextureMatrix());
	if(this.m_mOrientation!=0){
		var t_cylindrical=false;
		if(this.m_mOrientation==2){
			t_cylindrical=true;
		}
		bb_math3d_Mat4BillboardLH(c_RenderState.m_ViewMatrix,this.p_WorldX(),this.p_WorldY(),this.p_WorldZ(),this.p_Spin(),this.p_Width(),this.p_Height(),t_cylindrical,this.p__Transform());
	}
	c_Entity.prototype.p__Render2.call(this,t_step_);
	if(this.m_mMaterial.p__PrepareForRender(t_step_)){
		c_Sprite.m_mSurface.p__Render();
		return 1;
	}else{
		return 0;
	}
}
var bb_math3d_tempMat4B=[];
function bb_math3d_Mat4MulVec4(t_m,t_x,t_y,t_z,t_w,t_out){
	bb_math3d_Mat4Identity(bb_math3d_tempMat4);
	bb_math3d_tempMat4[12]=t_x;
	bb_math3d_tempMat4[13]=t_y;
	bb_math3d_tempMat4[14]=t_z;
	bb_math3d_tempMat4[15]=t_w;
	bb_math3d_Mat4Mul(t_m,bb_math3d_tempMat4,bb_math3d_tempMat4B);
	t_out[0]=bb_math3d_tempMat4B[12];
	t_out[1]=bb_math3d_tempMat4B[13];
	t_out[2]=bb_math3d_tempMat4B[14];
	if(t_out.length>3){
		t_out[3]=bb_math3d_tempMat4B[15];
	}
}
function c_Node8(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node8.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node8.m_new2=function(){
	return this;
}
function bb_filepath_ExtractExt(t_path){
	var t_i=t_path.lastIndexOf(".");
	if(t_i!=-1 && t_path.indexOf("/",t_i+1)==-1 && t_path.indexOf("\\",t_i+1)==-1){
		return t_path.slice(t_i+1);
	}
	return "";
}
function c_Stack3(){
	Object.call(this);
	this.m_data=[];
	this.m_length=0;
}
c_Stack3.m_new=function(){
	return this;
}
c_Stack3.m_new2=function(t_data){
	this.m_data=t_data.slice(0);
	this.m_length=t_data.length;
	return this;
}
c_Stack3.prototype.p_Push7=function(t_value){
	if(this.m_length==this.m_data.length){
		this.m_data=resize_number_array(this.m_data,this.m_length*2+10);
	}
	this.m_data[this.m_length]=t_value;
	this.m_length+=1;
}
c_Stack3.prototype.p_Push8=function(t_values,t_offset,t_count){
	for(var t_i=0;t_i<t_count;t_i=t_i+1){
		this.p_Push7(t_values[t_offset+t_i]);
	}
}
c_Stack3.prototype.p_Push9=function(t_values,t_offset){
	this.p_Push8(t_values,t_offset,t_values.length-t_offset);
}
c_Stack3.prototype.p_Get2=function(t_index){
	return this.m_data[t_index];
}
function c_FloatStack(){
	c_Stack3.call(this);
}
c_FloatStack.prototype=extend_class(c_Stack3);
c_FloatStack.m_new=function(t_data){
	c_Stack3.m_new2.call(this,t_data);
	return this;
}
c_FloatStack.m_new2=function(){
	c_Stack3.m_new.call(this);
	return this;
}
function c_Map7(){
	Object.call(this);
	this.m_root=null;
}
c_Map7.m_new=function(){
	return this;
}
c_Map7.prototype.p_Compare2=function(t_lhs,t_rhs){
}
c_Map7.prototype.p_RotateLeft6=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map7.prototype.p_RotateRight6=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map7.prototype.p_InsertFixup6=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft6(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight6(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight6(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft6(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map7.prototype.p_Add2=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return false;
			}
		}
	}
	t_node=c_Node9.m_new.call(new c_Node9,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup6(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
c_Map7.prototype.p_FindNode2=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map7.prototype.p_Get=function(t_key){
	var t_node=this.p_FindNode2(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return null;
}
function c_StringMap5(){
	c_Map7.call(this);
}
c_StringMap5.prototype=extend_class(c_Map7);
c_StringMap5.m_new=function(){
	c_Map7.m_new.call(this);
	return this;
}
c_StringMap5.prototype.p_Compare2=function(t_lhs,t_rhs){
	return string_compare(t_lhs,t_rhs);
}
function c_Node9(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node9.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node9.m_new2=function(){
	return this;
}
function c_LoaderB3D(){
	Object.call(this);
	this.m_texList=null;
	this.m_brushList=null;
	this.m_vtxList=null;
	this.m_trsList=null;
	this.m_meshPath="";
	this.m_mesh=null;
	this.m_buffer=null;
	this.m_ds=null;
	this.m_dsLen=0;
	this.m_curChunk="";
	this.m_curChunkLen=0;
	this.m_curChunkStartPos=0;
	this.m_surf=null;
	this.m_vtxO=0;
	this.m_mat=null;
}
c_LoaderB3D.m_new=function(){
	this.m_texList=c_List4.m_new.call(new c_List4);
	this.m_brushList=c_List5.m_new.call(new c_List5);
	this.m_vtxList=c_List6.m_new.call(new c_List6);
	this.m_trsList=c_List7.m_new.call(new c_List7);
	return this;
}
c_LoaderB3D.m_DBPrint=function(t_txt){
}
c_LoaderB3D.prototype.p_ReadChunk=function(){
	this.m_curChunk=this.m_ds.p_ReadString(4,"ascii");
	this.m_curChunkLen=this.m_ds.p_ReadInt();
	this.m_curChunkStartPos=this.m_ds.p_Position();
	c_LoaderB3D.m_DBPrint("\nchunk= "+this.m_curChunk);
	return this.m_curChunk;
}
c_LoaderB3D.prototype.p_ReadChunk_TEXS=function(){
	while(this.m_ds.p_Position()<this.m_curChunkStartPos+this.m_curChunkLen){
		var t_char=0;
		var t_filename="";
		do{
			t_char=this.m_ds.p_ReadByte();
			if(t_char!=0){
				t_filename=t_filename+String.fromCharCode(t_char);
			}
		}while(!(t_char==0));
		var t_nTx=c_B3D_Texture.m_new.call(new c_B3D_Texture);
		t_nTx.m_filename=t_filename;
		t_nTx.m_flags=this.m_ds.p_ReadInt();
		t_nTx.m_blend=this.m_ds.p_ReadInt();
		t_nTx.m_xPos=this.m_ds.p_ReadFloat();
		t_nTx.m_yPos=this.m_ds.p_ReadFloat();
		t_nTx.m_xScale=this.m_ds.p_ReadFloat();
		t_nTx.m_yScale=this.m_ds.p_ReadFloat();
		t_nTx.m_rotation=this.m_ds.p_ReadFloat();
		c_LoaderB3D.m_DBPrint("\n\tTEXS filename= "+t_nTx.m_filename);
		c_LoaderB3D.m_DBPrint("\tTextureFlags= "+String(t_nTx.m_flags));
		c_LoaderB3D.m_DBPrint("\tTextureBlend= "+String(t_nTx.m_blend));
		c_LoaderB3D.m_DBPrint("\tx_pos= "+String(t_nTx.m_xPos));
		c_LoaderB3D.m_DBPrint("\ty_pos= "+String(t_nTx.m_yPos));
		c_LoaderB3D.m_DBPrint("\tx_scale= "+String(t_nTx.m_xScale));
		c_LoaderB3D.m_DBPrint("\ty_scale= "+String(t_nTx.m_yScale));
		c_LoaderB3D.m_DBPrint("\trotation= "+String(t_nTx.m_rotation));
		this.m_texList.p_AddLast4(t_nTx);
	}
}
c_LoaderB3D.prototype.p_ReadChunk_BRUS=function(){
	var t_n_texs=this.m_ds.p_ReadInt();
	c_LoaderB3D.m_DBPrint("\n\tn_texs= "+String(t_n_texs));
	while(this.m_ds.p_Position()<this.m_curChunkStartPos+this.m_curChunkLen){
		var t_char=0;
		var t_name="";
		do{
			t_char=this.m_ds.p_ReadByte();
			if(t_char!=0){
				t_name=t_name+String.fromCharCode(t_char);
			}
		}while(!(t_char==0));
		var t_nBrs=c_B3D_Brush.m_new.call(new c_B3D_Brush);
		t_nBrs.m_name=t_name;
		t_nBrs.m_red=this.m_ds.p_ReadFloat();
		t_nBrs.m_green=this.m_ds.p_ReadFloat();
		t_nBrs.m_blue=this.m_ds.p_ReadFloat();
		t_nBrs.m_alpha=this.m_ds.p_ReadFloat();
		t_nBrs.m_shininess=this.m_ds.p_ReadFloat();
		t_nBrs.m_blend=this.m_ds.p_ReadInt();
		t_nBrs.m_fx=this.m_ds.p_ReadInt();
		for(var t_i=0;t_i<=t_n_texs-1;t_i=t_i+1){
			t_nBrs.m_texID=this.m_ds.p_ReadInt();
		}
		c_LoaderB3D.m_DBPrint("\ntname= "+t_nBrs.m_name);
		c_LoaderB3D.m_DBPrint("\tred= "+String(t_nBrs.m_red));
		c_LoaderB3D.m_DBPrint("\tgreen= "+String(t_nBrs.m_green));
		c_LoaderB3D.m_DBPrint("\tblue= "+String(t_nBrs.m_blue));
		c_LoaderB3D.m_DBPrint("\talpha= "+String(t_nBrs.m_alpha));
		c_LoaderB3D.m_DBPrint("\tshininess= "+String(t_nBrs.m_shininess));
		c_LoaderB3D.m_DBPrint("\tblend= "+String(t_nBrs.m_blend));
		c_LoaderB3D.m_DBPrint("\tfx= "+String(t_nBrs.m_fx));
		c_LoaderB3D.m_DBPrint("\ttexture_id= "+String(t_nBrs.m_texID));
		this.m_brushList.p_AddLast5(t_nBrs);
	}
}
c_LoaderB3D.prototype.p_ReadChunk_NODE=function(){
	var t_char=0;
	var t_name="";
	do{
		t_char=this.m_ds.p_ReadByte();
		if(t_char!=0){
			t_name=t_name+String.fromCharCode(t_char);
		}
	}while(!(t_char==0));
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
	this.m_ds.p_ReadFloat();
}
c_LoaderB3D.prototype.p_ReadChunk_MESH=function(){
	c_LoaderB3D.m_DBPrint("\n\tMESH brush_id= "+String(this.m_ds.p_ReadInt()));
}
c_LoaderB3D.prototype.p_ReadChunk_VRTS=function(){
	var t_vrtCnt=0;
	var t_flags=this.m_ds.p_ReadInt();
	c_LoaderB3D.m_DBPrint("\n\tflags= "+String(t_flags));
	c_LoaderB3D.m_DBPrint("\ttex_coord_sets= "+String(this.m_ds.p_ReadInt()));
	c_LoaderB3D.m_DBPrint("\ttex_coord_set_size= "+String(this.m_ds.p_ReadInt()));
	var t_x=0.0;
	var t_y=0.0;
	var t_z=0.0;
	var t_nx=0.0;
	var t_ny=0.0;
	var t_nz=0.0;
	var t_r=1.0;
	var t_g=1.0;
	var t_b=1.0;
	var t_a=1.0;
	var t_u=0.0;
	var t_v=0.0;
	while(this.m_ds.p_Position()<this.m_curChunkStartPos+this.m_curChunkLen){
		var t_nVtx=c_B3D_Vertex.m_new.call(new c_B3D_Vertex);
		t_nVtx.m_x=this.m_ds.p_ReadFloat();
		t_nVtx.m_y=this.m_ds.p_ReadFloat();
		t_nVtx.m_z=this.m_ds.p_ReadFloat();
		if((t_flags&1)!=0){
			t_nVtx.m_nx=this.m_ds.p_ReadFloat();
			t_nVtx.m_ny=this.m_ds.p_ReadFloat();
			t_nVtx.m_nz=this.m_ds.p_ReadFloat();
		}
		if((t_flags&2)!=0){
			t_nVtx.m_red=this.m_ds.p_ReadFloat();
			t_nVtx.m_green=this.m_ds.p_ReadFloat();
			t_nVtx.m_blue=this.m_ds.p_ReadFloat();
			t_nVtx.m_alpha=this.m_ds.p_ReadFloat();
		}
		t_nVtx.m_u=this.m_ds.p_ReadFloat();
		t_nVtx.m_v=this.m_ds.p_ReadFloat();
		this.m_vtxList.p_AddLast6(t_nVtx);
		t_vrtCnt+=1;
	}
	c_LoaderB3D.m_DBPrint("\tvertex count= "+String(t_vrtCnt));
}
c_LoaderB3D.prototype.p_CreateMaterialB3D=function(t_filename,t_texFilter){
	var t_matr=null;
	t_matr=c_Material.m_new.call(new c_Material,null,null);
	t_matr.p_Culling(true);
	t_matr.p_DepthWrite(true);
	t_matr.p_Lighting(true);
	t_matr.p_CastShadows(true);
	t_matr.p_ReceiveShadows(true);
	t_matr.p_Fog2(true);
	t_matr.p_BlendMode(0);
	t_matr.p_Shininess(0.0);
	t_matr.p_RefractionCoef(-1.0);
	t_matr.p_SpecularPower(64.0);
	t_matr.p_CubeOpacity(0.5);
	t_matr.p_Color(-1);
	t_matr.p_ColorTexture(c_Texture.m_Load2(t_filename,t_texFilter,true));
	return t_matr;
}
c_LoaderB3D.prototype.p_ReadChunk_TRIS=function(){
	var t_brsID=this.m_ds.p_ReadInt();
	c_LoaderB3D.m_DBPrint("\n\tbrush_id= "+String(t_brsID));
	var t_trsCnt=0;
	var t_v0=0;
	var t_v1=0;
	var t_v2=0;
	var t_vtL=99999999;
	var t_vtH=0;
	this.m_surf=c_Surface.m_new.call(new c_Surface,2);
	this.m_trsList.p_Clear();
	while(this.m_ds.p_Position()<this.m_curChunkStartPos+this.m_curChunkLen){
		var t_nTrs=c_B3D_Tris.m_new.call(new c_B3D_Tris);
		t_v0=this.m_ds.p_ReadInt();
		t_v1=this.m_ds.p_ReadInt();
		t_v2=this.m_ds.p_ReadInt();
		t_vtL=bb_math_Min(t_vtL,t_v0);
		t_vtL=bb_math_Min(t_vtL,t_v1);
		t_vtL=bb_math_Min(t_vtL,t_v2);
		t_vtH=bb_math_Max(t_vtH,t_v0);
		t_vtH=bb_math_Max(t_vtH,t_v1);
		t_vtH=bb_math_Max(t_vtH,t_v2);
		t_nTrs.m_v0=t_v0-this.m_vtxO;
		t_nTrs.m_v1=t_v1-this.m_vtxO;
		t_nTrs.m_v2=t_v2-this.m_vtxO;
		t_trsCnt+=1;
		this.m_trsList.p_AddLast7(t_nTrs);
	}
	var t_vtxArray=this.m_vtxList.p_ToArray();
	for(var t_i=t_vtL;t_i<=t_vtH;t_i=t_i+1){
		var t_nVtx=t_vtxArray[t_i];
		var t_col=c_Color2.m_RGB(((t_nVtx.m_red*255.0)|0),((t_nVtx.m_green*255.0)|0),((t_nVtx.m_blue*255.0)|0),((t_nVtx.m_alpha*255.0)|0));
		this.m_surf.p_AddVertex(t_nVtx.m_x,t_nVtx.m_y,t_nVtx.m_z,t_nVtx.m_nx,t_nVtx.m_ny,t_nVtx.m_nz,t_col,t_nVtx.m_u,t_nVtx.m_v);
		this.m_surf.p_VertexTangent(this.m_surf.p_NumVertices()-1,1.0,0.0,0.0);
	}
	var t_=this.m_trsList.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_nTrs2=t_.p_NextObject();
		this.m_surf.p_AddTriangle(t_nTrs2.m_v0,t_nTrs2.m_v1,t_nTrs2.m_v2);
	}
	this.m_vtxO+=t_vtH;
	var t_brsh=this.m_brushList.p_ToArray()[t_brsID];
	var t_tex=this.m_texList.p_ToArray()[t_brsh.m_texID];
	this.m_mat=this.p_CreateMaterialB3D(this.m_meshPath+bb_filepath_StripDir(t_tex.m_filename),0);
	this.m_mat.p_Color(c_Color2.m_RGB(((t_brsh.m_red*255.0)|0),((t_brsh.m_green*255.0)|0),((t_brsh.m_blue*255.0)|0),((t_brsh.m_alpha*255.0)|0)));
	this.m_mesh.p_AddSurface(this.m_surf,this.m_mat);
}
c_LoaderB3D.prototype.p_ReadChunk_ANIM=function(){
	this.m_ds.p_ReadInt();
	this.m_ds.p_ReadInt();
	this.m_ds.p_ReadInt();
}
c_LoaderB3D.prototype.p_ReadChunk_BONE=function(){
	var t_bvi=0;
	while(this.m_ds.p_Position()<this.m_curChunkStartPos+this.m_curChunkLen){
		this.m_ds.p_ReadInt();
		this.m_ds.p_ReadFloat();
		t_bvi+=1;
	}
}
c_LoaderB3D.prototype.p_ReadChunk_KEYS=function(){
	var t_flags=this.m_ds.p_ReadInt();
	var t_frmCnt=0;
	while(this.m_ds.p_Position()<this.m_curChunkStartPos+this.m_curChunkLen){
		this.m_ds.p_ReadInt();
		t_frmCnt+=1;
		if((t_flags&1)!=0){
			this.m_ds.p_ReadFloat();
			this.m_ds.p_ReadFloat();
			this.m_ds.p_ReadFloat();
		}
		if((t_flags&2)!=0){
			this.m_ds.p_ReadFloat();
			this.m_ds.p_ReadFloat();
			this.m_ds.p_ReadFloat();
		}
		if((t_flags&4)!=0){
			this.m_ds.p_ReadFloat();
			this.m_ds.p_ReadFloat();
			this.m_ds.p_ReadFloat();
			this.m_ds.p_ReadFloat();
		}
	}
}
c_LoaderB3D.prototype.p_ReadChunk_DEFAULT=function(){
	while(this.m_ds.p_Position()<this.m_curChunkStartPos+this.m_curChunkLen){
		this.m_ds.p_ReadByte();
	}
}
c_LoaderB3D.prototype.p_LoadData=function(t_fixedfilename,t_filename){
	this.m_meshPath=bb_filepath_ExtractDir(t_filename);
	if(this.m_meshPath!=""){
		this.m_meshPath=this.m_meshPath+"/";
	}
	this.m_mesh=c_Mesh.m_new.call(new c_Mesh);
	this.m_buffer=c_DataBuffer.m_Load(t_fixedfilename);
	if(this.m_buffer!=null){
		this.m_ds=c_DataStream.m_new.call(new c_DataStream,this.m_buffer,0);
		this.m_dsLen=this.m_ds.p_Length();
		c_LoaderB3D.m_DBPrint("stream length= "+String(this.m_dsLen));
		this.p_ReadChunk();
		c_LoaderB3D.m_DBPrint("version= "+String(this.m_ds.p_ReadInt()));
		while(this.m_ds.p_Position()<this.m_dsLen){
			var t_1=this.p_ReadChunk();
			if(t_1=="TEXS"){
				this.p_ReadChunk_TEXS();
			}else{
				if(t_1=="BRUS"){
					this.p_ReadChunk_BRUS();
				}else{
					if(t_1=="NODE"){
						this.p_ReadChunk_NODE();
					}else{
						if(t_1=="MESH"){
							this.p_ReadChunk_MESH();
						}else{
							if(t_1=="VRTS"){
								this.p_ReadChunk_VRTS();
							}else{
								if(t_1=="TRIS"){
									this.p_ReadChunk_TRIS();
								}else{
									if(t_1=="ANIM"){
										this.p_ReadChunk_ANIM();
									}else{
										if(t_1=="BONE"){
											this.p_ReadChunk_BONE();
										}else{
											if(t_1=="KEYS"){
												this.p_ReadChunk_KEYS();
											}else{
												this.p_ReadChunk_DEFAULT();
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	this.m_ds.p_Close();
	c_LoaderB3D.m_DBPrint("NumSurfaces = "+String(this.m_mesh.p_NumSurfaces()));
	this.m_mesh.p_Rebuild();
	return this.m_mesh;
}
function c_B3D_Texture(){
	Object.call(this);
	this.m_filename="";
	this.m_flags=0;
	this.m_blend=0;
	this.m_xPos=0.0;
	this.m_yPos=0.0;
	this.m_xScale=1.0;
	this.m_yScale=1.0;
	this.m_rotation=0.0;
}
c_B3D_Texture.m_new=function(){
	return this;
}
function c_List4(){
	Object.call(this);
	this.m__head=(c_HeadNode4.m_new.call(new c_HeadNode4));
}
c_List4.m_new=function(){
	return this;
}
c_List4.prototype.p_AddLast4=function(t_data){
	return c_Node10.m_new.call(new c_Node10,this.m__head,this.m__head.m__pred,t_data);
}
c_List4.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast4(t_t);
	}
	return this;
}
c_List4.prototype.p_Count=function(){
	var t_n=0;
	var t_node=this.m__head.m__succ;
	while(t_node!=this.m__head){
		t_node=t_node.m__succ;
		t_n+=1;
	}
	return t_n;
}
c_List4.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator6.m_new.call(new c_Enumerator6,this);
}
c_List4.prototype.p_ToArray=function(){
	var t_arr=new_object_array(this.p_Count());
	var t_i=0;
	var t_=this.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_t=t_.p_NextObject();
		t_arr[t_i]=t_t;
		t_i+=1;
	}
	return t_arr;
}
function c_Node10(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node10.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node10.m_new2=function(){
	return this;
}
function c_HeadNode4(){
	c_Node10.call(this);
}
c_HeadNode4.prototype=extend_class(c_Node10);
c_HeadNode4.m_new=function(){
	c_Node10.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_B3D_Brush(){
	Object.call(this);
	this.m_name="";
	this.m_red=1.0;
	this.m_green=1.0;
	this.m_blue=1.0;
	this.m_alpha=1.0;
	this.m_shininess=1.0;
	this.m_blend=0;
	this.m_fx=0;
	this.m_texID=0;
}
c_B3D_Brush.m_new=function(){
	return this;
}
function c_List5(){
	Object.call(this);
	this.m__head=(c_HeadNode5.m_new.call(new c_HeadNode5));
}
c_List5.m_new=function(){
	return this;
}
c_List5.prototype.p_AddLast5=function(t_data){
	return c_Node11.m_new.call(new c_Node11,this.m__head,this.m__head.m__pred,t_data);
}
c_List5.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast5(t_t);
	}
	return this;
}
c_List5.prototype.p_Count=function(){
	var t_n=0;
	var t_node=this.m__head.m__succ;
	while(t_node!=this.m__head){
		t_node=t_node.m__succ;
		t_n+=1;
	}
	return t_n;
}
c_List5.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator5.m_new.call(new c_Enumerator5,this);
}
c_List5.prototype.p_ToArray=function(){
	var t_arr=new_object_array(this.p_Count());
	var t_i=0;
	var t_=this.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_t=t_.p_NextObject();
		t_arr[t_i]=t_t;
		t_i+=1;
	}
	return t_arr;
}
function c_Node11(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node11.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node11.m_new2=function(){
	return this;
}
function c_HeadNode5(){
	c_Node11.call(this);
}
c_HeadNode5.prototype=extend_class(c_Node11);
c_HeadNode5.m_new=function(){
	c_Node11.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_B3D_Vertex(){
	Object.call(this);
	this.m_x=0.0;
	this.m_y=0.0;
	this.m_z=0.0;
	this.m_nx=0.0;
	this.m_ny=0.0;
	this.m_nz=0.0;
	this.m_red=1.0;
	this.m_green=1.0;
	this.m_blue=1.0;
	this.m_alpha=1.0;
	this.m_u=0.0;
	this.m_v=0.0;
}
c_B3D_Vertex.m_new=function(){
	return this;
}
function c_List6(){
	Object.call(this);
	this.m__head=(c_HeadNode6.m_new.call(new c_HeadNode6));
}
c_List6.m_new=function(){
	return this;
}
c_List6.prototype.p_AddLast6=function(t_data){
	return c_Node12.m_new.call(new c_Node12,this.m__head,this.m__head.m__pred,t_data);
}
c_List6.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast6(t_t);
	}
	return this;
}
c_List6.prototype.p_Count=function(){
	var t_n=0;
	var t_node=this.m__head.m__succ;
	while(t_node!=this.m__head){
		t_node=t_node.m__succ;
		t_n+=1;
	}
	return t_n;
}
c_List6.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator3.m_new.call(new c_Enumerator3,this);
}
c_List6.prototype.p_ToArray=function(){
	var t_arr=new_object_array(this.p_Count());
	var t_i=0;
	var t_=this.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_t=t_.p_NextObject();
		t_arr[t_i]=t_t;
		t_i+=1;
	}
	return t_arr;
}
function c_Node12(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node12.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node12.m_new2=function(){
	return this;
}
function c_HeadNode6(){
	c_Node12.call(this);
}
c_HeadNode6.prototype=extend_class(c_Node12);
c_HeadNode6.m_new=function(){
	c_Node12.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_B3D_Tris(){
	Object.call(this);
	this.m_v0=0;
	this.m_v1=0;
	this.m_v2=0;
}
c_B3D_Tris.m_new=function(){
	return this;
}
function c_List7(){
	Object.call(this);
	this.m__head=(c_HeadNode7.m_new.call(new c_HeadNode7));
}
c_List7.m_new=function(){
	return this;
}
c_List7.prototype.p_AddLast7=function(t_data){
	return c_Node13.m_new.call(new c_Node13,this.m__head,this.m__head.m__pred,t_data);
}
c_List7.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast7(t_t);
	}
	return this;
}
c_List7.prototype.p_Clear=function(){
	this.m__head.m__succ=this.m__head;
	this.m__head.m__pred=this.m__head;
	return 0;
}
c_List7.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator4.m_new.call(new c_Enumerator4,this);
}
function c_Node13(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node13.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node13.m_new2=function(){
	return this;
}
function c_HeadNode7(){
	c_Node13.call(this);
}
c_HeadNode7.prototype=extend_class(c_Node13);
c_HeadNode7.m_new=function(){
	c_Node13.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_Enumerator3(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator3.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator3.m_new2=function(){
	return this;
}
c_Enumerator3.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator3.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function c_Enumerator4(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator4.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator4.m_new2=function(){
	return this;
}
c_Enumerator4.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator4.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function c_Enumerator5(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator5.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator5.m_new2=function(){
	return this;
}
c_Enumerator5.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator5.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function c_Enumerator6(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator6.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator6.m_new2=function(){
	return this;
}
c_Enumerator6.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator6.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function bb_filepath_StripDir(t_path){
	var t_i=t_path.lastIndexOf("/");
	if(t_i==-1){
		t_i=t_path.lastIndexOf("\\");
	}
	if(t_i!=-1){
		return t_path.slice(t_i+1);
	}
	return t_path;
}
function c_List8(){
	Object.call(this);
	this.m__head=(c_HeadNode11.m_new.call(new c_HeadNode11));
}
c_List8.m_new=function(){
	return this;
}
c_List8.prototype.p_AddLast8=function(t_data){
	return c_Node18.m_new.call(new c_Node18,this.m__head,this.m__head.m__pred,t_data);
}
c_List8.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast8(t_t);
	}
	return this;
}
c_List8.prototype.p_IsEmpty=function(){
	return this.m__head.m__succ==this.m__head;
}
c_List8.prototype.p_RemoveFirst=function(){
	var t_data=this.m__head.m__succ.m__data;
	this.m__head.m__succ.p_Remove();
	return t_data;
}
c_List8.prototype.p_Equals4=function(t_lhs,t_rhs){
	return t_lhs==t_rhs;
}
c_List8.prototype.p_Find5=function(t_value,t_start){
	while(t_start!=this.m__head){
		if(this.p_Equals4(t_value,t_start.m__data)){
			return t_start;
		}
		t_start=t_start.m__succ;
	}
	return null;
}
c_List8.prototype.p_Find6=function(t_value){
	return this.p_Find5(t_value,this.m__head.m__succ);
}
c_List8.prototype.p_RemoveFirst4=function(t_value){
	var t_node=this.p_Find6(t_value);
	if((t_node)!=null){
		t_node.p_Remove();
	}
}
function c_Animator(){
	Object.call(this);
	this.m_mName="";
	this.m_mDelay=.0;
	this.m_mRemainingTime=.0;
	this.m_mTotalTime=.0;
	this.m_mDelegate=null;
}
c_Animator.m_animators=null;
c_Animator.m_new=function(t_name,t_time,t_delay,t_delegate){
	this.m_mName=t_name;
	this.m_mDelay=t_delay;
	this.m_mRemainingTime=t_time;
	this.m_mTotalTime=t_time;
	this.m_mDelegate=t_delegate;
	c_Animator.m_animators.p_AddLast9(this);
	return this;
}
c_Animator.m_new2=function(){
	return this;
}
c_Animator.prototype.p_Update2=function(){
	if(this.m_mDelay>0.0){
		this.m_mDelay-=c_World.m_DeltaTime();
		if(this.m_mDelay<0.0){
			this.m_mRemainingTime+=this.m_mDelay;
		}
	}else{
		this.m_mRemainingTime-=c_World.m_DeltaTime();
	}
	return true;
}
c_Animator.m_UpdateAll=function(){
	var t_finished=c_List9.m_new.call(new c_List9);
	var t_=c_Animator.m_animators.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_animator=t_.p_NextObject();
		if(t_animator.p_Update2()){
			t_finished.p_AddLast9(t_animator);
		}
	}
	var t_2=t_finished.p_ObjectEnumerator();
	while(t_2.p_HasNext()){
		var t_animator2=t_2.p_NextObject();
		if(t_animator2.m_mDelegate!=null){
			t_animator2.m_mDelegate.p_OnAnimatorEnd(t_animator2);
		}
		c_Animator.m_animators.p_RemoveFirst5(t_animator2);
	}
	t_finished.p_Clear();
}
c_Animator.prototype.p_Name=function(){
	return this.m_mName;
}
c_Animator.prototype.p_Alpha=function(){
	return (this.m_mTotalTime-this.m_mRemainingTime)/this.m_mTotalTime;
}
function c_WidgetPositionAnimator(){
	c_Animator.call(this);
	this.m_mWidget=null;
	this.m_mStartX=0;
	this.m_mStartY=0;
	this.m_mEndX=0;
	this.m_mEndY=0;
}
c_WidgetPositionAnimator.prototype=extend_class(c_Animator);
c_WidgetPositionAnimator.m_new=function(t_widget,t_toX,t_toY,t_name,t_time,t_delay,t_delegate){
	c_Animator.m_new.call(this,t_name,t_time,t_delay,t_delegate);
	this.m_mWidget=t_widget;
	this.m_mStartX=t_widget.p_X2();
	this.m_mStartY=t_widget.p_Y2();
	this.m_mEndX=t_toX;
	this.m_mEndY=t_toY;
	return this;
}
c_WidgetPositionAnimator.m_new2=function(){
	c_Animator.m_new2.call(this);
	return this;
}
c_WidgetPositionAnimator.m_mOut=[];
c_WidgetPositionAnimator.prototype.p_Update2=function(){
	c_Animator.prototype.p_Update2.call(this);
	var t_t=this.p_Alpha();
	bb_math3d_Vec3Mix((this.m_mStartX),(this.m_mStartY),0.0,(this.m_mEndX),(this.m_mEndY),0.0,bb_math_Min2(t_t,1.0),c_WidgetPositionAnimator.m_mOut);
	this.m_mWidget.p_X((c_WidgetPositionAnimator.m_mOut[0])|0);
	this.m_mWidget.p_Y((c_WidgetPositionAnimator.m_mOut[1])|0);
	return t_t>=1.0;
}
function c_List9(){
	Object.call(this);
	this.m__head=(c_HeadNode8.m_new.call(new c_HeadNode8));
}
c_List9.m_new=function(){
	return this;
}
c_List9.prototype.p_AddLast9=function(t_data){
	return c_Node14.m_new.call(new c_Node14,this.m__head,this.m__head.m__pred,t_data);
}
c_List9.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast9(t_t);
	}
	return this;
}
c_List9.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator7.m_new.call(new c_Enumerator7,this);
}
c_List9.prototype.p_RemoveFirst=function(){
	var t_data=this.m__head.m__succ.m__data;
	this.m__head.m__succ.p_Remove();
	return t_data;
}
c_List9.prototype.p_Equals5=function(t_lhs,t_rhs){
	return t_lhs==t_rhs;
}
c_List9.prototype.p_Find7=function(t_value,t_start){
	while(t_start!=this.m__head){
		if(this.p_Equals5(t_value,t_start.m__data)){
			return t_start;
		}
		t_start=t_start.m__succ;
	}
	return null;
}
c_List9.prototype.p_Find8=function(t_value){
	return this.p_Find7(t_value,this.m__head.m__succ);
}
c_List9.prototype.p_RemoveFirst5=function(t_value){
	var t_node=this.p_Find8(t_value);
	if((t_node)!=null){
		t_node.p_Remove();
	}
}
c_List9.prototype.p_Clear=function(){
	this.m__head.m__succ=this.m__head;
	this.m__head.m__pred=this.m__head;
	return 0;
}
function c_Node14(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node14.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node14.m_new2=function(){
	return this;
}
c_Node14.prototype.p_Remove=function(){
	this.m__succ.m__pred=this.m__pred;
	this.m__pred.m__succ=this.m__succ;
	return 0;
}
function c_HeadNode8(){
	c_Node14.call(this);
}
c_HeadNode8.prototype=extend_class(c_Node14);
c_HeadNode8.m_new=function(){
	c_Node14.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function bb_input_MouseX(){
	return bb_input_device.p_MouseX();
}
function bb_input_MouseY(){
	return bb_input_device.p_MouseY();
}
function bb_input_MouseHit(t_button){
	return bb_input_device.p_KeyHit(1+t_button);
}
function bb_math3d_Mat4FrustumLH(t_left,t_right,t_bottom,t_top,t_near,t_far,t_out){
	bb_math3d_Mat4Identity(t_out);
	t_out[0]=2.0*t_near/(t_right-t_left);
	t_out[5]=2.0*t_near/(t_top-t_bottom);
	t_out[8]=(t_left+t_right)/(t_left-t_right);
	t_out[9]=(t_bottom+t_top)/(t_bottom-t_top);
	t_out[10]=(t_far+t_near)/(t_far-t_near);
	t_out[11]=1.0;
	t_out[14]=2.0*t_near*t_far/(t_near-t_far);
	t_out[15]=0.0;
}
function bb_math3d_Mat4PerspectiveLH(t_fovy,t_aspect,t_near,t_far,t_out){
	var t_height=t_near*Math.tan((t_fovy*0.5)*D2R);
	var t_width=t_height*t_aspect;
	bb_math3d_Mat4FrustumLH(-t_width,t_width,-t_height,t_height,t_near,t_far,t_out);
}
function bb_math3d_Mat4View(t_x,t_y,t_z,t_rw,t_rx,t_ry,t_rz,t_out){
	bb_math3d_QuatAxis(t_rw,t_rx,t_ry,t_rz,t_out);
	var t_ax=t_out[0];
	var t_ay=t_out[1];
	var t_az=t_out[2];
	bb_math3d_Mat4Identity(t_out);
	bb_math3d_Mat4Rotate(t_out,-bb_math3d_QuatDegrees(t_rw,t_rx,t_ry,t_rz),t_ax,t_ay,t_az,t_out);
	bb_math3d_Mat4Translate(t_out,-t_x,-t_y,-t_z,t_out);
}
function bb_math3d_Mat4ViewEuler(t_x,t_y,t_z,t_rx,t_ry,t_rz,t_out){
	bb_math3d_QuatSetEuler(t_rx,t_ry,t_rz,t_out);
	bb_math3d_Mat4View(t_x,t_y,t_z,t_out[0],t_out[1],t_out[2],t_out[3],t_out);
}
function bb_math3d_Vec3TransformNormal(t_result,t_v,t_m){
	var t_x=t_v[0];
	var t_y=t_v[1];
	var t_z=t_v[2];
	t_result[0]=t_x*t_m[0]+t_y*t_m[4]+t_z*t_m[8];
	t_result[1]=t_x*t_m[1]+t_y*t_m[5]+t_z*t_m[9];
	t_result[2]=t_x*t_m[2]+t_y*t_m[6]+t_z*t_m[10];
}
function c_TraceInfo(){
	Object.call(this);
	this.m_mDistance=.0;
	this.m_mSurface=null;
	this.m_mTriangle=0;
	this.m_mPoint=new_number_array(3);
	this.m_mNormal=new_number_array(3);
}
c_TraceInfo.m_new=function(){
	return this;
}
function bb_audio_PlaySound(t_sound,t_channel,t_flags){
	if(((t_sound)!=null) && ((t_sound.m_sample)!=null)){
		bb_audio_device.PlaySample(t_sound.m_sample,t_channel,t_flags);
	}
	return 0;
}
function bb_filepath_StripExt(t_path){
	var t_i=t_path.lastIndexOf(".");
	if(t_i!=-1 && t_path.indexOf("/",t_i+1)==-1 && t_path.indexOf("\\",t_i+1)==-1){
		return t_path.slice(0,t_i);
	}
	return t_path;
}
function c_Map8(){
	Object.call(this);
	this.m_root=null;
}
c_Map8.m_new=function(){
	return this;
}
c_Map8.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map8.prototype.p_RotateLeft7=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map8.prototype.p_RotateRight7=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map8.prototype.p_InsertFixup7=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft7(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight7(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight7(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft7(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map8.prototype.p_Add3=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return false;
			}
		}
	}
	t_node=c_Node15.m_new.call(new c_Node15,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup7(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
c_Map8.prototype.p_FindNode=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map8.prototype.p_Contains=function(t_key){
	return this.p_FindNode(t_key)!=null;
}
c_Map8.prototype.p_Get2=function(t_key){
	var t_node=this.p_FindNode(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return [];
}
function c_IntMap3(){
	c_Map8.call(this);
}
c_IntMap3.prototype=extend_class(c_Map8);
c_IntMap3.m_new=function(){
	c_Map8.m_new.call(this);
	return this;
}
c_IntMap3.prototype.p_Compare=function(t_lhs,t_rhs){
	return t_lhs-t_rhs;
}
function c_Node15(){
	Object.call(this);
	this.m_key=0;
	this.m_right=null;
	this.m_left=null;
	this.m_value=[];
	this.m_color=0;
	this.m_parent=null;
}
c_Node15.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node15.m_new2=function(){
	return this;
}
function c_Enumerator7(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator7.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator7.m_new2=function(){
	return this;
}
c_Enumerator7.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator7.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function c_Enumerator8(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator8.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator8.m_new2=function(){
	return this;
}
c_Enumerator8.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator8.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function c_EmittedSound(){
	Object.call(this);
	this.m_Channel=0;
	this.m_Emitter=null;
	this.m_Radius=.0;
}
c_EmittedSound.prototype.p__Update=function(){
	var t_state=bb_audio_ChannelState(this.m_Channel);
	if(t_state==1){
		var t_angle=(Math.atan2(this.m_Emitter.p_WorldX()-c_Listener.m_Instance().p_WorldX(),this.m_Emitter.p_WorldZ()-c_Listener.m_Instance().p_WorldZ())*R2D)-c_Listener.m_Instance().p_Yaw();
		var t_pan=Math.sin((t_angle)*D2R);
		var t_vol=1.0-bb_math_Clamp2(this.m_Emitter.p_Distance(c_Listener.m_Instance())/this.m_Radius,0.0,1.0);
		bb_audio_SetChannelPan(this.m_Channel,t_pan);
		bb_audio_SetChannelVolume(this.m_Channel,t_vol);
	}else{
		if(t_state==0 || t_state==-1){
			return false;
		}
	}
	return true;
}
function c_List10(){
	Object.call(this);
	this.m__head=(c_HeadNode9.m_new.call(new c_HeadNode9));
}
c_List10.m_new=function(){
	return this;
}
c_List10.prototype.p_AddLast10=function(t_data){
	return c_Node16.m_new.call(new c_Node16,this.m__head,this.m__head.m__pred,t_data);
}
c_List10.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast10(t_t);
	}
	return this;
}
c_List10.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator9.m_new.call(new c_Enumerator9,this);
}
c_List10.prototype.p_RemoveFirst=function(){
	var t_data=this.m__head.m__succ.m__data;
	this.m__head.m__succ.p_Remove();
	return t_data;
}
c_List10.prototype.p_Equals6=function(t_lhs,t_rhs){
	return t_lhs==t_rhs;
}
c_List10.prototype.p_Find9=function(t_value,t_start){
	while(t_start!=this.m__head){
		if(this.p_Equals6(t_value,t_start.m__data)){
			return t_start;
		}
		t_start=t_start.m__succ;
	}
	return null;
}
c_List10.prototype.p_Find10=function(t_value){
	return this.p_Find9(t_value,this.m__head.m__succ);
}
c_List10.prototype.p_RemoveFirst6=function(t_value){
	var t_node=this.p_Find10(t_value);
	if((t_node)!=null){
		t_node.p_Remove();
	}
}
function c_Node16(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node16.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node16.m_new2=function(){
	return this;
}
c_Node16.prototype.p_Remove=function(){
	this.m__succ.m__pred=this.m__pred;
	this.m__pred.m__succ=this.m__succ;
	return 0;
}
function c_HeadNode9(){
	c_Node16.call(this);
}
c_HeadNode9.prototype=extend_class(c_Node16);
c_HeadNode9.m_new=function(){
	c_Node16.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_Enumerator9(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator9.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator9.m_new2=function(){
	return this;
}
c_Enumerator9.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator9.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function bb_audio_ChannelState(t_channel){
	return bb_audio_device.ChannelState(t_channel);
}
function bb_math3d_Vec3Length(t_x,t_y,t_z){
	return Math.sqrt(bb_math3d_Vec3SqLength(t_x,t_y,t_z));
}
function bb_audio_SetChannelPan(t_channel,t_pan){
	bb_audio_device.SetPan(t_channel,t_pan);
	return 0;
}
function bb_audio_SetChannelVolume(t_channel,t_volume){
	bb_audio_device.SetVolume(t_channel,t_volume);
	return 0;
}
function c_Light(){
	c_Entity.call(this);
	this.m_mColor=0;
}
c_Light.prototype=extend_class(c_Entity);
c_Light.prototype.p__PrepareForRender=function(t_index){
	bb_math3d_Mat4MulVec4(c_RenderState.m_ViewMatrix,this.p_WorldX(),this.p_WorldY(),this.p_WorldZ(),1.0,c_RenderState.m_LightPos[t_index]);
	c_RenderState.m_LightColor[t_index]=this.m_mColor;
	c_RenderState.m_LightRadius[t_index]=this.p_Radius();
}
c_Light.prototype.p_Visible=function(){
	return c_Entity.prototype.p_Visible.call(this);
}
c_Light.prototype.p_Visible2=function(t_visible){
	if(t_visible!=c_Entity.prototype.p_Visible.call(this)){
		c_Entity.prototype.p_Visible2.call(this,t_visible);
		if(t_visible){
			c_World.m__AddLight(this);
		}else{
			c_World.m__FreeLight(this);
		}
	}
}
c_Light.prototype.p_Width=function(){
	return 0.0;
}
c_Light.prototype.p_Height=function(){
	return 0.0;
}
c_Light.prototype.p_Depth=function(){
	return 0.0;
}
function c_List11(){
	Object.call(this);
	this.m__head=(c_HeadNode10.m_new.call(new c_HeadNode10));
}
c_List11.m_new=function(){
	return this;
}
c_List11.prototype.p_AddLast11=function(t_data){
	return c_Node17.m_new.call(new c_Node17,this.m__head,this.m__head.m__pred,t_data);
}
c_List11.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast11(t_t);
	}
	return this;
}
c_List11.prototype.p_Count=function(){
	var t_n=0;
	var t_node=this.m__head.m__succ;
	while(t_node!=this.m__head){
		t_node=t_node.m__succ;
		t_n+=1;
	}
	return t_n;
}
c_List11.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator11.m_new.call(new c_Enumerator11,this);
}
c_List11.prototype.p_RemoveFirst=function(){
	var t_data=this.m__head.m__succ.m__data;
	this.m__head.m__succ.p_Remove();
	return t_data;
}
c_List11.prototype.p_Equals7=function(t_lhs,t_rhs){
	return t_lhs==t_rhs;
}
c_List11.prototype.p_Find11=function(t_value,t_start){
	while(t_start!=this.m__head){
		if(this.p_Equals7(t_value,t_start.m__data)){
			return t_start;
		}
		t_start=t_start.m__succ;
	}
	return null;
}
c_List11.prototype.p_Find12=function(t_value){
	return this.p_Find11(t_value,this.m__head.m__succ);
}
c_List11.prototype.p_RemoveFirst7=function(t_value){
	var t_node=this.p_Find12(t_value);
	if((t_node)!=null){
		t_node.p_Remove();
	}
}
function c_Node17(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node17.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node17.m_new2=function(){
	return this;
}
c_Node17.prototype.p_Remove=function(){
	this.m__succ.m__pred=this.m__pred;
	this.m__pred.m__succ=this.m__succ;
	return 0;
}
function c_HeadNode10(){
	c_Node17.call(this);
}
c_HeadNode10.prototype=extend_class(c_Node17);
c_HeadNode10.m_new=function(){
	c_Node17.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_Enumerator10(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator10.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator10.m_new2=function(){
	return this;
}
c_Enumerator10.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator10.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function bb_math3d_Mat4OrthoLH(t_left,t_right,t_bottom,t_top,t_near,t_far,t_out){
	bb_math3d_Mat4Identity(t_out);
	t_out[0]=2.0/(t_right-t_left);
	t_out[5]=2.0/(t_top-t_bottom);
	t_out[10]=2.0/(t_far-t_near);
	t_out[12]=(t_left+t_right)/(t_left-t_right);
	t_out[13]=(t_bottom+t_top)/(t_bottom-t_top);
	t_out[14]=(t_near+t_far)/(t_near-t_far);
}
function bb_math3d_Mat4OrthoHeightLH(t_height,t_aspect,t_near,t_far,t_out){
	var t_halfHeight=t_height*0.5;
	var t_halfWidth=t_halfHeight*t_aspect;
	bb_math3d_Mat4OrthoLH(-t_halfWidth,t_halfWidth,-t_halfHeight,t_halfHeight,t_near,t_far,t_out);
}
function bb_math3d_Vec3Norm(t_x,t_y,t_z,t_out){
	bb_math3d_Vec3DivScalar(t_x,t_y,t_z,bb_math3d_Vec3Length(t_x,t_y,t_z),t_out);
}
function bb_math3d_Vec3Cross(t_ax,t_ay,t_az,t_bx,t_by,t_bz,t_out){
	t_out[0]=t_ay*t_bz-t_az*t_by;
	t_out[1]=t_az*t_bx-t_ax*t_bz;
	t_out[2]=t_ax*t_by-t_ay*t_bx;
}
function bb_math3d_Vec3Cross2(t_result,t_l,t_r){
	t_result[0]=t_l[1]*t_r[2]-t_l[2]*t_r[1];
	t_result[1]=t_l[2]*t_r[0]-t_l[0]*t_r[2];
	t_result[2]=t_l[0]*t_r[1]-t_l[1]*t_r[0];
}
function bb_math3d_Mat4LookAtLH(t_eyex,t_eyey,t_eyez,t_centerx,t_centery,t_centerz,t_upx,t_upy,t_upz,t_out){
	bb_math3d_Vec3Sub(t_centerx,t_centery,t_centerz,t_eyex,t_eyey,t_eyez,t_out);
	bb_math3d_Vec3Norm(t_out[0],t_out[1],t_out[2],t_out);
	var t_zx=t_out[0];
	var t_zy=t_out[1];
	var t_zz=t_out[2];
	bb_math3d_Vec3Cross(t_upx,t_upy,t_upz,t_zx,t_zy,t_zz,t_out);
	bb_math3d_Vec3Norm(t_out[0],t_out[1],t_out[2],t_out);
	var t_xx=t_out[0];
	var t_xy=t_out[1];
	var t_xz=t_out[2];
	bb_math3d_Vec3Cross(t_zx,t_zy,t_zz,t_xx,t_xy,t_xz,t_out);
	var t_yx=t_out[0];
	var t_yy=t_out[1];
	var t_yz=t_out[2];
	t_out[0]=t_xx;
	t_out[1]=t_yx;
	t_out[2]=t_zx;
	t_out[3]=0.0;
	t_out[4]=t_xy;
	t_out[5]=t_yy;
	t_out[6]=t_zy;
	t_out[7]=0.0;
	t_out[8]=t_xz;
	t_out[9]=t_yz;
	t_out[10]=t_zz;
	t_out[11]=0.0;
	t_out[12]=0.0;
	t_out[13]=0.0;
	t_out[14]=0.0;
	t_out[15]=1.0;
	bb_math3d_Mat4Translate(t_out,-t_eyex,-t_eyey,-t_eyez,t_out);
}
function c_Enumerator11(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator11.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator11.m_new2=function(){
	return this;
}
c_Enumerator11.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator11.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function bb_math_Sgn(t_x){
	if(t_x<0){
		return -1;
	}
	return ((t_x>0)?1:0);
}
function bb_math_Sgn2(t_x){
	if(t_x<0.0){
		return -1.0;
	}
	if(t_x>0.0){
		return 1.0;
	}
	return 0.0;
}
function c_Node18(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node18.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node18.m_new2=function(){
	return this;
}
c_Node18.prototype.p_Remove=function(){
	this.m__succ.m__pred=this.m__pred;
	this.m__pred.m__succ=this.m__succ;
	return 0;
}
function c_HeadNode11(){
	c_Node18.call(this);
}
c_HeadNode11.prototype=extend_class(c_Node18);
c_HeadNode11.m_new=function(){
	c_Node18.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_PositionAnimator(){
	c_Animator.call(this);
	this.m_mEntity=null;
	this.m_mStartX=.0;
	this.m_mStartY=.0;
	this.m_mStartZ=.0;
	this.m_mEndX=.0;
	this.m_mEndY=.0;
	this.m_mEndZ=.0;
}
c_PositionAnimator.prototype=extend_class(c_Animator);
c_PositionAnimator.m_new=function(t_entity,t_toX,t_toY,t_toZ,t_name,t_time,t_delay,t_delegate){
	c_Animator.m_new.call(this,t_name,t_time,t_delay,t_delegate);
	this.m_mEntity=t_entity;
	this.m_mStartX=t_entity.p_X2();
	this.m_mStartY=t_entity.p_Y2();
	this.m_mStartZ=t_entity.p_Z2();
	this.m_mEndX=t_toX;
	this.m_mEndY=t_toY;
	this.m_mEndZ=t_toZ;
	return this;
}
c_PositionAnimator.m_new2=function(){
	c_Animator.m_new2.call(this);
	return this;
}
c_PositionAnimator.m_mOut=[];
c_PositionAnimator.prototype.p_Update2=function(){
	c_Animator.prototype.p_Update2.call(this);
	var t_t=this.p_Alpha();
	bb_math3d_Vec3Mix(this.m_mStartX,this.m_mStartY,this.m_mStartZ,this.m_mEndX,this.m_mEndY,this.m_mEndZ,bb_math_Min2(t_t,1.0),c_PositionAnimator.m_mOut);
	this.m_mEntity.p_Position2(c_PositionAnimator.m_mOut[0],c_PositionAnimator.m_mOut[1],c_PositionAnimator.m_mOut[2]);
	return t_t>=1.0;
}
function bb_math3d_RaySphereIntersection(t_result,t_origin,t_direction,t_sphere){
	var t_rox=t_origin[0]-t_sphere[0];
	var t_roy=t_origin[1]-t_sphere[1];
	var t_roz=t_origin[2]-t_sphere[2];
	var t_a=t_direction[0]*t_direction[0]+t_direction[1]*t_direction[1]+t_direction[2]*t_direction[2];
	var t_b=2.0*(t_rox*t_direction[0]+t_roy*t_direction[1]+t_roz*t_direction[2]);
	var t_c=t_rox*t_rox+t_roy*t_roy+t_roz*t_roz-t_sphere[3]*t_sphere[3];
	var t_d=t_b*t_b-4.0*t_a*t_c;
	if(t_d<0.0){
		return false;
	}
	t_d=Math.sqrt(t_d);
	t_a=0.5/t_a;
	var t_t1=(t_d-t_b)*t_a;
	var t_t2=(-t_b-t_d)*t_a;
	if(t_t1<0.0){
		t_t1=t_t2;
	}
	if(t_t2<0.0){
		t_t2=t_t1;
	}
	t_t1=bb_math_Min2(t_t1,t_t2);
	if(t_t1<0.0){
		return false;
	}
	t_result[0]=t_t1;
	return true;
}
function bb_math3d_Vec3TransformCoord(t_result,t_v,t_m){
	var t_x=t_v[0];
	var t_y=t_v[1];
	var t_z=t_v[2];
	var t_t=1.0/(t_x*t_m[3]+t_y*t_m[7]+t_z*t_m[11]+t_m[15]);
	t_result[0]=(t_x*t_m[0]+t_y*t_m[4]+t_z*t_m[8]+t_m[12])*t_t;
	t_result[1]=(t_x*t_m[1]+t_y*t_m[5]+t_z*t_m[9]+t_m[13])*t_t;
	t_result[2]=(t_x*t_m[2]+t_y*t_m[6]+t_z*t_m[10]+t_m[14])*t_t;
}
function bb_math3d_RayTriangleIntersection(t_result,t_origin,t_direction,t_point1,t_point2,t_point3){
	var t_e1x=t_point2[0]-t_point1[0];
	var t_e1y=t_point2[1]-t_point1[1];
	var t_e1z=t_point2[2]-t_point1[2];
	var t_e2x=t_point3[0]-t_point1[0];
	var t_e2y=t_point3[1]-t_point1[1];
	var t_e2z=t_point3[2]-t_point1[2];
	var t_pvx=t_direction[1]*t_e2z-t_direction[2]*t_e2y;
	var t_pvy=t_direction[2]*t_e2x-t_direction[0]*t_e2z;
	var t_pvz=t_direction[0]*t_e2y-t_direction[1]*t_e2x;
	var t_d=t_e1x*t_pvx+t_e1y*t_pvy+t_e1z*t_pvz;
	if(t_d>-0.001 && t_d<0.001){
		return false;
	}
	t_d=1.0/t_d;
	var t_tvx=t_origin[0]-t_point1[0];
	var t_tvy=t_origin[1]-t_point1[1];
	var t_tvz=t_origin[2]-t_point1[2];
	var t_u=(t_tvx*t_pvx+t_tvy*t_pvy+t_tvz*t_pvz)*t_d;
	if(t_u<0.0 || t_u>1.0){
		return false;
	}
	var t_qvx=t_tvy*t_e1z-t_tvz*t_e1y;
	var t_qvy=t_tvz*t_e1x-t_tvx*t_e1z;
	var t_qvz=t_tvx*t_e1y-t_tvy*t_e1x;
	var t_v=(t_direction[0]*t_qvx+t_direction[1]*t_qvy+t_direction[2]*t_qvz)*t_d;
	if(t_v<0.0 || t_u+t_v>1.0){
		return false;
	}
	var t_t=(t_e2x*t_qvx+t_e2y*t_qvy+t_e2z*t_qvz)*t_d;
	t_result[0]=t_t;
	t_result[1]=t_u;
	t_result[2]=t_v;
	return true;
}
function bb_math3d_Vec3Normalize(t_result,t_v){
	var t_l=bb_math3d_Vec3Dot2(t_v,t_v);
	if(t_l>0.0){
		t_l=Math.sqrt(t_l);
		var t_s=1.0/t_l;
		t_result[0]=t_v[0]*t_s;
		t_result[1]=t_v[1]*t_s;
		t_result[2]=t_v[2]*t_s;
	}
	return t_l;
}
function bb_math3d_Vec3Transform(t_result,t_v,t_m){
	var t_x=t_v[0];
	var t_y=t_v[1];
	var t_z=t_v[2];
	t_result[0]=t_x*t_m[0]+t_y*t_m[4]+t_z*t_m[8]+t_m[12];
	t_result[1]=t_x*t_m[1]+t_y*t_m[5]+t_z*t_m[9]+t_m[13];
	t_result[2]=t_x*t_m[2]+t_y*t_m[6]+t_z*t_m[10]+t_m[14];
}
function bb_math3d_Vec3Mix(t_ax,t_ay,t_az,t_bx,t_by,t_bz,t_t,t_out){
	t_out[0]=t_ax+(t_bx-t_ax)*t_t;
	t_out[1]=t_ay+(t_by-t_ay)*t_t;
	t_out[2]=t_az+(t_bz-t_az)*t_t;
}
function bb_audio_StopChannel(t_channel){
	bb_audio_device.StopChannel(t_channel);
	return 0;
}
function bb_math3d_Mat4BillboardLH(t_view,t_x,t_y,t_z,t_spin,t_width,t_height,t_upfront,t_out){
	t_out[0]=t_view[0];
	t_out[1]=t_view[4];
	t_out[2]=t_view[8];
	t_out[3]=0.0;
	if(t_upfront){
		t_out[4]=0.0;
		t_out[5]=1.0;
		t_out[6]=0.0;
	}else{
		t_out[4]=t_view[1];
		t_out[5]=t_view[5];
		t_out[6]=t_view[9];
	}
	t_out[7]=0.0;
	t_out[8]=t_view[2];
	t_out[9]=t_view[6];
	t_out[10]=t_view[10];
	t_out[11]=0.0;
	t_out[12]=t_x;
	t_out[13]=t_y;
	t_out[14]=t_z;
	t_out[15]=1.0;
	bb_math3d_Mat4Rotate(t_out,t_spin,0.0,0.0,1.0,t_out);
	bb_math3d_Mat4Scale(t_out,t_width,t_height,1.0,t_out);
}
function bbInit(){
	bb_app__app=null;
	bb_app__delegate=null;
	bb_app__game=BBGame.Game();
	bb_graphics_device=null;
	bb_graphics_context=c_GraphicsContext.m_new.call(new c_GraphicsContext);
	c_Image.m_DefaultFlags=0;
	bb_audio_device=null;
	bb_input_device=null;
	bb_app__devWidth=0;
	bb_app__devHeight=0;
	bb_app__devWinWidth=0;
	bb_app__devWinHeight=0;
	bb_app__displayModes=[];
	bb_app__desktopMode=null;
	bb_graphics_renderDevice=null;
	bb_app__updateRate=0;
	bb_random_Seed=1234;
	c_RenderState.m_LightPos=new_array_array(4);
	c_RenderState.m_LightColor=[];
	c_RenderState.m_LightRadius=[];
	c_RenderState.m_Color=0;
	c_Renderer.m_mMaxLights=0;
	c_Renderer.m_mMaxBones=0;
	c_Shader.m_mDefault2D=null;
	c_Renderer.m_mShaderError="";
	c_Shader.m_mShadow=null;
	c_Shader.m_mSkybox=null;
	c_Shader.m_mMinimal=null;
	c_Shader.m_mMinimalShadows=null;
	c_Shader.m_mVertexLighting=null;
	c_Shader.m_mPixelLighting=null;
	c_Renderer.m_mEllipseBuffer=0;
	c_Renderer.m_mLineBuffer=0;
	c_Renderer.m_mRectBuffer=0;
	c_Renderer.m_mFramebufferHeight=0;
	c_RenderState.m_NumLights=0;
	c_RenderState.m_BlendMode=0;
	c_RenderState.m_UseColorTex=false;
	c_RenderState.m_UseNormalTex=false;
	c_RenderState.m_UseShininessTex=false;
	c_RenderState.m_UseLightTex=false;
	c_RenderState.m_UseCubeTex=false;
	c_RenderState.m_Skinned=false;
	c_RenderState.m_TextureMatrix=new_number_array(16);
	c_RenderState.m_ShadowsEnabled=false;
	c_Shader.m_mDefaultType=-1;
	c_Shader.m_mCurrentDefault=null;
	c_RenderState.m_ViewMatrix=new_number_array(16);
	c_RenderState.m_ModelMatrix=new_number_array(16);
	c_ShaderUniforms.m_mTempMatrix=new_number_array(16);
	bb_math3d_tempMat4=new_number_array(16);
	c_RenderState.m_ProjectionMatrix=new_number_array(16);
	c_RenderState.m_DepthBiasMatrix=new_number_array(16);
	c_RenderState.m_DepthEpsilon=.0;
	c_RenderState.m_BoneMatrices=new_array_array(16);
	c_RenderState.m_Ambient=0;
	c_RenderState.m_Shininess=.0;
	c_RenderState.m_SpecularPower=.0;
	c_RenderState.m_CubeOpacity=.0;
	c_RenderState.m_FogMinDistance=.0;
	c_RenderState.m_FogMaxDistance=.0;
	c_RenderState.m_FogEnabled=false;
	c_RenderState.m_FogColor=0;
	c_RenderState.m_RefractCoef=.0;
	c_Cache.m_mStack=new_object_array(0);
	c_World.m_mSkybox=null;
	c_World.m_mSunPitch=.0;
	c_World.m_mSunYaw=.0;
	c_World.m_mSunColor=0;
	c_World.m_mAmbient=0;
	c_World.m_mFogEnabled=false;
	c_World.m_mFogMin=.0;
	c_World.m_mFogMax=.0;
	c_World.m_mFogColor=0;
	c_World.m_mSeparateDepthPass=false;
	c_World.m_mShadowsEnabled=false;
	c_World.m_mFramebuffer=null;
	c_World.m_mShadowsRange=.0;
	c_World.m_mShadowsSunDist=.0;
	c_Renderer.m_mTempArray=new_number_array(1);
	c_World.m_mLastMillisecs=0;
	c_Stack2.m_NIL=null;
	c_Stream.m__tmp=c_DataBuffer.m_new.call(new c_DataBuffer,4096,false);
	c_Texture.m_mSizeArr=new_number_array(2);
	c_World.m_mEntities=c_List.m_new.call(new c_List);
	c_World.m_mCameras=c_List2.m_new.call(new c_List2);
	c_Listener.m_mListener=null;
	c_Entity.m_mTempArr=new_number_array(4);
	c_World.m_mColBoxes=new_object_array(0);
	c_Collision.m_mTempVec=new_number_array(3);
	c_Widget.m_widgets=c_List3.m_new.call(new c_List3);
	c_World.m_mEnabledEntities=c_List.m_new.call(new c_List);
	c_World.m_mVisibleEntities=c_List.m_new.call(new c_List);
	c_Grid.m_mQuad=null;
	c_Surface.m_mTempQuat=new_number_array(4);
	c_Surface.m_mTempMat=new_number_array(16);
	bb_math3d_tempMat4B=new_number_array(16);
	c_Car.m_sound=null;
	c_Sprite.m_mSurface=null;
	c_Animator.m_animators=c_List9.m_new.call(new c_List9);
	c_World.m_rtProjectionTransform=new_number_array(16);
	c_World.m_rtNormPoint=new_number_array(3);
	c_World.m_rtViewTransform=new_number_array(16);
	c_World.m_rtInverseViewTransform=new_number_array(16);
	c_World.m_mPickedEntity=null;
	c_World.m_mPickedSurface=null;
	c_World.m_mPickedTriangle=0;
	c_World.m_mPickedDistance=.0;
	c_World.m_rtTraceInfo=c_TraceInfo.m_new.call(new c_TraceInfo);
	c_World.m_mPickedPoint=new_number_array(3);
	c_World.m_mPickedNormal=new_number_array(3);
	c_World.m_mDeltaTime=.0;
	c_Listener.m_mEmittedSounds=c_List10.m_new.call(new c_List10);
	c_Graphics.m_mFpsCounter=0;
	c_Graphics.m_mFpsAccum=.0;
	c_Graphics.m_mFps=0;
	c_World.m_mLights=c_List11.m_new.call(new c_List11);
	c_World.m_mTempArr=new_number_array(4);
	c_World.m_mDepthProj=new_number_array(16);
	c_World.m_mDepthView=new_number_array(16);
	c_Camera.m_mCurrent=null;
	c_RenderState.m_SeparateDepthPass=false;
	c_Graphics.m_mRenderCalls=0;
	c_Renderer.m_mTexDataBuffer=c_DataBuffer.m_new.call(new c_DataBuffer,64,true);
	c_WidgetPositionAnimator.m_mOut=new_number_array(3);
	c_PositionAnimator.m_mOut=new_number_array(3);
}
//${TRANSCODE_END}
