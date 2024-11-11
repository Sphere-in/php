"use client"


import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Copy, Check } from "lucide-react"
// import { useToast } from "@/components/ui/use-toast"
import { useToast } from '@/components/ui/use-toast'

const programs = [
  {
    id: 1,
    title: "Greeting Form",
    description: "Write a program to get the user's name from a form and show greeting text.",
    pages: [
      {
        name: "greeting.php",
        code: `
<html>
<head>
  <style>
    div {font-size:20pt;color:green;font-family:Jokerman;text-align:center;width:30%}
    p {font-size:18pt;color:darkblue;font-weight:bold;font-family:arial black}
    .double {border-style:double}
    .dashed {border-style:dashed}
  </style>
</head>
<body>
  <center><br><br>
    <div class="double">GREETING TEXT</div><br>
    <div class="dashed">
      <form method="post">
        <p>Enter The Text:<br><input type="text" name="n"></p><br>
        <input type="submit" name="sub">
      </form>
    </div>
    <?php
    if(isset($_POST['sub'])) {
      $n1 = $_POST['n'];
      echo "<center> Welcome " . $n1 ."</center>";
    }
    ?>
  </center>
</body>
</html>
        `
      }
    ]
  },
  {
    id: 2,
    title: "Palindrome Check",
    description: "Write a program to check if a given number is palindrome or not.",
    pages: [
      {
        name: "palindrome.php",
        code: `
<html>
<body>
  <form action="" method="post">
    <h1><u><font color="red">PALINDROME</font></u></h1>
    <table bgcolor="forestgreen" align="center">
      <tr><td>Enter the Input: <input type="text" name="n"></td></tr>
      <tr><td><input type="submit" name="sub"></td></tr>
    </table>
  </form>
  <?php
  if(isset($_POST['sub'])) {
    $n1 = $_POST["n"];
    $p = $n1;
    $s = 0;
    while($n1 >= 1) {
      $r = $n1 % 10;
      $n1 = $n1 * (10/100);
      $s = $s * 10 + $r;
    }
    echo "<center>";
    if($p == $s)
      echo "$p is a Palindrome Number";
    else
      echo "$p is not a Palindrome Number";
    echo "</center>";
  }
  ?>
</body>
</html>
        `
      }
    ]
  },
  {
    id: 3,
    title: "Largest of Two Numbers",
    description: "Write a program to find the largest value of two numbers using a parameterized function.",
    pages: [
      {
        name: "largest.php",
        code: `
<?php
function largest($x, $y) {
  if($x > $y) return $x;
  return $y;
}

if(isset($_POST['check'])) {
  $x = $_POST['first'];
  $y = $_POST['second'];
  echo "Largest number is: " . largest($x, $y);
}
?>
<html>
<body>
  <form method="post">
    First Number: <input type="text" name="first"/><br>
    Second Number: <input type="text" name="second"/><br>
    <input type="submit" name="check" value="CHECK"/>
  </form>
</body>
</html>
        `
      }
    ]
  },
  {
    id: 4,
    title: "Calculator",
    description: "Write a program to demonstrate a calculator with basic operations.",
    pages: [
      {
        name: "calculator.php",
        code: `
<html>
<body bgcolor="gold">
  <form action="" method="post">
    <table align="center" border="3">
      <tr><td>Enter First Input: <input type="text" name="f"></td></tr>
      <tr><td>Enter Second Input: <input type="text" name="s"></td></tr>
      <tr><td>Choose Operation: 
        <select name="op">
          <option value="+">Add</option>
          <option value="-">Subtract</option>
          <option value="*">Multiply</option>
          <option value="/">Divide</option>
        </select>
      </td></tr>
      <tr><td><input type="submit" name="calculate" value="Calculate"></td></tr>
    </table>
  </form>
  <?php
  if(isset($_POST['calculate'])) {
    $f = $_POST['f'];
    $s = $_POST['s'];
    $op = $_POST['op'];
    switch($op) {
      case '+': $result = $f + $s; break;
      case '-': $result = $f - $s; break;
      case '*': $result = $f * $s; break;
      case '/': $result = $f / $s; break;
    }
    echo "<center>Result: $result</center>";
  }
  ?>
</body>
</html>
        `
      }
    ]
  },
  {
    id: 5,
    title: "Data Transfer Using POST",
    description: "Write a program to transfer data from one page to another using the POST method.",
    pages: [
      {
        name: "data.html",
        code: `
<form action="display.php" method="post">
  First Name: <input type="text" name="fname"><br>
  Last Name: <input type="text" name="lname"><br>
  <button type="submit">Submit</button>
</form>
        `
      },
      {
        name: "display.php",
        code: `
<?php
$first_name = $_POST['fname'];
$last_name = $_POST['lname'];
echo "Welcome " . $first_name . " " . $last_name;
?>
        `
      }
    ]
  },
  {
    id: 6,
    title: "String Functions",
    description: "Write a program to perform any 5 string functions.",
    pages: [
      {
        name: "stringFunctions.php",
        code: `
<?php
$str = "PHP Programming";

echo "Lowercase: " . strtolower($str) . "<br>";
echo "Uppercase: " . strtoupper($str) . "<br>";
echo "Length: " . strlen($str) . "<br>";
echo "Reverse: " . strrev($str) . "<br>";
echo "Capitalized: " . ucwords($str) . "<br>";
?>
        `
      }
    ]
  },
  {
    id: 7,
    title: "Array Functions",
    description: "Write a program to perform any 5 array functions.",
    pages: [
      {
        name: "arrayFunctions.php",
        code: `
<?php
$arr = [1, 2, 3, 4, 5];
echo "Sum: " . array_sum($arr) . "<br>";

$arr1 = ["a" => "apple", "b" => "banana"];
$arr2 = ["c" => "cherry", "d" => "date"];
$merged = array_merge($arr1, $arr2);
echo "Merged Array: ";
print_r($merged);
echo "<br>";

$reversed = array_reverse($arr);
echo "Reversed Array: ";
print_r($reversed);
echo "<br>";

sort($arr);
echo "Sorted Array: ";
print_r($arr);
echo "<br>";

echo "Key Exists: " . (array_key_exists("a", $arr1) ? "Yes" : "No") . "<br>";
?>
        `
      }
    ]
  },
  {
    id: 8,
    title: "Array Traversal",
    description: "Write a program to traverse indexed, associative, and multidimensional arrays.",
    pages: [
      {
        name: "arrayTraversal.php",
        code: `
<?php
echo "<b>Indexed Array</b><br>";
$indexedArr = [1, 2, 3];
foreach ($indexedArr as $value) {
  echo $value . " ";
}

echo "<br><b>Associative Array</b><br>";
$assocArr = ["name" => "John", "age" => 25];
foreach ($assocArr as $key => $value) {
  echo "$key => $value<br>";
}

echo "<b>Multidimensional Array</b><br>";
$multiArr = [
  "John" => ["age" => 25, "city" => "New York"],
  "Jane" => ["age" => 30, "city" => "London"]
];
foreach ($multiArr as $name => $details) {
  echo "$name:<br>";
  foreach ($details as $key => $value) {
    echo " $key => $value<br>";
  }
}
?>
        `
      }
    ]
  },
  {
    id: 9,
    title: "Image Storage and Display",
    description: "Write a program to store an image in the database and display it on button click.",
    pages: [
      {
        name: "imageUpload.php",
        code: `
<!DOCTYPE html>
<html>
<body>
  <form method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <input type="text" name="roll" placeholder="Roll No">
    <button type="submit" name="upload">Upload</button>
    <button type="submit" name="display">Display</button>
  </form>
  <?php
  $conn = mysqli_connect('localhost', 'root', '', 'college');
  if (isset($_POST['upload'])) {
    $name = $_FILES['file']['name'];
    $tmp_name = $_FILES['file']['tmp_name'];
    $roll = $_POST['roll'];
    if (move_uploaded_file($tmp_name, "uploads/" . $name)) {
      $query = "INSERT INTO students (roll, image) VALUES ('$roll', '$name')";
      mysqli_query($conn, $query);
      echo "Image uploaded and saved in database.";
    }
  } elseif (isset($_POST['display'])) {
    $roll = $_POST['roll'];
    $query = "SELECT image FROM students WHERE roll = '$roll'";
    $result = mysqli_query($conn, $query);
    if ($row = mysqli_fetch_assoc($result)) {
      echo "<img src='uploads/" . $row['image'] . "' alt='Student Image'>";
    } else {
      echo "No image found for roll number $roll.";
    }
  }
  ?>
</body>
</html>
        `
      }
    ]
  },
  {
    id: 10,
    title: "Login Page with SQL Connection",
    description: "Create a PHP page for a login page with SQL connection.",
    pages: [
      {
        name: "login.php",
        code: `
<html>
<head><title>Login System</title></head>
<body>
  <form method="POST">
    <label>Username:</label>
    <input type="text" name="username"><br>
    <label>Password:</label>
    <input type="password" name="password"><br>
    <button type="submit" name="login">Login</button>
  </form>
  <?php
  if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $conn = mysqli_connect('localhost', 'root', '', 'college');
    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
      echo "Login successful.";
    } else {
      echo "Invalid username or password.";
    }
  }
  ?>
</body>
</html>
        `
      }
    ]
  },


  // Continue adding other programs in similar format based on the manual
];


