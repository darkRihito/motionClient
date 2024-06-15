"use client";
import React, { useState, useEffect } from "react";
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
import Head from "next/head";

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);
  return (
    <div className="">
      <div className="max-w-screen-md mx-auto mt-24 mb-16 bg-white rounded-lg p-4">
        <Head>
          <title>Verb-tense Agreement</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Verb-tense Agreement
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Verb-tense Agreement
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition and Significance in English Grammar
          </h3>
          <p className="text-justify leading-relaxed">
            Verb-tense agreement is a crucial aspect of English grammar that
            ensures the verb tense used in a sentence accurately reflects the
            timing of the action relative to the speaker's point of reference.
            It involves choosing verb forms that are consistent with the
            temporal context of the other verbs within the same sentence or a
            textual passage. This agreement is essential for maintaining
            temporal coherence across a narrative or discourse.
          </p>
          <p className="text-justify leading-relaxed">
            Verbs in English express not only time but also aspect, mood, and
            voice, which all contribute to the rich tapestry of English
            expression. The correct use of verb tenses helps in narrating events
            in the past, discussing current realities, and planning for future
            occurrences, thus playing a pivotal role in the structuring of
            narratives and arguments.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            The Role of Verb-tense Agreement in Clear Communication
          </h3>
          <p className="text-justify leading-relaxed">
            Verb-tense agreement is foundational for clear and effective
            communication. It helps the listener or reader understand when an
            action or event took place, its duration, and its completeness or
            ongoing nature. In both spoken and written English, maintaining
            consistent verb tenses helps prevent confusion and misinterpretation
            of the events described.
          </p>
          <p className="text-justify leading-relaxed">
            For instance, inconsistency in verb tense can lead a listener or
            reader to misunderstand the sequence or the timing of events, which
            is particularly problematic in settings such as academic writing,
            professional communication, and storytelling. In academic tests like
            the TOEFL, poor verb-tense agreement can significantly lower the
            clarity and coherence of responses, impacting scores adversely.
          </p>
          <p className="text-justify leading-relaxed">
            In everyday communication, proper verb-tense usage facilitates
            precise and effective expression of thoughts, ensuring that
            conversations are coherent and that all parties understand the
            temporal context of the discussion. For example, when narrating an
            event, switching tenses improperly can confuse the listener about
            whether the event is ongoing or completed.
          </p>
          <p className="font-semibold mt-2">Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Correct Agreement: I saw that she was tired, so I didn't ask her
              to join us.
            </li>
            <li>
              Incorrect Agreement: I see that she was tired, so I didn't ask her
              to join us.
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            The correct use of verb tenses not only enhances the clarity of
            communication but also enriches the language, allowing speakers to
            express a wide range of temporal relationships and nuances. As such,
            mastering verb-tense agreement is essential for anyone looking to
            achieve proficiency in English, making it a critical topic for TOEFL
            preparation and beyond.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Review of English Verb Tenses
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Overview of All English Tenses (Present, Past, Future)
          </h3>
          <p className="text-justify leading-relaxed">
            English verbs are primarily categorized into three basic time
            frames: present, past, and future. Each of these time frames can be
            expressed in four aspects: simple, continuous, perfect, and perfect
            continuous. The aspect helps convey whether an action is completed,
            ongoing, or completed at some point but bearing relevance to another
            time.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Simple Tenses
          </h3>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              1. Present Simple:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> Describes habitual
              actions, general truths, and fixed arrangements.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "She walks to
              school."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> This implies
              that walking to school is a regular activity for her, showing
              habitual action.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              2. Past Simple:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> Used for actions
              completed at a specific time in the past.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "They visited
              Japan last year."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Indicates the
              action was completed in the past, with "last year" specifying
              when.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              3. Future Simple:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> Often used for
              immediate decisions, promises, and predictions.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "I will call you
              tomorrow."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Expresses a
              promise or a decision made at the moment of speaking, with the
              action expected in the future.
            </p>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Continuous Tenses
          </h3>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              1. Present Continuous:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> For actions
              happening at the moment of speaking or for near future
              arrangements.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "He is studying
              for his exams."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Emphasizes
              that the action (studying) is currently ongoing.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              2. Past Continuous:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> Describes actions
              that were ongoing in the past at a specific time and often
              interrupted.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "She was watching
              TV when I called."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> The action of
              watching TV was in progress when interrupted by the call.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              3. Future Continuous:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> Used to describe
              actions that will be in progress at a specific future time.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "They will be
              sleeping by the time we arrive."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Predicts that
              "sleeping" will be happening when "we arrive," indicating ongoing
              future action.
            </p>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Perfect Tenses
          </h3>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              1. Present Perfect:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> For actions
              completed at an unspecified time before now.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "I have seen that
              movie six times."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Focuses on the
              experience over when it occurred, indicating repetition up to the
              present.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              2. Past Perfect:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> For actions that
              were completed before another action in the past.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "They had left by
              the time I arrived."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Shows that
              "leaving" was completed before another past action, "arriving."
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              3. Future Perfect:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> Describes actions
              that will be completed by a certain future time.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "She will have
              finished her homework by then."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Assures that
              the action (finishing homework) will be completed before another
              future event.
            </p>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Perfect Continuous Tenses
          </h3>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              1. Present Perfect Continuous:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> For actions that
              started in the past and continue to the present, emphasizing
              duration.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "He has been
              reading the book for two hours."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Shows that the
              action began in the past and continues up to the present,
              emphasizing how long it has been happening.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              2. Past Perfect Continuous:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> Describes actions
              that were ongoing until another past action occurred.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "I had been
              watching TV for an hour when he called."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Indicates the
              action had been ongoing and was then interrupted by another event.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              3. Future Perfect Continuous:
            </h4>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Usage:</span> Projects ongoing
              actions into the future, continuing until another event.
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "She will have
              been working at that company for three years by the time she
              leaves."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Emphasizes the
              duration of an ongoing action until a specified point in the
              future.
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Basic Rules of Verb-tense Agreement
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Consistency in Narrative Tenses
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Importance:</span>{" "}
            Maintaining consistent tenses in a narrative is crucial for clarity
            and flow. When narrating events, especially in storytelling or
            academic writing, the choice of tense should remain consistent
            throughout the passage unless there is a shift in the timeline or a
            specific need to change the tense for emphasis or clarity.
          </p>
          <p className="font-semibold mt-2">Key Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Choose an Anchor Tense: Decide on a primary tense for the main
              narrative (usually past or present) and stick to it throughout.
              This helps the reader or listener maintain a clear temporal
              perspective.
            </li>
            <li>
              Temporal Shifts: If you need to refer to events that occur at
              different times, adjust the tense accordingly, but make sure the
              shift is clear and justified. For instance, when using the past
              tense for the main narrative, you can use the past perfect to
              describe events that occurred earlier than the main timeline.
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples and Explanations:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Consistent Narrative: "John walked to the park and saw an old
              friend." (Past Simple used consistently)
            </li>
            <li>
              Temporal Shift: "John had walked to the park many times before he
              finally saw his old friend there." (Past Perfect to indicate an
              action that occurred before the main past narrative)
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Using the Correct Tense According to the Time Frame of the Action
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Importance:</span>{" "}
            Choosing the correct tense based on the time frame of the action
            ensures that the communication is temporally accurate and
            contextually appropriate. Each tense conveys a different time frame
            and aspect of action (simple, continuous, perfect), which must align
            with the speaker’s intent and the factual timeline of events.
          </p>
          <p className="font-semibold mt-2">Key Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Present Tenses: Use for actions happening now, habitual actions,
              or general truths.
            </li>
            <li>
              Past Tenses: Use for actions completed at a specific time in the
              past.
            </li>
            <li>
              Future Tenses: Use for actions that will occur in the future.
            </li>
            <li>
              Perfect Tenses: Use to link the effects of past actions to the
              present or to describe actions completed at a specific time before
              another action.
            </li>
          </ul>
          <p className="font-semibold mt-2">Examples and Explanations:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Present Simple for Habitual Actions: "She studies at the library
              every day." (Indicates a regular habit)
            </li>
            <li>
              Past Simple for Completed Actions: "They went to Spain last
              summer." (Indicates completed action in the past)
            </li>
            <li>
              Future Simple for Future Actions: "We will travel to New York next
              month." (Indicates planned future action)
            </li>
            <li>
              Present Perfect for Linking Past to Present: "He has lived in this
              town since 1990." (Links past action of moving to the ongoing
              state of living in the town)
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Issues in Verb-tense Agreement
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            1. Shifting Tenses Improperly Within a Sentence
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Problem Description:</span> Tense
            shifts occur when the tense changes unexpectedly within a sentence
            or passage without a clear reason, leading to confusion or a lack of
            coherence. Proper communication should maintain a consistent tense
            unless a shift is necessary to indicate a change in the timeline or
            to emphasize a shift from one time frame to another.
          </p>
          <p className="font-semibold mt-2">Example and Correction:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Incorrect: "She makes a cake and took it to the party."</li>
            <li>Correct: "She made a cake and took it to the party."</li>
            <li>
              Explanation: The incorrect sentence starts in the present tense
              and improperly shifts to the past tense. The corrected version
              maintains a consistent past tense, aligning the actions within the
              same timeframe.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            2. Selecting the Wrong Tense for Conditional Sentences
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Problem Description:</span>{" "}
            Conditional sentences often pose challenges in tense usage,
            particularly in determining the correct tense for the 'if' clause
            (condition) and the main clause (result). Using the incorrect tense
            can change the meaning of the sentence or render it grammatically
            incorrect.
          </p>
          <p className="font-semibold mt-2">Types of Conditional Sentences:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Zero Conditional:</span> Used for
              general truths or scientific facts.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "If water reaches 100 degrees Celsius, it boils."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">First Conditional:</span> Used for
              likely situations in the future.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "If it rains tomorrow, we will cancel the picnic."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Second Conditional:</span> Used
              for hypothetical or unlikely situations.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "If I won the lottery, I would travel the world."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Third Conditional:</span> Used for
              hypothetical situations in the past.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "If you had told me, I would have helped."</li>
              </ul>
            </li>
          </ul>
          <p className="font-semibold mt-2">Example and Correction:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Incorrect: "If I would know the answer, I would tell you."</li>
            <li>Correct: "If I knew the answer, I would tell you."</li>
            <li>
              Explanation: The incorrect sentence uses "would know" in the 'if'
              clause, which is inappropriate for a hypothetical condition. The
              correct version uses the simple past "knew" to properly form a
              second conditional sentence.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            3. Misusing Perfect Tenses
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Problem Description:</span> Perfect
            tenses (present perfect, past perfect, future perfect) are often
            misused by confusing their application, leading to unclear timelines
            or illogical sequences of events. These tenses are crucial for
            indicating completed actions relative to other actions or times.
          </p>
          <p className="font-semibold mt-2">Examples and Corrections:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Incorrect: "I have seen him yesterday."
              <ul className="list-disc list-inside ml-4">
                <li>Correct: "I saw him yesterday."</li>
                <li>
                  Explanation: The incorrect sentence misuses the present
                  perfect for an action clearly situated in a completed time
                  frame (yesterday). The correct version uses the simple past,
                  appropriate for actions completed at a definite past time.
                </li>
              </ul>
            </li>
            <li>
              Incorrect: "After the guests had left, we are making dinner."
              <ul className="list-disc list-inside ml-4">
                <li>Correct: "After the guests had left, we made dinner."</li>
                <li>
                  Explanation: The incorrect sentence uses "are making" (present
                  continuous) which conflicts with the past perfect "had left",
                  implying that the action of making dinner should also be
                  completed in the past. The corrected version uses the past
                  simple "made", aligning the timeline of events.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Special Cases in Verb-tense Agreement
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            1. Sequence of Tenses in Complex Sentences
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Importance:</span>{" "}
            The sequence of tenses refers to the relationship between the tenses
            used in the main clause and those in subordinate clauses, ensuring
            that the time frames expressed in each are logically consistent.
            This rule is crucial in complex sentences where multiple actions are
            described, each potentially occurring at different times.
          </p>
          <p className="font-semibold mt-2">Guidelines and Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              If the main clause is in the present or future tense, the
              subordinate clause can be in any tense that conveys the intended
              time relationship.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "She says that she will go to the store tomorrow."
                </li>
              </ul>
            </li>
            <li>
              If the main clause is in the past tense, the subordinate clause
              usually shifts to a past tense as well, unless it states a general
              truth or a habitual action.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "He said he had seen the movie." (Past Perfect to
                  indicate an action completed before the past-tense main
                  clause)
                </li>
                <li>
                  Example: "He said that the Earth revolves around the Sun."
                  (Present Simple to express a general truth, regardless of the
                  past tense in the main clause)
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            2. Agreement in Indirect Speech
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Importance:</span>{" "}
            Indirect speech (reported speech) involves conveying what someone
            said without quoting them directly. Maintaining proper tense
            agreement in indirect speech ensures that the original meaning and
            temporal perspective are preserved, even when the reporting verb is
            in the past tense.
          </p>
          <p className="font-semibold mt-2">Guidelines and Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Shift the tense of the original speech back by one degree if the
              reporting verb is in the past tense.
              <ul className="list-disc list-inside ml-4">
                <li>Direct: "I am tired," she said.</li>
                <li>Indirect: She said she was tired.</li>
              </ul>
            </li>
            <li>
              No tense shift is necessary if the reporting verb is in the
              present or future tense, or if the statement is about a general
              truth.
              <ul className="list-disc list-inside ml-4">
                <li>Direct: "Water boils at 100 degrees Celsius."</li>
                <li>
                  Indirect: He says that water boils at 100 degrees Celsius.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            3. Tense Agreement in Subordinate Clauses
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Importance:</span>{" "}
            Subordinate clauses (dependent clauses) must have tenses that
            logically correspond with the tense of the main clause to maintain
            clarity and coherence in the sentence structure.
          </p>
          <p className="font-semibold mt-2">Guidelines and Examples:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Temporal Clauses: Use appropriate tenses to reflect the
              relationship with the main clause’s action.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "When we get home, we will have dinner." (Future
                  action indicated by "will" aligns with a present tense in the
                  subordinate clause indicating a future scenario.)
                </li>
              </ul>
            </li>
            <li>
              Conditional Clauses: Tense usage depends on the type of condition
              being expressed.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "If it rains, the game will be canceled." (Present
                  Simple in the condition with a Future Simple outcome for
                  probable situations.)
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Troubleshooting and Correcting Tense Errors
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Strategies for Identifying Incorrect Tense Usage
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">
              1. Understand the Time Frames and Sequences:
            </span>
          </p>
          <p className="text-justify leading-relaxed">
            Key Action: Familiarize yourself with different tenses and their
            usages. Understanding when each tense should be used based on the
            time frame of the action is crucial.
          </p>
          <p className="text-justify leading-relaxed">
            Example: Reviewing the events of a story and noting the time each
            event is supposed to happen can help decide whether to use a past,
            present, or future tense.
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">2. Contextual Reading:</span>
          </p>
          <p className="text-justify leading-relaxed">
            Key Action: Read sentences or passages in context, not in isolation.
            This helps in understanding the temporal sequence and maintaining
            tense consistency.
          </p>
          <p className="text-justify leading-relaxed">
            Example: If a paragraph is describing historical events, any sudden
            shift to present tense without a clear reason might be an error.
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">
              3. Look for Time Markers and Clues:
            </span>
          </p>
          <p className="text-justify leading-relaxed">
            Key Action: Identify words or phrases that signal specific tenses,
            such as "yesterday" for past simple or "by the time" for future
            perfect.
          </p>
          <p className="text-justify leading-relaxed">
            Example: The sentence "She will graduate last year" is clearly
            incorrect because "last year" indicates a past time frame, which
            conflicts with the future tense "will graduate."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">4. Substitution Test:</span>
          </p>
          <p className="text-justify leading-relaxed">
            Key Action: Substitute different tenses to see if the sentence still
            makes logical sense. This can often highlight incorrect tense usage.
          </p>
          <p className="text-justify leading-relaxed">
            Example: Replace tenses in a suspicious sentence to test clarity:
            "He has seen the movie tomorrow" changes to "He will see the movie
            tomorrow."
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Correcting Errors Through Examples and Exercises
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">1. Example-Based Learning:</span>
          </p>
          <p className="text-justify leading-relaxed">
            Strategy: Use examples that illustrate common errors and their
            corrections. This helps learners understand the practical
            application of rules.
          </p>
          <p className="text-justify leading-relaxed">
            Example & Correction: Incorrect: "I am understanding you." Correct:
            "I understand you."
          </p>
          <p className="text-justify leading-relaxed">
            Explanation: "Understand" is a stative verb, which is typically not
            used in the continuous form.
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">2. Practice Exercises:</span>
          </p>
          <p className="text-justify leading-relaxed">
            Strategy: Create exercises that challenge learners to identify and
            correct tense errors.
          </p>
          <p className="text-justify leading-relaxed">
            Exercise: Correct the tense errors in the sentence: "Yesterday, I
            will go to the market."
          </p>
          <p className="text-justify leading-relaxed">
            Correction: "Yesterday, I went to the market."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">3. Peer Review and Feedback:</span>
          </p>
          <p className="text-justify leading-relaxed">
            Strategy: Use peer review sessions where learners exchange texts and
            identify tense errors in each other’s work. This collaborative
            approach can enhance understanding and retention.
          </p>
          <p className="text-justify leading-relaxed">
            Example: Students swap essays and highlight tense inconsistencies,
            discussing why they think an error has occurred.
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">4. Utilizing Technology:</span>
          </p>
          <p className="text-justify leading-relaxed">
            Strategy: Employ grammar checking tools as an initial step to
            identify potential tense errors, which should be followed by a
            manual check to ensure accuracy.
          </p>
          <p className="text-justify leading-relaxed">
            Example: Use tools like Grammarly to catch initial errors, but
            review each correction to understand the rationale.
          </p>
        </section>
      </div>
    </div>
  );
}
