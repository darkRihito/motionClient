"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
import Head from "next/head";

import { finishRead } from "@/actions/finishread";
import { useUserStore } from "@/store/useUserStore";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import Loader from "@/components/loader/loader";

export default function page() {
  const { setType } = useBackground();

  const { userData } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const updateModulesCompleted = useUserStore(
    (state) => state.updateModulesCompleted
  );

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await finishRead(2);
      updateModulesCompleted(2);
      toast.success("Module Finished!");
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setType("bg-bkg0");
  }, []);
  return (
    <div className="">
      {isLoading && <Loader />}
      <div className="max-w-screen-md mx-auto mt-24 mb-16 bg-white rounded-lg p-4">
        <Head>
          <title>Word Forms</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">Word Forms</h1>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Definition of Word Forms and Their Importance in English Language
          </h2>
          <p className="text-justify leading-relaxed">
            Word forms refer to the different forms that a word can take to
            express variations in meaning, number, tense, and part of speech. In
            English, understanding and using correct word forms is crucial for
            several reasons:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Accuracy: Correct word forms ensure grammatical accuracy, which is
              fundamental for clear communication.
            </li>
            <li>
              Flexibility: Mastery of different word forms allows for greater
              flexibility in expression, enabling speakers and writers to convey
              subtle differences in meaning.
            </li>
            <li>
              Cohesion and Coherence: Proper use of word forms helps maintain
              cohesion and coherence in both spoken and written texts, making
              the information easier to follow and understand.
            </li>
            <li>
              Language Proficiency: Proficiency in using various word forms is
              often tested in academic and professional settings, including
              standardized tests like the TOEFL, and is essential for academic
              writing and professional communication.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Overview of the Four Main Types of Word Forms: Nouns, Verbs,
            Adjectives, and Adverbs
          </h3>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">1. Nouns:</h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Purpose:</span> Nouns are used to
              name people, places, things, ideas, or events.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Forms:</span> They can appear in
              singular or plural forms, and can be proper (specific names) or
              common. Nouns also vary in terms of being countable or
              uncountable.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "dog/dogs",
              "information" (uncountable), "London" (proper noun)
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">2. Verbs:</h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Purpose:</span> Verbs indicate
              actions, states, or occurrences.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Forms:</span> Verbs change form to
              indicate tense, mood, and voice. They can be regular or irregular
              in their past and past participle forms.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span>{" "}
              "walk/walked/walked" (regular), "go/went/gone" (irregular)
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              3. Adjectives:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Purpose:</span> Adjectives
              describe nouns, providing more information about their qualities,
              quantities, or states.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Forms:</span> Adjectives can be in
              positive, comparative, or superlative degrees.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span>{" "}
              "fast/faster/fastest"
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              4. Adverbs:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Purpose:</span> Adverbs modify
              verbs, adjectives, other adverbs, or whole sentences, often
              indicating manner, place, time, or degree.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Forms:</span> Many adverbs are
              formed by adding "-ly" to adjectives, though there are irregular
              forms.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "quick/quickly",
              "hard" (hardly has a different meaning)
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Nouns and Noun Forms
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Singular and Plural Forms
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Usage:</span>{" "}
            Singular nouns refer to one item, person, place, or concept, while
            plural nouns refer to more than one. The transition from singular to
            plural is typically marked by changes in the ending of a word,
            although English contains several irregular forms.
          </p>
          <p className="font-semibold mt-2">Examples and Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Regular formations add "-s" (dog/dogs), "-es" (bus/buses), or
              change "y" to "ies" (city/cities).
            </li>
            <li>
              Irregular formations include changes like "man/men,"
              "child/children," and "mouse/mice."
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Common and Proper Nouns
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Usage:</span> Common
            nouns are general names for things, without referring to the name of
            a specific entity. Proper nouns are specific names for particular
            individuals, places, organizations, or sometimes things, and they
            are always capitalized.
          </p>
          <p className="font-semibold mt-2">Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Common noun: "city," "woman," "chocolate"</li>
            <li>Proper noun: "Paris," "Elizabeth," "Coca-Cola"</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Countable and Uncountable Nouns
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Usage:</span>{" "}
            Countable nouns can be counted as individual units and have both
            singular and plural forms (e.g., "apple/apples"). Uncountable nouns
            (sometimes called "mass nouns") cannot be counted individually and
            do not typically have a plural form. They often refer to substances,
            concepts, or collective categories.
          </p>
          <p className="font-semibold mt-2">Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Countable: "car/cars," "idea/ideas"</li>
            <li>Uncountable: "information," "rice," "equipment"</li>
          </ul>
          <p className="font-semibold mt-2">Special Notes:</p>
          <p className="text-justify leading-relaxed">
            Uncountable nouns can sometimes be made countable to express a
            certain type or quantity, like "two coffees" (referring to two cups
            of coffee) or "several musics" (referring to types or genres of
            music).
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Compound Nouns
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Usage:</span>{" "}
            Compound nouns are formed by combining two or more words to create a
            new noun with a specific meaning that often differs from the simple
            combination of the individual words.
          </p>
          <p className="font-semibold mt-2">Formation:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Compound nouns can be written as one word ("toothpaste"),
              hyphenated ("mother-in-law"), or as separate words ("high
              school").
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>One word: "notebook," "sunflower"</li>
            <li>Hyphenated: "check-in," "well-being"</li>
            <li>Two words: "swimming pool," "coffee shop"</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Verb Forms
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Base, Past, and Past Participle Forms
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Usage:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Base Form: The simplest form of a verb without any tenses or
              agreement with subjects. It is used in the simple present tense
              except in the third person singular.
            </li>
            <li>
              Past Form: This form indicates that the action occurred in the
              past.
            </li>
            <li>
              Past Participle: Often used in perfect tenses and passive voice,
              it represents completed actions or states.
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Base: go, see, write</li>
            <li>Past: went, saw, wrote</li>
            <li>Past Participle: gone, seen, written</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Regular and Irregular Verbs
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">
              Definition and Characteristics:
            </span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Regular Verbs: These verbs follow a standard pattern in forming
              their past and past participle forms by adding "-ed," "-d," or
              "-ied" to the base form.
            </li>
            <li>
              Irregular Verbs: These verbs do not follow standard patterns and
              their past and past participle forms must often be memorized as
              they vary significantly from the base form.
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Regular: walk/walked/walked, play/played/played</li>
            <li>Irregular: begin/began/begun, drink/drank/drunk</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Gerunds and Infinitives
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Usage:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Gerunds: These are verb forms that end in "-ing" and function as
              nouns within sentences.
            </li>
            <li>
              Infinitives: The "to" form of the verb (e.g., to eat, to sleep),
              used as nouns, adjectives, or adverbs.
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples and Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Gerunds: Swimming is fun. (Swimming acts as the subject of the
              verb is.)
            </li>
            <li>
              Infinitives: I like to swim. (Here, "to swim" acts as the object
              of the verb like.)
            </li>
          </ul>
          <p className="font-semibold mt-2">Special Notes:</p>
          <p className="text-justify leading-relaxed">
            Some verbs and expressions require specific forms, either gerunds or
            infinitives, which can alter the meaning or grammatical correctness.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Transitive and Intransitive Verbs
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">
              Definition and Characteristics:
            </span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Transitive Verbs: These verbs require a direct object to complete
              their meaning.
            </li>
            <li>
              Intransitive Verbs: These verbs do not require a direct object and
              complete their meaning independently.
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Transitive: She loves her dog. (The verb loves requires the object
              her dog.)
            </li>
            <li>
              Intransitive: He sleeps. (The verb sleeps does not require an
              object to complete its meaning.)
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Adjective Forms
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Positive, Comparative, and Superlative Degrees
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Usage:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Positive Degree: This is the base form of the adjective and
              describes a noun without comparing it to others.
            </li>
            <li>
              Comparative Degree: This form compares differences between two
              things or people.
            </li>
            <li>
              Superlative Degree: This form compares more than two things,
              indicating the highest degree.
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples and Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Positive: big, fast, beautiful</li>
            <li>Comparative: bigger, faster, more beautiful</li>
            <li>Superlative: biggest, fastest, most beautiful</li>
          </ul>
          <p className="font-semibold mt-2">
            Forming Comparatives and Superlatives:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              For short adjectives, add "-er" for the comparative and "-est" for
              the superlative (e.g., tall/taller/tallest).
            </li>
            <li>
              For longer adjectives, use "more" for the comparative and "most"
              for the superlative (e.g., interesting/more interesting/most
              interesting).
            </li>
            <li>
              Irregular forms include good/better/best and bad/worse/worst.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Adjectives Derived from Verbs (Participles)
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">
              Definition and Characteristics:
            </span>
          </p>
          <p className="text-justify leading-relaxed">
            Participles: These are verb forms used as adjectives. There are two
            types: present participles (ending in "-ing") and past participles
            (usually ending in "-ed," "-d," "-t," "-en," or "-n").
          </p>
          <p className="font-semibold mt-2">Examples and Usage:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Present Participle: The charming host greeted us warmly. (Charming
              describes the host.)
            </li>
            <li>
              Past Participle: The broken vase was on the floor. (Broken
              describes the vase.)
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Order of Adjectives in a Sentence
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Importance:</span>{" "}
            English often uses a specific order when multiple adjectives are
            used before a noun. This order is usually not random and follows a
            general pattern that native speakers typically use subconsciously.
          </p>
          <p className="font-semibold mt-2">General Order:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Quantity or Number: two, several, many</li>
            <li>Opinion: beautiful, boring, exciting</li>
            <li>Size: big, small, tall</li>
            <li>Age: old, young, new</li>
            <li>Shape: round, square, rectangular</li>
            <li>Color: red, black, green</li>
            <li>Origin: French, lunar, American</li>
            <li>Material: cotton, wood, metal</li>
            <li>Purpose: racing (car), sleeping (bag)</li>
          </ul>
          <p className="font-semibold mt-2">Example:</p>
          <p className="text-justify leading-relaxed">
            "She bought two beautiful old Italian leather chairs."
          </p>
          <p className="font-semibold mt-2">Explanation:</p>
          <p className="text-justify leading-relaxed">
            The adjectives are ordered according to quantity (two), opinion
            (beautiful), age (old), origin (Italian), and material (leather).
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Adverb Forms
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Formation of Adverbs from Adjectives
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Usage:</span> Adverbs
            modify verbs, adjectives, other adverbs, or entire sentences,
            providing additional information about how, when, where, and to what
            extent something happens. Many adverbs are formed by adding "-ly" to
            adjectives, though there are exceptions and irregular forms.
          </p>
          <p className="font-semibold mt-2">Examples and Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Adjective to Adverb: quick (adjective) becomes quickly (adverb);
              careful becomes carefully.
            </li>
            <li>
              Irregular forms: good becomes well; fast remains fast (both as an
              adjective and an adverb).
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Placement of Adverbs in Sentences
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Importance:</span>{" "}
            The placement of an adverb can affect the meaning of a sentence or
            clause. Generally, adverbs should be placed as close as possible to
            the words they modify to avoid ambiguity.
          </p>
          <p className="font-semibold mt-2">Examples and Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Manner: Place adverbs of manner directly after the verb or object
              they modify.
              <ul className="list-disc list-inside ml-4">
                <li>Example: She speaks softly. (Modifies the verb speaks)</li>
              </ul>
            </li>
            <li>
              Frequency and Degree: These are typically placed before the main
              verb but after auxiliary verbs.
              <ul className="list-disc list-inside ml-4">
                <li>Example: He often visits. (Modifies the verb visits)</li>
                <li>
                  Example: She has never been late. (Modifies the verb phrase
                  been late)
                </li>
              </ul>
            </li>
            <li>
              Place and Time: These are usually placed at the end of the clause.
              <ul className="list-disc list-inside ml-4">
                <li>Example: I met him yesterday. (Time)</li>
                <li>Example: They went outside. (Place)</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Types of Adverbs
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Frequency:</span> Indicates how
              often something occurs.
              <ul className="list-disc list-inside ml-4">
                <li>Examples: always, frequently, never, sometimes</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Manner:</span> Describes how an
              action is performed.
              <ul className="list-disc list-inside ml-4">
                <li>Examples: quickly, slowly, warmly, sharply</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Degree:</span> Shows the extent or
              level of an action or adjective.
              <ul className="list-disc list-inside ml-4">
                <li>Examples: very, quite, almost, too</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Place:</span> Tells where an
              action occurs.
              <ul className="list-disc list-inside ml-4">
                <li>Examples: here, there, everywhere, nowhere</li>
              </ul>
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples in Sentences:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Frequency: He frequently writes in his journal.</li>
            <li>Manner: She danced gracefully at the party.</li>
            <li>Degree: The task was almost completed by noon.</li>
            <li>Place: We looked everywhere for the missing keys.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Mistakes with Word Forms
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Misuse of Forms in Incorrect Grammatical Contexts
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Examples:</span>{" "}
            Misusing word forms involves applying an incorrect form of a word
            (e.g., noun, verb, adjective, adverb) in a given grammatical
            context. This often leads to sentences that sound incorrect or are
            grammatically inaccurate.
          </p>
          <p className="font-semibold mt-2">Common Errors:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Incorrect Verb Forms: Using the wrong tense or verb form can
              change the meaning or make the sentence unclear.
              <ul className="list-disc list-inside ml-4">
                <li>Incorrect: "She is gone to school yesterday."</li>
                <li>Correct: "She went to school yesterday."</li>
              </ul>
            </li>
            <li>
              Improper Adjective or Adverb Use: Confusing adjectives and
              adverbs, which respectively describe nouns and modify verbs, can
              lead to grammatical errors.
              <ul className="list-disc list-inside ml-4">
                <li>Incorrect: "She runs quick."</li>
                <li>Correct: "She runs quickly."</li>
              </ul>
            </li>
            <li>
              Noun Number Errors: Misusing singular and plural forms of nouns
              can lead to agreement errors.
              <ul className="list-disc list-inside ml-4">
                <li>Incorrect: "There is many reasons for his absence."</li>
                <li>Correct: "There are many reasons for his absence."</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Overuse of Certain Forms Leading to Redundancy or Awkwardness
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Examples:</span>{" "}
            Overusing certain grammatical forms, such as overly complex verb
            constructions or excessive adjectives, can make sentences redundant
            or awkwardly constructed, impacting readability and listener
            comprehension.
          </p>
          <p className="font-semibold mt-2">Common Errors:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Redundant Modifiers: Using unnecessary words that don’t add
              meaningful information.
              <ul className="list-disc list-inside ml-4">
                <li>Incorrect: "I met with an old elderly man."</li>
                <li>Correct: "I met with an elderly man."</li>
              </ul>
            </li>
            <li>
              Overuse of Passive Voice: Frequent use of the passive voice can
              make sentences overly complicated and vague.
              <ul className="list-disc list-inside ml-4">
                <li>Overused: "The book was read by her."</li>
                <li>Improved: "She read the book."</li>
              </ul>
            </li>
            <li>
              Excessive Adverbs: Adding too many adverbs, especially in close
              proximity, can clutter a sentence and detract from the main point.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Overused: "She really quickly completely finished the
                  project."
                </li>
                <li>Improved: "She quickly finished the project."</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Guidelines for Correction and Improvement
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Conciseness and Precision:</span>{" "}
              Aim for clarity and brevity by choosing the simplest accurate
              form. Avoid unnecessary modifiers and ensure that each word adds
              value to the sentence.
            </li>
            <li>
              <span className="font-semibold">
                Grammar Review and Practice:
              </span>{" "}
              Regularly review basic grammar rules related to verb tenses, noun
              forms, and modifiers. Practice identifying and correcting errors
              in sample sentences or your writing.
            </li>
            <li>
              <span className="font-semibold">Read Aloud and Edit:</span>{" "}
              Reading text aloud can help you catch errors and assess the
              natural flow of your language. Edit to improve clarity and
              fluidity, removing or replacing awkward constructions.
            </li>
            <li>
              <span className="font-semibold">Feedback and Revision:</span> Seek
              feedback on your writing and speaking from teachers, peers, or
              through language learning platforms. Use this feedback to focus on
              recurring mistakes.
            </li>
          </ul>
        </section>
        {userData ? (
          <>
            {userData?.modules_completed[2] ? (
              <>
                <div className="flex w-fit items-center gap-2 py-2.5 ps-3 pe-4 cursor-pointer bg-gray-400 text-white rounded-lg mt-3">
                  <IoArrowBack className="text-xl" />
                  Back to Module Page
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={handleClick}
                  className="flex w-fit items-center gap-2 py-2.5 ps-3 pe-4 cursor-pointer bg-green-400 text-white rounded-lg mt-3"
                >
                  <div className="relative sm:w-8 sm:h-8 h-6 w-6 flex-none">
                    <Image
                      alt=""
                      fill
                      sizes="100%"
                      src="/assets/icon/finish-read.png"
                    />
                  </div>
                  Finish Read!
                </div>
              </>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
