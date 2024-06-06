"use client";
import React, { useState, useEffect } from "react";
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
import { FaAngleDown } from "react-icons/fa6";

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);

  const [detailsVisible, setDetailsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [translationsVisible, setTranslationsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const data = [
    {
      title: "Subject-verb Agreement",
      detail:
        "Subject-Verb Agreement is a fundamental grammar rule that ensures the subject of a sentence and its verb agree in number. This means singular subjects take singular verbs, and plural subjects take plural verbs. Mastering this rule is essential for clear and correct sentence construction in English. In this module, we will explore the rules and nuances of subject-verb agreement, identify common pitfalls.",
      translation:
        "Kesepakatan Subjek-Kata Kerja adalah aturan tata bahasa dasar yang memastikan subjek dari sebuah kalimat dan kata kerjanya setuju dalam jumlah. Ini berarti subjek tunggal mengambil kata kerja tunggal, dan subjek jamak mengambil kata kerja jamak. Menguasai aturan ini sangat penting untuk konstruksi kalimat yang jelas dan benar dalam bahasa Inggris. Dalam modul ini, kami akan mengeksplorasi aturan dan nuansa dari kesepakatan subjek-kata kerja, mengidentifikasi kesalahan umum.",
    },
    {
      title: "Verb-tense Agreement",
      detail:
        "Verb-tense Agreement ensures that verbs correctly reflect the time of the actions or states described in the sentence. Consistency in verb tenses is crucial for clarity and coherence. This module covers the rules for maintaining verb-tense agreement across various sentence structures and contexts.",
      translation:
        "Kesepakatan Waktu Kata Kerja memastikan bahwa kata kerja secara benar mencerminkan waktu dari tindakan atau keadaan yang dijelaskan dalam kalimat. Konsistensi dalam waktu kata kerja sangat penting untuk kejelasan dan koherensi. Modul ini mencakup aturan untuk menjaga kesepakatan waktu kata kerja di berbagai struktur kalimat dan konteks.",
    },
    {
      title: "Word Forms",
      detail:
        "Using the correct word form is essential for grammatical accuracy and meaning. This includes correctly using nouns, verbs, adjectives, and adverbs. This module will guide you through the rules and common errors in using the correct word forms.",
      translation:
        "Menggunakan bentuk kata yang benar sangat penting untuk akurasi tata bahasa dan makna. Ini termasuk menggunakan kata benda, kata kerja, kata sifat, dan kata keterangan dengan benar. Modul ini akan membimbing Anda melalui aturan dan kesalahan umum dalam menggunakan bentuk kata yang benar.",
    },
    {
      title: "Reduced Clause",
      detail:
        "Reduced clauses are shortened forms of clauses that help make sentences more concise and varied. This module covers how to form and use reduced clauses correctly, enhancing your writing and comprehension skills.",
      translation:
        "Klausa yang dipersingkat adalah bentuk klausa yang diperpendek yang membantu membuat kalimat lebih ringkas dan bervariasi. Modul ini membahas cara membentuk dan menggunakan klausa yang dipersingkat dengan benar, meningkatkan keterampilan menulis dan pemahaman Anda.",
    },
    {
      title: "Connectors",
      detail:
        "Connectors are words and phrases that link ideas and sentences together, ensuring logical flow and coherence in writing. This module explores different types of connectors and their correct usage in various contexts.",
      translation:
        "Konektor adalah kata dan frasa yang menghubungkan ide dan kalimat bersama, memastikan aliran logis dan koherensi dalam penulisan. Modul ini mengeksplorasi berbagai jenis konektor dan penggunaannya yang benar dalam berbagai konteks.",
    },
    {
      title: "Gerund and Infinitive",
      detail:
        "Gerunds and infinitives are verb forms that function as nouns. Choosing between them can be tricky, as different verbs and contexts require specific forms. This module provides comprehensive rules and practice for mastering gerunds and infinitives.",
      translation:
        "Gerund dan infinitive adalah bentuk kata kerja yang berfungsi sebagai kata benda. Memilih di antara keduanya bisa menjadi rumit, karena berbagai kata kerja dan konteks membutuhkan bentuk tertentu. Modul ini menyediakan aturan komprehensif dan latihan untuk menguasai gerund dan infinitive.",
    },
    {
      title: "Comparisons",
      detail:
        "Comparisons are used to show similarities and differences between people, things, or ideas. This module covers the grammatical structures for making comparisons and avoiding common errors.",
      translation:
        "Perbandingan digunakan untuk menunjukkan kesamaan dan perbedaan antara orang, benda, atau ide. Modul ini membahas struktur tata bahasa untuk membuat perbandingan dan menghindari kesalahan umum.",
    },
    {
      title: "Clause-formation",
      detail:
        "Clauses are the building blocks of sentences, containing a subject and a verb. This module explains different types of clauses and how to form them correctly to enhance your writing complexity and variety.",
      translation:
        "Klausa adalah unsur dasar dari kalimat, yang mengandung subjek dan kata kerja. Modul ini menjelaskan berbagai jenis klausa dan cara membentuknya dengan benar untuk meningkatkan kompleksitas dan variasi penulisan Anda.",
    },
    {
      title: "Parallel Structure",
      detail:
        "Parallel structure involves using the same grammatical form within a sentence to ensure clarity and balance. This module explains the rules and importance of maintaining parallel structure in writing.",
      translation:
        "Struktur paralel melibatkan penggunaan bentuk tata bahasa yang sama dalam sebuah kalimat untuk memastikan kejelasan dan keseimbangan. Modul ini menjelaskan aturan dan pentingnya menjaga struktur paralel dalam penulisan.",
    },
    {
      title: "Redundancy",
      detail:
        "Redundancy occurs when unnecessary words or phrases are used, making writing verbose and repetitive. This module teaches how to identify and eliminate redundancy to improve writing clarity and conciseness.",
      translation:
        "Redundansi terjadi ketika kata atau frasa yang tidak perlu digunakan, membuat penulisan menjadi bertele-tele dan repetitif. Modul ini mengajarkan cara mengidentifikasi dan menghilangkan redundansi untuk meningkatkan kejelasan dan keringkasan penulisan.",
    },
  ];

  const toggleDetails = (index) => {
    setDetailsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const toggleTranslation = (index) => {
    setTranslationsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <>
      <div className="">
        <div className="max-w-screen-md mx-auto mt-24 mb-16">
          <div
            className="animate-slideIn opacity-0"
            style={{ "--delay": 0.25 + "s" }}
          >
            <div className="w-full mt-12 text-center">
              <p className="text-xl font-semibold mb-1">Welcome!</p>
              <h2 className="text-4xl font-bold mb-4">Material Archive</h2>
              <p>
                This page contains modules about structure and written
                expression.
              </p>
            </div>
          </div>

          <div
            className="animate-slideIn opacity-0"
            style={{ "--delay": 0.5 + "s" }}
          >
            <div className="w-full mt-12">
              <p className="text-xl font-semibold mb-1">
                Why These Topics Matter
              </p>
              <p>
                Mastering the topics below is essential for excelling in the
                TOEFL exam. Each module focuses on a key aspect of English
                grammar and usage, providing you with the skills needed to
                construct clear and correct sentences. Understanding these
                topics will not only help you in standardized tests but also
                improve your overall proficiency in English, making you a more
                effective communicator in academic and professional settings.
              </p>
            </div>
          </div>

          <div
            className="animate-slideIn opacity-0"
            style={{ "--delay": "0.75s" }}
          >
            <div className="w-full mt-8 flex flex-col justify-center items-center gap-3 px-3">
              {data.map((item, index) => (
                <div key={index} className="w-full ">
                  <div
                    onClick={() => toggleDetails(index)}
                    className={`h-16 w-full ${
                      detailsVisible[index] ? "rounded-t-lg" : "rounded-lg"
                    } bg-white flex justify-between items-center px-4 cursor-pointer`}
                  >
                    <span className="text-lg font-semibold">
                      {index + 1}) {item.title}
                    </span>
                    <button className="text-blue-500 text-xl">
                      <FaAngleDown />
                    </button>
                  </div>
                  {detailsVisible[index] && (
                    <div className="w-full bg-white rounded-b-lg px-4 pb-4 flex flex-col">
                      <div className="">
                        <a
                          className="w-fit self-end mt-2 cursor-pointer"
                          onClick={() => toggleTranslation(index)}
                        >
                          {">"} Translate
                        </a>
                        <p className="mt-2">
                          {translationsVisible[index]
                            ? item.translation
                            : item.detail}
                        </p>
                      </div>
                      <div className=""></div>

                      <button className="w-fit mt-2 bg-blue-400 text-white py-2 px-4 rounded-lg">
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
