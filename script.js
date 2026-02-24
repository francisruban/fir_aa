      function openLetter() {
        document.getElementById("envelope-wrapper").classList.add("open");
        document.getElementById("full-screen-letter").classList.add("open");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      function closeLetter() {
        document.getElementById("envelope-wrapper").classList.remove("open");
        document.getElementById("full-screen-letter").classList.remove("open");
      }

      function updateCountdown() {
        const weddingDate = new Date("May 3, 2026 10:30:00").getTime();
        const now = new Date().getTime();
        const gap = weddingDate - now;

        if (gap > 0) {
          const days = Math.floor(gap / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          const mins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
          const secs = Math.floor((gap % (1000 * 60)) / 1000);

          document.getElementById("days").innerText = days
            .toString()
            .padStart(2, "0");
          document.getElementById("hours").innerText = hours
            .toString()
            .padStart(2, "0");
          document.getElementById("mins").innerText = mins
            .toString()
            .padStart(2, "0");

          const secsElement = document.getElementById("secs");
          secsElement.innerText = secs.toString().padStart(2, "0");

          if (!secsElement.classList.contains("ticking-effect")) {
            secsElement.classList.add("ticking-effect");
          }
        } else {
          document.getElementById("countdown").innerHTML =
            "<h1>The Wedding Day is Here!</h1>";
        }
      }

      setInterval(updateCountdown, 1000);
      updateCountdown();