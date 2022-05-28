export default function CJKToolsPage(){
  return (
    <main id="main">
      <h2>Pinyin Input</h2>
      <ul>
        <li>
          <a href="http://cjklib.readthedocs.io/en/latest/library/cjklib.reading.converter.PinyinIPAConverter.html">Pinyin<abbr>IPA</abbr>Converter — Hanyu Pinyin to <abbr>IPA</abbr></a>:
          tool that is part of a larger 
          <a href="https://github.com/cburgmer/cjklib">Python library for dealing with &ldquo;Han characters&rsquo;</a> 
          in various languages.
        </li>
        <li>
          <a href="https://sourceforge.net/projects/pinyinput/">Pinyinput</a>
          is a free and open source input method for Hanyu Pinyin
          that can be installed on Microsoft Windows.
          After installation, it becomes available in the language bar.
          To type pinyin, you need to type a syllable followed by the number of the tone you want to add to it.
        </li>
        <li>
          <a href="http://shinyandnew.ca/pinyin_fixer.html">Mark's Super-duper Chinese Pinyin formatter</a>
          is a web-based tool consisting of an text entry field where you can 
          enter pinyin syllables followed by the number of the tone, which are the converted
          to syllable with the appropriate diacritics.
          You can then copy the pinyin text and paste it wherever you need it.
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=eRx47Dt1ZZU">How to set up Chinese keyboard on Linux (Ubuntu)</a>
          (<i class="ytchannel">Domino Chinese</i> on YouTube, 2 minutes, 18.09.2018).
          <br />According to
          <a href="https://www.dominochinese.com/s/our-team">their own decription</a>,
          <q>Domino Chinese is a digital educational platform dedicated to providing an easy-to-learn method of learning Mandarin Chinese to everyone interested in the real China.</q>
          See also the page
          <a href="https://www.dominochinese.com/s/keyboard">Setup Your Keyboard</a>,
          which includes videos for Windows, Mac <abbr>OS</abbr>, iPhone and Android.
        </li>
      </ul>

      <h2>International Phonetic Alphabet (<abbr>IPA</abbr>)</h2>
      <ul>
        <li>
          <a href="https://sourceforge.net/projects/py2ipa/">Pinyin to <abbr>IPA</abbr> Conversion Tools</a>:
          Python tools for the conversion of Hanyu Pinyin
          (<a href="http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=61420">ISO 7098:2015</a>) to <abbr>IPA</abbr>.
        </li>
        <li>
          <a href="https://github.com/YangKuang/pinyin4net">pinyin4net</a>:
          C# library that can convert both simplified and traditional Chinese characters into hanyu pinyin.
          The code was last updated in January 2012.
          Licence: <abbr>MIT</abbr>.
        </li>
        <li>
          <a href="http://pinyin4j.sourceforge.net/">pinyin4j</a>:
          Java library for conversion <q>between Chinese characters and most popular Pinyin systems</q>.
          The library can also ouput Wade-Giles, Yale and Gwoyeu Romatzyh. 
          Last updated in April 2013. Licence: <abbr>GPL</abbr> v2.
        </li>
        <li>
          <a href="https://github.com/handsomezhou/pinyin4cpp">pinyin4cpp</a>:
          C++ library for converting Chinese characters into Hanyu Pinyin.
          Last updated in 2015. Licence: <span lang="en-US">Apache License 2.0</span>.
        </li>
        <li>
          <a href="https://github.com/kimziv/PinYin4Objc">PinYin4Objc</a>:
          Objective-C library (with some Ruby) that supports both simplified and traditional Chinese characters and 
          <q>most popular pinyin systems</q>.
          The code was last updated in October 2013. Licence: <span lang="en-US">Apache License 2.0</span>.
        </li>
        <li>
          <a href="https://github.com/teambition/HanziPinyin">HanziPinyin</a>:
          library in Swift that can convert both simplified and traditional Chinese characters into pinyin.
          Last updated in May 2016. Licence: <span lang="en-US"><abbr>MIT</abbr> license</span>.
        </li>
        <li>
          <a href="https://github.com/pilgr/PiPinyin">PiPinyin</a>:
          Java library for Android that converts Chinese characters into pinyin.
          Last updated in March 2015. Licence: <span lang="en-US">Apache License 2.0</span>.
        </li>
        <li>
          <a href="http://www.sinologia.info/unihanconver/">Unihanconver</a>
          (see <a href="https://sourceforge.net/projects/unihanconver/">Unicode Trad/Simpl Chinese Converter</a> 
          on SourceForge) is a Perl library
          <q>to convert between Traditional/Simplified Chinese directly in Unicode (not GB/Big5 conversion)</q>.
          It can be used through a Gtk2+ Interface and from the console.
          Last updated in April 2015. Licence: <abbr>GPL</abbr> v2.
        </li>
        <li>
          <a href="http://zdt.sourceforge.net/">Zhongwen Development Tool or <abbr>ZDT</abbr></a>
          is a Java-based tool that is described as
          <q>an easy to use, open-source Mandarin Chinese flashcard application that can help you learn Chinese</q>.
          One of its features is conversion between Chinese charactes and pinyin.
          (See also <a href="https://sourceforge.net/projects/zdt/"><abbr>ZDT</abbr> on SourceForge</a>.)
          Last updated in May 2015. Licence: <span lang="en-US">Eclipse Public License</span>.
        </li>
      </ul>

      <p>There are also a number of libraries that don't have a licence. Before using these, 
        one should contact the developers about the licence.
        (The absence of a licence does not mean that the code has an open-source licence
        but that the developers have chosen not to disclose what the licence is.)
      </p>

      <h2>Stroke Order Animations</h2>
      <ul>
        <li>Wikimedia Commons:
          <a href="https://commons.wikimedia.org/wiki/Commons:Stroke_Order_Project">Stroke Order Project</a>:
          stroke order diagrams for bopomofo, hiragana, katakana, hangeul, traditional Chinese characters
          and a small set of Japanese kanji.
        </li>
        <li>
          <a href="https://github.com/skishore/makemeahanzi">Make Me a Hanzi</a>:
          free, open-source Chinese character data with stroke order information.
          (The project uses character data come from the Unihan database.) 
        </li>
        <li>
          <a href="https://hanziwriter.org/docs.html">Hanzi Writer&nbsp;&mdash; Chinese Character Stroke Order Animations and Practice Quizzes</a>.
          See also the
          <a href="https://github.com/chanind/hanzi-writer">hanzi-writer GitHub repository</a>
          (by David Chanin, <abbr>UK</abbr>; <abbr>MIT</abbr> licence).
        </li>
      </ul>
    </main>
  );
}
