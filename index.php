<html>
   <head>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
      <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
      <title>EDITABLE TABLES</title>
   </head>
   <body style="background:url('3fb4f6db3fdbe21d3ab9a8b98a3054db.jpg');background-size:100% 100%;opacity:0.97">
      <?php
         $servername = "localhost";
         $username = "imagixin_varun";
         $password = "I15b4S5gwv";
         
         // Create connection
         $conn = new mysqli($servername, $username, $password);
         
         // Check connection
         if ($conn->connect_error) {
             die("Connection failed: " . $conn->connect_error);
         } 
         //echo "Connected successfully";
         
         
         mysqli_select_db($conn,"imagixin_edittables");
         echo '<br/><br/><br/><br/><div class="container container-responsive"><div class="container container-responsive"><div class="row form-group table-responsive a "><table class="table table-hover" style="background:white;opacity:0.97;border-radius:13px;">
         <thead>
         <tr>
         <th><center>Sr No.</center></th><th><center>Driver Name</center></th><th><center>Team</center></th><th><center>Points</center></th><th><center>--</center></th>
         </tr>
         </thead>
         <tbody>';
         		
         		
         $query="select * from editdrivers where 1=1"; // add socno to where
         							$result=mysqli_query($conn,$query);
         							$no=1;
         							while($row=mysqli_fetch_assoc($result))
         							{
         								echo "<tr id='r".$no."'><td><center>".$no.".</center></td>"."<td><span>".$row['name']." </span><span hidden><input type='text' value='".$row['name']."'  /></span></td><td><span>".$row['team']."</span><span hidden><input type='text' value='".$row['team']."'  /></span></td><td><center><span>".$row['points']."</span></center><span hidden><input type='text' value='".$row['points']."'  /></span></td><td><input type='button' id='".$no."' class='btn btn-danger form-control' value='DELETE' data-delid='".$row['id']."'></td>"."</tr>";
         								$no++;
         							}
         
         
         
         
         
         
         
         
         echo '</tbody><tfoot><tr><td colspan="4"></td><td><input type="button" type="button" class="btn btn-success form-control pull-right" id="addr1" value="ADD ROW"/></td></tr></tfoot>';
         echo '</table></div></div>';
         
         
         
         
         
         ?>
      </div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130546438-1"></script>
      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         
         gtag('config', 'UA-130546438-1');
      </script>
      <script type="text/javascript" src="js/jquery.js" type="text/javascript"></script>
      <script type="text/javascript" src="js/bootstrap.js" type="text/javascript"></script>
      <script src="js/jquery.hammer.js" type="text/javascript"></script>
      <script type="text/javascript" src="js/index.js"></script>
   </body>
</html>