var k = 0;

let addrow = () =>
{
  let flag = 0;
  let flag2 = 0;
  let n = document.getElementById('name1').value;
  let roll = document.getElementById('rollno').value;
  let stream = document.getElementById('stream1').value;
  let year = document.getElementById('year1').value;
  let but = document.getElementById('submit').value;
  if(n == "" || roll == "" || stream == "" || year == "")
  {
    alert("Input Field can't be left empty");
  }
  else if (!isNaN(n))
  {
    alert("Your name is incorrect");
  }
  else if(isNaN(roll))
  {
    alert("Roll no must contain integers");
  }
  else if(roll.length != 10)
  {
    alert("Roll no must be of 10-digits");
  }
  else if(but == 'Update')
  {
    let x = document.getElementById('table1');
    var row = x.rows[k];
    let chk1 = "<form><input type='checkbox'></form>";
    row.cells[1].innerHTML = document.getElementById("name1").value;
    row.cells[2].innerHTML = document.getElementById("rollno").value;
    row.cells[3].innerHTML = document.getElementById("stream1").value;
    row.cells[4].innerHTML = document.getElementById("year1").value;
    row.cells[0].innerHTML = chk1;
    document.getElementById("submit").value="Submit";
    flag = 1;
  }
  else
  {
        let table = document.getElementById("table1");
        let chk ="<input type='checkbox' id='chk'/>";
        let row = table.insertRow(table.rows.length);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        cell0.innerHTML = chk;
        cell1.innerHTML = n;
        cell2.innerHTML = roll;
        cell3.innerHTML = stream;
        cell4.innerHTML = year;
        flag2 = 1;
  }
  if(flag == 1 || flag2 == 1)
    document.getElementById("form1").reset();
}

let delrow = () =>
{
  let table = document.getElementById('table1');
  let rowCount = table.rows.length;
  let i = 1;
  while(rowCount != 1 && i < rowCount)
  {
      var row = table.rows[i];
      let chkbox = row.cells[0].getElementsByTagName('input')[0];
      if(true == chkbox.checked)
      {
          table.deleteRow(i);
          rowCount--;
      }
      else
      {
          i++;
      }
  }
}

let editrow = () =>
{
		let table2 = document.getElementById('table1');
    let rowCount = table2.rows.length;
		let i = 1;
		let c = 0;
    while(i < rowCount)
		{
        var row = table2.rows[i];
        let chkbox = row.cells[0].getElementsByTagName('input')[0];
        if(true == chkbox.checked)
			  {
				      c++;
              k=i;
        }
        i++;
    }
		if(c > 1)
			alert("You cannot update more than one row at a time");
		else
		{
			let name1 = row.cells[1].innerHTML;
			let roll1 = row.cells[2].innerHTML;
			let stream1 = row.cells[3].innerHTML;
      let pass1 = row.cells[4].innerHTML;
			document.getElementById('name1').value = name1;
			document.getElementById('rollno').value = roll1;
			document.getElementById('stream1').value = stream1;
      document.getElementById('year1').value = pass1;
		}
    document.getElementById("submit").value="Update";
}
