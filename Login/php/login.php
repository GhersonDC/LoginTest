
<?php
session_start();

?>

<?php
 $usuario = $_POST['txtusuario'];
 $password = $_POST['txtpassword'];

//conection database

$connect = mysqli_connect("localhost","root","","test");
$squery= "select usuario,password from login where usuario = '$usuario' and password = '$password'";

$result = mysqli_query($connect,$squery);


$row=mysqli_num_rows($result);

//  found one register
if($row > 0 )
{
//  create the session with the values obtained
$row=mysqli_fetch_array($result);
$_SESSION['usuario'] =$row['usuario'];
$_SESSION['password'] =$row['password'];


header('location: index.php');

}
else {

	$mensaje = 'User or password Wrong.. Redirecting......';
	echo '<script>';
	echo "alert('$mensaje');";
	echo "window.location = 'login.html';";
	echo '<script>';

}
?>