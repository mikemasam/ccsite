export default function DictionariesPage(){
  return (
  <main id="main">
    <p>This page covers traditional dictionaries and other tools that you can use to look up the meaning of words
      (but which are not dictionaries).
      <br />
      Chinese dictionaries need to fulfil a few requirements that are irrelevant (or sometimes less relevant)
      to dictionaries for Indo-European languages:
    </p>
    <ul>
      <li>The Chinese-to-non-Chinese part should provide several lookup methods. 
        Modern printed dictionaries have at least two ways for looking up Chinese words: 
        through the alphabetical list (typically sorted by pinyin syllables) and through the radicals + strokes system. 
        Online dictionaries provide at least two methods: direct input of characters or input of pinyin transcriptions.
        Some offer additional methods, such as handwriting recognition and a radical index.
      </li>
      <li>The dictionary should be more than a mere list of translations. 
        Entries for nouns should mention measure words or classifiers,
        and entries in general should provide additional information such as 
        the part of speech, 
        <a href="https://en.wikipedia.org/wiki/Register_%28sociolinguistics%29">register</a>
        and usage examples. 
        (The ideal learner's dictionary would provide at least one example sentence for each entry.)
        In print, only learner's dictionaries fulfil most of these criteria.
        Online dictionaries rarely do.
      </li>
      <li>Each example sentence is accompanied by a pinyin transcription.
      </li>
      <li>The two parts of the dictionary should be consistent.
        For example, if the Chinese-English part has an entry for <span >西红柿</span> (xīhóngshì: tomato) but 
        not for its synonym <span >番茄</span> (fānqié), but the English-Chinese part
        translates &ldquo;tomato&rdquo; only as <span >番茄</span>, the dictionary is not consistent.
        (The tomato example comes from <i class="booktitle" lang="de">Langenscheidt Handwörterbuch Chinesisch</i> (1996).)
      </li>
    </ul>

    <h2>Online Dictionaries</h2>
    <ul>
      <li>
        <a href="http://www.mdbg.net/"><abbr>MDBG</abbr> English to Chinese dictionary</a>:
        in spite of its name, this site offers much more than an English to Chinese dictionary.
        You can also look up Chinese words using simplified and traditional Chinese, or using pinyin (without tones).
        If you want to look up Chinese words or characters that you can't write on your computer and for which you don't have the pinyin transcription,
        you can use one of the alternative lookup features: handwriting input (see the brush icon next to the search field)
        or by looking up the 
        <a href="http://www.mdbg.net/chindict/chindict.php?page=radicals">radicals and strokes</a> (like in a printed dictionary).
        <br />The dictionary entries for Chinese words contain much more than just translations and pinyin transcriptions:
        for example, for simplified Chinese characters, each entry also gives the traditional character, the Jyutping Cantonese transcription,
        the <abbr>HSK</abbr> level at which the character needs to be learnt, 
        the character decomposition, the stroke order, the pronunciation (through audio), a link to Baidu Baike,
        a link to Skritter and a link that allows you to look up words in which the character is used (and not only words that begin with the looked-up character!).
      </li>
      <li>
        <a href="http://www.collinsdictionary.com/dictionary/english-chinese">Collins Chinese Dictionary</a>,
        launched in early 2016.
        This dictionary supports traditional look-ups in two directions: English-Chinese and Chinese-English.
        Chinese words can be looked up by entering characters directly or by entering their pinyin transcription.
        When you look up a noun in the Chinese-English, the dictionary entry does not mention measure words;
        to find the measure word(s) for a noun, you need to look up the noun in the English-Chinese part. 
        You can also browse the dictionary alphabetically.
      </li>
      <li>
        <a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/"><span lang="zh-HK">漢語多功能字庫</span> Multi-function Chinese Character Database</a>:
        online version of 
        <i class="booktitle">Lin Yutang's Chinese-English Dictionary of Modern Usage</i> and the
        <i class="booktitle">Chinese Character Database: With Word-formations Phonologically Disambiguated according to the Cantonese Dialect</i>.
      </li>
      <li>
        <a href="http://chinesenotes.com/index.html">Chinese Notes Chinese-English Dictionary</a>:
        a website maintained by <a href="http://www.fgscswa.org.au/en/nan-tien-institute/">Fo Guang Shan Nan Tian Institute (<abbr>NTI</abbr>)</a>
        in Taiwan.
      </li>
      <li>Pin Pin Chinese:
        <a href="http://dictionary.pinpinchinese.com/">Chinese-English Dictionary</a>.
        This dictionary supports both simplified and traditional Chinese characters.
      </li>
      <li>
        <a href="http://dict.cn/" lang="zh">海词词典</a>.
      </li>
      <li>
        <a href="http://www.cantonese.sheik.co.uk/scripts/wordlist.htm">Chinese Word List - CantoDict</a>.
        This dictionary gives both jyutping and pinyin transcriptions for Chinese words.
        (To look up Chinese words, you need to select "Chinese Words" from the menu next to the search field.)
      </li>
      <li>
        <a href="http://www.xibanya.net/diccionario.aspx" lang="es">Diccionario chino - CEDICT</a>:
        dictionary that gives English translations for thousands of Chinese words.
        (In spite of the Spanish name, there are no Spanish translations.)
      </li>
      <li>
        <a href="http://cdict.net/">English-Chinese Dictionary (<span lang="zh-TW">英漢字典</span>)</a>
        (a dictionary that uses definitions from several other sources).
      </li>
      <li>
        <a href="http://www.chineselanguage.org/dictionaries/">Chinese Character Dictionary</a>:
        this dictionary lets you look up Chinese words but gives you translations only
        for the characters in the words (for example, if you look up <span >左右</span>
        you get English translations only for <span >左</span> and <span >右</span>.
      </li>
      <li>Taiwan (Republic of China) Ministry of Education:
        <a href="http://dict2.variants.moe.edu.tw/main.htm" hreflang="zh-TW">Dictionary of Chinese Character Variants</a>
      </li>
      <li>
        <a href="https://www.moedict.tw/" hreflang="zh-TW" lang="zh-TW">萌典</a>.
      </li>
    </ul>

    <h2>Other Tools and Resources</h2>
    <p>
      Work in progress.
      See <a href="http://chinese.stackexchange.com/questions/1120/resources-for-learning-mandarin-chinese/1195#1195">Dictionaries</a> on Chinese Language Stack Exchange.
    </p>
    <ul>
      <li>Olle Linge:
        <a href="http://www.hackingchinese.com/the-labyrinthine-dictionary-survival-guide/">The Chinese-Chinese dictionary survival guide</a>,
        <i class="website">Hacking Chinese</i>, October 2011.
      </li>
      <li>
        <a href="http://hua.umf.maine.edu/China/diction.html">Chinese-English Dictionaries -- Bibliography</a>:
        a list of dictionaries compiled by Marilyn Shea of the University of Maine at Farmington.
      </li>
      <li>
        <a href="http://www.cjk.org/cjk/index.htm">The <abbr title="Chinese, Japanese, Korean">CJK</abbr> Dictionary Institute</a>.
      </li>
    </ul>

  </main>
  );
}
