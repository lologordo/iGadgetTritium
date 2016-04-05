$("./body") {
  add_class("mw-product")
 
  insert_at("top", "div", "Hello, Tritium!") 
  $("./div") {
    $headerTxt = fetch("text()")
    insert_at("top", "div", $headerTxt + " div1")
    insert_at("top", "div", $headerTxt + " div2")
    insert_at("top", "div", $headerTxt + " div3")
  }
  
  #not working below
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {      
      $("./div[@class='Content ']") {
         insert("div", "STUFF AND THINGS")
        
        $("./div[@id='ProductDetails']") {
       
          #$("./div[@class='BlockContent']") {
            # Move page title on top of the content area
            $("./h2") {
              move_to("..", "top")
            }
            
          #}
        }
      }
    }
  }
}