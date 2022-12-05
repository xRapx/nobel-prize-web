var postAPI = "../data.json";
fetch(postAPI)
  .then(function (response) {
    // console.log(response);
    return response.json(); //return về 1 mảng chứa Object và javacript types
  })
  .then((data) => {
    // console.log(data)
    // ------------------------Sreach Bar --------------------------
    var search = document.getElementById('search');
    var matchlist = document.getElementById('match-list');

    const searchStates = async searchText => {
      const states = data;
      //regex
      let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex);
      });

      if (searchText.length === 0) {
        matches = [];
      }
      outputHtml(matches);
    }
    //show data in html
    const outputHtml = matches => {
      const html = matches.map(match => `
      <figure class="snip1576" style="display: inline-flex;">
      <img style="width: 325px;" src="${match.image}" alt="sample104" />
      <figcaption>
        <h3>${match.name}<span>${match.nganh}</span><span style="font-size:15px;">${match.data}</span></h3>
      </figcaption>
      <a href="#"></a>
    </figure>`
      ).join('');
      matchlist.innerHTML = html;
    }
    search.addEventListener('input', () => searchStates(search.value))
  })