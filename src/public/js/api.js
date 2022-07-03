const fetchBooks = async () => {
  await fetch('http://127.0.0.1:3000/api/v1/books')
    .then((response) => response.json())
    .then((data) => {
      let tab = `<thead>
                  <tr>
                      <th>title</th>
                      <th>isbn</th>
                      <th>pageCount</th>
                      <th>publishedDate</th>
                      <th>thumbnailUrl</th>
                      <th>shortDescription</th>
                      <th>status</th>
                      <th>authors</th>
                      <th>categories</th>
                      <th>Actions</th>
                  </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>title</th>
                      <th>isbn</th>
                      <th>pageCount</th>
                      <th>publishedDate</th>
                      <th>thumbnailUrl</th>
                      <th>shortDescription</th>
                      <th>status</th>
                      <th>authors</th>
                      <th>categories</th>
                      <th>Actions</th>
                    </tr>
                  </tfoot>`;
      data.map((values) => {
        tab += `<tbody>
                  <tr>
                  <td>${values.title}</td>
                  <td>${values.isbn}</td>
                  <td>${values.pageCount}</td>
                  <td>${values.publishedDate}</td>
                  <td><img src="${values.thumbnailUrl}" alt="${values.title}"></td>
                  <td>${values.shortDescription}</td>
                  <td>${values.status}</td>
                  <td>${values.authors}</td>
                  <td>${values.categories}</td>
                  <td><a href="edit" class="btn btn-warning">Edit</a><a href="hapus" class="btn btn-danger">Hapus</a></td>
                  </tr>
                </tbody>`;
      });
      document.getElementById('datatablesSimple').innerHTML = tab;
    })
    .catch(() => 'Error');
};

fetchBooks();
