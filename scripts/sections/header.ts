 $('./body') {
  insert_top("header", class: "mw-header") {
    
    $("//div[@id='SearchForm']/form//input[@type='image']") {
      wrap("div", class: "mw_search_btn sprites-search")
      attribute("style", "opacity:0;")
    }
    
    hide("//div[@id='AjaxLoading']")

    move_here("//div[@id='Header']") {
      attribute("data-ur-set", "toggler")
       
      move_here("//div[@id='Logo']") {
        attribute("style", "overflow:hidden")
        $("//div[@id='LogoContainer']"){
          attribute("style", "float:left;")
        }
        
        # Move top menu into #Logo container        
         move_here("//div[@id='TopMenu']", "bottom") {
            attribute("style", "float:right;")
            # Remove unwanted top menu items from upper menu
            remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
            
            #Change Account link image            
            $(".//li[@class='First']"){
              attribute("style", "list-style-type:none; display:inline-block;")
              $(".//a"){
                text("")
                add_class("sprites-user mw_logo_btn")
              }
            }
            # Change cart button background image
            $(".//li[contains(@class, 'CartLink')]"){
              attribute("style", "list-style-type:none; display:inline-block;")
              $(".//a"){
                text("")
                add_class("sprites-cart mw_logo_btn")
              }
            }
         }
      }

      
      # Insert HTML for bottom of header
      insert("div", class: "mw_header_bottom") {
        insert("div", class: "mw_search")
        insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
      }
      
      # Fill search HTML
      $("..//div[@class='mw_search']") {
        # Move search form into container element
        move_here("//div[@id='SearchForm']", "bottom") {
          remove("./p")
       
          $("./form") {
            remove("./label")
            add_class("mw_search_form")
            # Change search button background image
            $("./input[@type='image']") {
              wrap("div", class: "mw_search_btn sprites-search")
            }
            $("./input[@type='text']") {
              attribute("placeholder", "Search...")
            }
          }

          # Move menu items into header
          move_here("//div[@id='Menu']", "bottom") {
            attribute("data-ur-toggler-component", "content")
            
            # Move "Category List" element on bottom of #Menu element
            move_here("//div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
            move_here("li") {
              add_class("mw_bar2")
              $$("a"){
                insert("div", class: "sprites-menu_go")
              }
            }
            $$("ul") {
              #add_class("sprites-menu_go")
            }
          }
        }        
      }      
    }   
  }
 }
 