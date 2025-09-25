
let students = [
  { id: 1, name: "Rahul Sharma", marks: 15, class: "Class 11" },
  { id: 2, name: "Priya Verma", marks: 74, class: "Class 9" },
  { id: 3, name: "Aman Gupta", marks: 25, class: "Class 8" },
  { id: 4, name: "Sneha Kapoor", marks: 88, class: "Class 10" },
  { id: 5, name: "Arjun Mehta", marks: 24, class: "Class 12" },
  { id: 6, name: "Kavya Singh", marks: 82, class: "Class 7" },
  { id: 7, name: "Rohit Thakur", marks: 17, class: "Class 6" },
  { id: 8, name: "Simran Kaur", marks: 55, class: "Class 9" },
  { id: 9, name: "Vikram Joshi", marks: 24, class: "Class 10" },
  { id: 10, name: "Anjali Nair", marks: 19, class: "Class 8" },
  { id: 11, name: "Siddharth Rao", marks: 64, class: "Class 7" },
  { id: 12, name: "Pooja Mishra", marks: 2, class: "Class 11" },
  { id: 13, name: "Manish Kumar", marks: 53, class: "Class 9" },
  { id: 14, name: "Neha Yadav", marks: 85, class: "Class 12" },
  { id: 15, name: "Karan Malhotra", marks: 41, class: "Class 8" },
  { id: 16, name: "Ritika Jain", marks: 97, class: "Class 6" },
  { id: 17, name: "Harsh Patel", marks: 30, class: "Class 10" },
  { id: 18, name: "Isha Bansal", marks: 69, class: "Class 7" },
  { id: 19, name: "Deepak Rana", marks: 27, class: "Class 11" },
  { id: 20, name: "Megha Saxena", marks: 79, class: "Class 9" },
  { id: 21, name: "Aditya Sinha", marks: 63, class: "Class 12" },
  { id: 22, name: "Sanya Kapoor", marks: 10, class: "Class 6" },
  { id: 23, name: "Gaurav Yadav", marks: 36, class: "Class 8" },
  { id: 24, name: "Nisha Rani", marks: 84, class: "Class 7" },
  { id: 25, name: "Varun Chauhan", marks: 51, class: "Class 11" },
  { id: 26, name: "Pallavi Joshi", marks: 11, class: "Class 9" },
  { id: 27, name: "Tarun Arora", marks: 70, class: "Class 10" },
  { id: 28, name: "Aarti Pandey", marks: 48, class: "Class 6" },
  { id: 29, name: "Rakesh Sharma", marks: 94, class: "Class 12" },
  { id: 30, name: "Divya Kapoor", marks: 37, class: "Class 8" },
  { id: 31, name: "Mohit Bansal", marks: 68, class: "Class 9" },
  { id: 32, name: "Shivani Nair", marks: 90, class: "Class 11" },
  { id: 33, name: "Nikhil Verma", marks: 7, class: "Class 7" },
  { id: 34, name: "Poonam Singh", marks: 42, class: "Class 6" },
  { id: 35, name: "Abhishek Rana", marks: 16, class: "Class 10" },
  { id: 36, name: "Komal Gupta", marks: 54, class: "Class 8" },
  { id: 37, name: "Suraj Mehta", marks: 98, class: "Class 12" },
  { id: 38, name: "Ankita Jain", marks: 13, class: "Class 7" },
  { id: 39, name: "Lokesh Thakur", marks: 45, class: "Class 11" },
  { id: 40, name: "Shreya Malhotra", marks: 32, class: "Class 9" },
  { id: 41, name: "Rajat Sood", marks: 66, class: "Class 10" },
  { id: 42, name: "Mona Yadav", marks: 3, class: "Class 8" },
  { id: 43, name: "Ashish Kumar", marks: 71, class: "Class 6" },
  { id: 44, name: "Priyanka Mishra", marks: 59, class: "Class 12" },
  { id: 45, name: "Vinay Joshi", marks: 9, class: "Class 7" },
  { id: 46, name: "Shalini Chauhan", marks: 62, class: "Class 9" },
  { id: 47, name: "Chetan Sharma", marks: 38, class: "Class 10" },
  { id: 48, name: "Tanya Verma", marks: 91, class: "Class 11" },
  { id: 49, name: "Rajeev Kapoor", marks: 76, class: "Class 6" },
  { id: 50, name: "Ayesha Khan", marks: 22, class: "Class 8" },
  { id: 51, name: "Parth Bansal", marks: 43, class: "Class 12" },
  { id: 52, name: "Ira Malhotra", marks: 27, class: "Class 9" },
  { id: 53, name: "Sourabh Gupta", marks: 50, class: "Class 11" },
  { id: 54, name: "Jiya Singh", marks: 87, class: "Class 7" },
  { id: 55, name: "Naveen Thakur", marks: 12, class: "Class 10" },
  { id: 56, name: "Ruchi Sharma", marks: 99, class: "Class 6" },
  { id: 57, name: "Anurag Mehta", marks: 34, class: "Class 8" },
  { id: 58, name: "Mitali Kapoor", marks: 75, class: "Class 12" },
  { id: 59, name: "Dinesh Kumar", marks: 5, class: "Class 9" },
  { id: 60, name: "Sakshi Nair", marks: 60, class: "Class 11" },
  { id: 61, name: "Kunal Yadav", marks: 93, class: "Class 7" },
  { id: 62, name: "Payal Verma", marks: 26, class: "Class 10" },
  { id: 63, name: "Rohit Joshi", marks: 83,class: "Class 9" },
  { id: 64, name: "Ankush Rana", marks: 8, class: "Class 6" },
  { id: 65, name: "Muskan Bansal", marks: 56, class: "Class 8" },
  { id: 66, name: "Aarav Sinha", marks: 14, class: "Class 11" },
  { id: 67, name: "Khushi Kapoor", marks: 46, class: "Class 9" },
  { id: 68, name: "Sameer Thakur", marks: 72, class: "Class 12" },
  { id: 69, name: "Preeti Chauhan", marks: 1, class: "Class 7" },
  { id: 70, name: "Yash Gupta", marks: 40, class: "Class 10" },
  { id: 71, name: "Radhika Sharma", marks: 100, class: "Class 6" },
  { id: 72, name: "Dev Verma", marks: 21, class: "Class 8" },
  { id: 73, name: "Shivangi Joshi", marks: 52, class: "Class 11" },
  { id: 74, name: "Arnav Kapoor", marks: 95, class: "Class 9" },
  { id: 75, name: "Nandini Singh", marks: 6, class: "Class 12" },
  { id: 76, name: "Rohan Malhotra", marks: 86, class: "Class 10" },
  { id: 77, name: "Snehal Patel", marks: 20, class: "Class 6" },
  { id: 78, name: "Vivek Yadav", marks: 73, class: "Class 8" },
  { id: 79, name: "Alisha Nair", marks: 48, class: "Class 7" },
  { id: 80, name: "Harshit Sharma", marks: 35, class: "Class 11" },
  { id: 81, name: "Tanvi Gupta", marks: 80, class: "Class 9" },
  { id: 82, name: "Aakash Mehta", marks: 4, class: "Class 12" },
  { id: 83, name: "Riya Verma", marks: 61, class: "Class 10" },
  { id: 84, name: "Shubham Kumar", marks: 29, class: "Class 6" },
  { id: 85, name: "Palak Kapoor", marks: 77, class: "Class 7" },
  { id: 86, name: "Adarsh Singh", marks: 19, class: "Class 9" },
  { id: 87, name: "Kanika Chauhan", marks: 55, class: "Class 8" },
  { id: 88, name: "Arvind Thakur", marks: 36, class: "Class 12" },
  { id: 89, name: "Sonia Nair", marks: 68, class: "Class 10" },
  { id: 90, name: "Lakshay Rana", marks: 99, class: "Class 6" },
  { id: 91, name: "Diya Malhotra", marks: 23, class: "Class 11" },
  { id: 92, name: "Pranav Sinha", marks: 65, class: "Class 7" },
  { id: 93, name: "Garima Joshi", marks: 39, class: "Class 9" },
  { id: 94, name: "Keshav Yadav", marks: 81, class: "Class 8" },
  { id: 95, name: "Srishti Gupta", marks: 47, class: "Class 10" },
  { id: 96, name: "Aryan Sharma", marks: 89, class: "Class 12" },
  { id: 97, name: "Piya Kapoor", marks: 28, class: "Class 6" },
  { id: 98, name: "Madhav Mehta", marks: 67, class: "Class 11" },
  { id: 99, name: "Ananya Verma", marks: 33, class: "Class 7" },
  { id: 100, name: "Sahil Kumar", marks: 44, class: "Class 9" }
];

