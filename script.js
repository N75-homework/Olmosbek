let count = 0;


const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
            const styles = e.currentTarget.classList;
            if (styles.contains("manfiy")) {
                  count--;
            } else if (styles.contains("musbat")) {
                  count++;
            } else {
                  count = 0
            }
            if (count > 0) {
                  value.style.color = "yellow"
            }
            if (count < 0) {
                  value.style.color = "red"
            }
            if (count === 0) {
                  value.style.color = "#222"
            }
            value.textContent = count;
      })
})