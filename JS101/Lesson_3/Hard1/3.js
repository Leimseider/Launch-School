function messWithVars(one, two, three) {
  // here on line 2 both local variable one and global variable one reference to the same 
  // array object. Same goes for variables two and three

 one = two; // this is reassignment, from now on local variable one is pointing to the object 
 //that local variable two was pointing t two  (at the moment one and two point to the same 
 //object). Note that global variable one still points to the same object `["one"]` 
 //as we didn't change anywhere what it references
 two = three; // as this is also reassignment, local variable two is now pointing to the same object as variable three and now local variables two and three point to the same object. Note that global variable two still points to the same object `["two"]` as we didn't change anywhere what it references
 three = two; // again, reassignment, local variable three points to the same object as local variable one, which is `["two"]` (we reassigned it up above) . And, global variable three wasn't changed so it still points to the same object.
}