// Grade assign
let st = students.map(dels => {
  let grade = "";
  if(dels.marks > 90) grade = "A+";
  else if(dels.marks > 75) grade = "B+";
  else if(dels.marks > 50) grade = "C+";
  else grade = "Fail";

  return {
    id: dels.id,
    name: dels.name,
    marks: dels.marks,
    grade: grade,
    class: dels.class,
  };
});



let sorted = st.sort((a, b) => b.marks - a.marks);

let tbody = document.querySelector("#studenttable tbody");

sorted.forEach((dels, index) => {
  let tr = document.createElement("tr");

  if(index === 0) tr.classList.add("topper");

  let nametd = document.createElement("td");
  nametd.textContent = dels.name;

  let marktd = document.createElement("td");
  marktd.textContent = dels.marks;

  let gradetd = document.createElement("td");
  gradetd.textContent = dels.grade;
  gradetd.classList.add(
    dels.grade === "A+" ? "grade-A" :
    dels.grade === "B+" ? "grade-B" :
    dels.grade === "C+" ? "grade-C" : "grade-fail"
  );

  let classtd = document.createElement("td");
  classtd.textContent = dels.class;

  tr.appendChild(nametd);
  tr.appendChild(marktd);
  tr.appendChild(gradetd);
  tr.appendChild(classtd);

  tbody.appendChild(tr);
});

let search = document.querySelector("#search");
let table = document.querySelector("table");


search.addEventListener("input",function(dels){
  let searchvalue = dels.target.value.toLowerCase();
  let rows = table.querySelectorAll("tbody tr");
  
  rows.forEach(function(row){
    let found = false;

let cells = row.querySelectorAll("td");
cells.forEach(function(cell){
  let celltext = cell.textContent.toLowerCase();
  if(celltext.includes(searchvalue)){
    found = true
  }
})
if(found){
  row.style.display = ""
}
else{
  row.style.display = "none"
}
  });
});

