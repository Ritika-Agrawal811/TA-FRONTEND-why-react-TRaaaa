class MovieItem {
  constructor(name, watched = false) {
    this._name = name;
    this._watched = watched;
  }

  get name() {
    return this._name;
  }

  set name(movieName) {
    this._name = movieName;
  }

  get watched() {
    return this._watched;
  }

  set watched(movieWatched) {
    this._watched = movieWatched;
  }
}

class MovieList {
  constructor(list) {
    this._list = list;
  }

  get list() {
    return this._list;
  }

  addItem(item) {
    this._list.push(item);
  }

  getUI(parent, item) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const button = document.createElement("button");

    h3.textContent = item.name;
    button.textContent = item.watched ? "Watched" : "To Watch";

    button.addEventListener("click", () => {
      item.watched = !item.watched;
      this.renderList(parent);
    });

    li.appendChild(h3);
    li.appendChild(button);

    return li;
  }

  renderList(parent) {
    parent.innerHTML = "";
    this.list.forEach((item) => {
      const li = this.getUI(parent, item);
      parent.appendChild(li);
    });
  }

  renderItem(parent, item) {
    const li = this.getUI(parent, item);
    parent.appendChild(li);
  }
}