export default function Component() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0])
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  const currentPage = selectedProgram.pages[currentPageIndex]

  const handlePrevPage = () => {
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPageIndex((prev) => (prev < selectedProgram.pages.length - 1 ? prev + 1 : prev))
  }

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentPage.code)
      setIsCopied(true)
      toast({
        title: "Code copied",
        description: "The code has been copied to your clipboard.",
      })
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
      toast({
        title: "Copy failed",
        description: "Failed to copy the code. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PHP Lab Manual Programs</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Program List</CardTitle>
            <CardDescription>Select a program to view details</CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              onValueChange={(value) => {
                const program = programs.find(p => p.id === parseInt(value))
                if (program) {
                  setSelectedProgram(program)
                  setCurrentPageIndex(0)
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program.id} value={program.id.toString()}>
                    {program.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>{selectedProgram.title}</CardTitle>
            <CardDescription>{selectedProgram.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <Button
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                variant="outline"
                size="sm"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <span className="text-sm font-medium">
                {currentPage.name} ({currentPageIndex + 1} of {selectedProgram.pages.length})
              </span>
              <Button
                onClick={handleNextPage}
                disabled={currentPageIndex === selectedProgram.pages.length - 1}
                variant="outline"
                size="sm"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <ScrollArea className="h-[500px] w-full rounded-md border p-4">
                <pre className="text-sm">
                  <code>{currentPage.code}</code>
                </pre>
              </ScrollArea>
              <Button
                className="absolute top-2 right-2"
                size="sm"
                onClick={handleCopyCode}
                disabled={isCopied}
              >
                {isCopied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-2 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}