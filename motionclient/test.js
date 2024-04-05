class BKTAlgorithm {
    constructor() {
      this.currentJawaban = "";
      this.currentKunciJawaban = "";
      this.kunciJawaban = [];
      this.generatedNumbersEasy = [];
      this.generatedNumbersMed = [];
      this.generatedNumbersHard = [];
      this.easyQuestions = [];
      this.mediumQuestions = [];
      this.hardQuestions = [];
      this.easyQuestionsKunci = [];
      this.mediumQuestionsKunci = [];
      this.hardQuestionsKunci = [];
      this.totalSoal = 1;
      this.knowledge = 0.4; // Pengetahuan awal
      this.learnRate = 0.3;
      this.guessRate = 0.1;
      this.slipRate = 0.05;
      this.currentHealth = 3;
      this.jawabanBenar = 0;
      this.jawabanSalah = 0;
  
      // Bind method jika diperlukan
      this.startBKTLevel3 = this.startBKTLevel3.bind(this);
      this.checkAnswer = this.checkAnswer.bind(this);
      this.updateKnowledge = this.updateKnowledge.bind(this);
      this.gameOver = this.gameOver.bind(this);
      this.checkSoal = this.checkSoal.bind(this);
    }
  
    showRandomQuestion(questionList) {
      if (questionList.length > 0) {
        const randomIndex = this.getUniqueRandomNumber(
          this.generatedNumbers,
          questionList
        );
        const selectedQuestion = questionList[randomIndex];
        // Asumsikan elemen pertanyaan adalah objek dengan properti `text` dan `answerKey`
        this.currentKunciJawaban = selectedQuestion.answerKey;
        // Asumsikan ada metode atau mekanisme untuk menampilkan pertanyaan ini ke pengguna
        console.log(`Pertanyaan: ${selectedQuestion.text}`);
      } else {
        console.warn("No questions available.");
      }
    }
  
    checkAnswer() {
      this.totalSoal++;
      let isCorrect =
        this.currentJawaban.toLowerCase().trim() ===
        this.currentKunciJawaban.toLowerCase().trim();
      if (isCorrect) {
        console.log("Jawaban Benar!");
        this.currentHealth = Math.min(this.currentHealth + 1, 3); // Asumsikan maksimal health adalah 3
      } else {
        console.log("Jawaban Salah!");
        this.currentHealth--;
      }
      this.updateKnowledge(isCorrect);
      this.checkSoal();
    }
  
    getUniqueRandomNumber(generatedNumbers, questionList) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * questionList.length);
      } while (generatedNumbers.includes(randomNumber));
      generatedNumbers.push(randomNumber);
      return randomNumber;
    }
  
    updateKnowledge(isCorrect) {
      const pLearn =
        (this.knowledge * (1 - this.slipRate)) /
        (this.knowledge * (1 - this.slipRate) +
          (1 - this.knowledge) * this.guessRate);
      const pGuess =
        ((1 - this.knowledge) * this.guessRate) /
        ((1 - this.knowledge) * this.guessRate + this.knowledge * this.slipRate);
      if (isCorrect) {
        this.knowledge = this.knowledge + (1 - this.knowledge) * pLearn;
        this.jawabanBenar++;
      } else {
        this.knowledge = this.knowledge * (1 - pGuess);
        this.jawabanSalah++;
      }
    }
  
    gameOver(index) {
      // Asumsikan ini adalah logika untuk mengatur ulang permainan atau memuat ulang halaman
      // dalam konteks web, bisa jadi melakukan redirect atau reload
      console.log(`Game Over. Level: ${index}`);
      // Reset atau navigasi ke halaman/state lain bisa dilakukan di sini
    }
  
    checkSoal() {
      if (this.currentHealth <= 0) {
        console.log("Kalah. Menampilkan panel kekalahan.");
        // Tampilkan panel kekalahan atau lakukan tindakan yang sesuai
      } else if (this.totalSoal >= 10) {
        console.log("Menang. Menampilkan panel kemenangan.");
        // Tampilkan panel kemenangan atau lakukan tindakan yang sesuai
      }
      // Logika tambahan untuk memeriksa kondisi lain bisa ditambahkan di sini
    }
  }
  
  // Contoh penggunaan
  const bktAlgorithm = new BKTAlgorithm();
  bktAlgorithm.startBKTLevel3();
  