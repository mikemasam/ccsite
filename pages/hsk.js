import { Space, Typography, Button, Toast } from '@douyinfe/semi-ui';
import { IconOption } from '@douyinfe/semi-icons';
import AppRoute from '@com/appcom/route';
const { Title, Paragraph } = Typography;

export default function HSKPage() {
  return (
    <div style={{ padding: 20 }}>

      <Space vertical spacing={50} align="start">
        <Space vertical spacing={10} align="start">
          <Title heading={5}>
            What Is HSK?
          </Title>
          <Paragraph type="secondary">
            HSK (汉语水平考试 / Hànyǔ shuǐpíng kǎoshì) is the People's Republic of China's standardised Chinese proficiency test. For general information about the test, see Hanyu Shuiping Kaoshi (on Wikipedia) and Hanban's website.
            HSK was revised in 2010. See the Comparison of New and Old HSK Test for a basic overview of similarity and differences.

          </Paragraph>
          <Paragraph type="secondary">
            Some test centres offer computer-based tests for HSK levels 4, 5 and 6. If you decide to take a compter-based HSK test, make sure you find out in advance what input method will be used on the computer (so you can familiarise yourself with it in advnace) and, if you are not used to read Chinese texts in a variety of font faces, which font face will be used to display text. See the question What's the format of official “online” HSK tests? on Chinese Language Stack Exchange.
          </Paragraph>
        </Space>
        <Vocabulary />
      </Space>
    </div>
  )
}

function TextItem({ children }){
  return (
      <Paragraph type="secondary">
        <IconOption style={{ padding: 10 }}/>
        {children}
      </Paragraph>
  );
}

function Vocabulary(){
  return (
    <Space vertical spacing={10} align="start">
      <Title heading={5}>
        Vocabulary for HSK
      </Title>
      <TextItem>
        Vocabulary lists are the type of resource that is easiest to find on the Web. The list below is just a sample; most of these resources assume English as the “source language”, whereas others assume French or German.
      </TextItem>
      <TextItem>
        Shannon Kennedy: How I Memorized 600 Chinese Words in 2 Weeks (18 January 2016): a blog post by a student who needed to learn 600 Chinese words in the last two weeks before her HSK 4 test. The blog post describes the tools and techniques she used and has sections on what worked well and what didn't.
      </TextItem>
      <TextItem>
      Université de Genève: Unité des études chinoises: Listes HSK: vocabulary lists for both the new and the old HSK are available as PDF files. (The lists for the old HSK are also available from the Wiktionary page HSK list of Mandarin words. These lists are believed to be in the public domain.)
      </TextItem>
      <TextItem>
      Han Trainer: HSK Vokabelliste. From this page, you can download vocabulary lists for HSK 1, 2, 3 and 4.
      </TextItem>
      <TextItem>
      Xiao Min: HSK Level 3 Prep Course: YouTube playlist with 10 videos that focus on vocabulary.

      </TextItem>
      <TextItem>
      Xiao Min: HSK Level 4 Prep Course: YouTube playlist with 4 videos that focus on vocabulary.

      </TextItem>
      <TextItem>
        Mandarin Corner:
        <li>
        HSK 3 Vocabulary with Pinyin and English Sentence Examples (YouTube playlist).
        </li>
        <li>
        HSK 4 Vocabulary with Pinyin and English Sentence Examples (YouTube playlist, 21 videos).
        </li>
        <li>
        HSK 5 Vocabulary with Pinyin and English Sentence Examples (YouTube playlist, 44 videos).
        </li>
      </TextItem>
      <TextItem>
        Sebor: videos with example sentences using HSK 2 vocabulary. (Sebor's pronunciation is very clear but his speech may be too fast for learners who have just passed the HSK 1 test. Some example sentences use vocabulary that are part of HSK 3 or higher.)

        <li>
        Learn Chinese with Sebor【HSK 2】 (1/15) vocabulary (3 minutes).
        </li>
        <li>
        Learn Chinese with Sebor【HSK 2】(2/15) vocabulary (2 minutes).
        </li>
        <li>
        Learn Chinese with Sebor【HSK 2】(3/15) vocabulary (2 minutes).
        </li>
        <li>
        Learn Chinese with Sebor【HSK 2】(4/15) vocabulary (2 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 2】(5/15) vocabulary (3 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 2】 (6/15) vocabulary (3 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 2】(7/15) vocabulary (2 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 2】 (8/15) vocabulary (2 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 2】 (9/15) vocabulary (3 minutes).
        </li>
      </TextItem>
      <TextItem>
        Sebor: videos with example sentences using HSK 3 vocabulary:
        <li>
          Learn Chinese with Sebor【HSK 3】 (1/20) vocabulary (2 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 3】 (2/20) vocabulary (2 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 3】 (3/20) vocabulary (2 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 3】 (4/20) vocabulary (2 minutes).
        </li>
        <li>
          Learn Chinese with Sebor【HSK 3】 (5/20) vocabulary (2 minutes).
        </li>
      </TextItem>
      <TextItem>
      Sebor: videos with example sentences using HSK 4 vocabulary:
        <li>
        Learn Chinese with Sebor【HSK 4】 (1/30) vocabulary (2 minutes).
        </li>
        <li>
        Learn Chinese with Sebor【HSK 4】 (2/30) vocabulary (2 minutes).
        </li>
      </TextItem>
      <TextItem>
        HSK Academy (an organisation that appears to be based in France) provides online flashcards:
        <li>
          HSK 1 vocabulary list - Practice 150 new words, HSK 2 vocabulary list - Practice 150 new words, HSK 3 vocabulary list - Practice 300 new words, HSK 4 vocabulary list - Practice 600 new words, HSK 5 vocabulary list - Practice 1300 new words, HSK 6 vocabulary list - Practice 2500 new words.
        </li>

      </TextItem>
      <TextItem>
      A Dictionary of 5000 Graded Words for New HSK (Level 6). Beijing Language and Culture University Press, 2012. (732 pages) ISBN 978-7-5619-4068-6.

      </TextItem>
      <TextItem>
      汉 语 (Han Yu):
        <li>
        HSK Level 1 & 2: vocabulary list with traditional characters, simplified characters, pinyin and an English translation.
        </li>
        <li>
        HSK Level 3: vocabulary list with traditional characters, simplified characters, pinyin and an English translation.
        </li>
        <li>
        HSK Level 4: vocabulary list with traditional characters, simplified characters, pinyin and an English translation.
        </li>
      </TextItem>
      Below is a list of resources for learners of Chinese with a background in programming.

      <li>
      hanyu-shuiping-kaoshi: this open source repository contains the characters for the six HSK levels in CSV and JSON.
    </li>
    </Space>
  );
}


export const getServerSideProps = AppRoute(() => {
}, { secured: false });
