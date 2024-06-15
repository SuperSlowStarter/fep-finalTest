const onClickAdd = () => {
  const textEl = document.getElementById("add-text");
  const text = textEl.value; //input태그에 내가 적은 값
  textEl.value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");

  alert("진쨔 만든당?");
  prompt("만들거면 사랑한다고 말해!");
  const p = document.createElement("p"); //이게 p태그를 만들고 거기에 input태그에 적었던 거를 적어주는 거죠
  p.textContent = text;

  const button = document.createElement("button");
  button.textContent = "삭제";

  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");
    alert("진짜로 삭제할거냥??");
    let password = prompt("삭제할거면 비밀번호 입력해라냥");
    if (password == 1234) {
      document.getElementById("memo-list").removeChild(deleteTarget);
    }
  });

  div.appendChild(p);
  div.appendChild(button);

  li.appendChild(div);
  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
