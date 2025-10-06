let contents = [
    {
        title:"这仅仅是个测试",
        url:"contents/fov/index.html"
    }
];

let _create_a_element = function(content) {
    let node = document.createElement("li");
    node.innerHTML = "<a href="+ content.url + ">" + content.title + "</a>";
    return node;
}


var showContent = function() {
    let root = document.getElementById("contents");
    contents.forEach((item) => {
        let element = _create_a_element(item);
        root.appendChild(element);
    })
    return root;
}
showContent();
