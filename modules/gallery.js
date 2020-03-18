export function gallery(data, parent) {
    data.forEach(d => {
        const t = document.createElement("img");
        t.src = "imgs/" + d.i;
        parent.appendChild(t);
    });
}