function searchMovie() {
    $("#movie-list").html("");
  
    $.ajax({
      url: "https://www.omdbapi.com",
      type: "get",
      dataType: "json",
      data: {
        apikey: "4046b94d",
        s: $("#search-input").val()
      },
      success: function(result) {
        if (result.Response == "True") {
          let movies = result.Search;
  
          $.each(movies, function(i, data) {
            $("#movie-list").append(
              `
              
              <div class="col-md-3">
                  <div class="card mb-3">
                      <img class="card-img-top" src=` +
                data.Poster +
                ` alt="Card image cap">
                      <div class="card-body">
                          <h5 class="card-title">` +
                data.Title +
                `</h5>
                          <h6 class="card-subtitle mb-2 text-muted">` +
                data.Year +
                `</h6>
                          <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id=` +
                data.imdbID +
                `>Detail</a>
                      </div>
                  </div>
              </div>
              `
            );
          });
  
          $("#search-input").val("");
        } else {
          $("#movie-list").html(
            `
          <div class = "col">
              <h1 class="text-center">` +
              result.Error +
              `</h1>
          </div>        
          `
          );
        }
      }
    });
  }
  
  $("#search-button").on("click", function() {
    searchMovie();
  });
  
  $("#search-input").on("keyup", function(e) {
    if (e.keyCode === 13) {
      searchMovie();
    }
    //
  });

