<?php

use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = [
            [
                'id' => 1,
                'name' => 'English',
                'title' => 'I speak English',
                'key' => 'us',
            ],
            [
                'id' => 2,
                'name' => 'Afrikaans',
                'title' => 'Ek praat Afrikaans',
                'key' => 'za',
            ],
            [
                'id' => 3,
                'name' => 'Bahasa Indonesia',
                'title' => 'Saya berbahasa Indonesia',
                'key' => 'id',
            ],
            [
                'id' => 4,
                'name' => 'Català',
                'title' => 'Parlo català',
                'key' => 'es-ca',
            ],
            [
                'id' => 5,
                'name' => 'Dansk',
                'title' => 'Jeg taler dansk',
                'key' => 'dk',
            ],
            [
                'id' => 6,
                'name' => 'Deutsch',
                'title' => 'Ich spreche Deutsch',
                'key' => 'de',
            ],
            [
                'id' => 7,
                'name' => 'Eesti',
                'title' => 'Ma räägin eesti keelt',
                'key' => 'ee',
            ],
            [
                'id' => 8,
                'name' => 'Español',
                'title' => 'Hablo español',
                'key' => 'es',
            ],
            [
                'id' => 9,
                'name' => 'Français',
                'title' => 'Je parle français',
                'key' => 'fr',
            ],
            [
                'id' => 10,
                'name' => 'Galego',
                'title' => 'Falo galego',
                'key' => 'es-ga',
            ],
            [
                'id' => 11,
                'name' => 'Hrvatski',
                'title' => 'Govorim hrvatski',
                'key' => 'hr',
            ],
            [
                'id' => 12,
                'name' => 'Italiano',
                'title' => 'Parlo italiano',
                'key' => 'it',
            ],
            [
                'id' => 13,
                'name' => 'Kiswahili',
                'title' => 'Ninazungumza Kiswahili',
                'key' => 'tz',
            ],
            [
                'id' => 14,
                'name' => 'Latviešu',
                'title' => 'Es runāju latviski',
                'key' => 'lv',
            ],
            [
                'id' => 15,
                'name' => 'Lietuvių kalba',
                'title' => 'Aš kalbu lietuviškai',
                'key' => 'lt',
            ],
            [
                'id' => 16,
                'name' => 'Limba română',
                'title' => 'Vorbesc limba română',
                'key' => 'ro',
            ],
            [
                'id' => 17,
                'name' => 'Magyar',
                'title' => 'Magyarul beszélek',
                'key' => 'hu',
            ],
            [
                'id' => 18,
                'name' => 'Melayu',
                'title' => 'Saya bertutur dalam bahasa Melayu',
                'key' => 'ms',
            ],
            [
                'id' => 19,
                'name' => 'Nederlands',
                'title' => 'Ik spreek Nederlands',
                'key' => 'nl',
            ],
            [
                'id' => 20,
                'name' => 'Norsk',
                'title' => 'Jeg snakker norsk',
                'key' => 'no',
            ],
            [
                'id' => 21,
                'name' => 'Polski',
                'title' => 'Mówię po polsku',
                'key' => 'pl',
            ],
            [
                'id' => 22,
                'name' => 'Português',
                'title' => 'Eu falo português',
                'key' => 'pt',
            ],
            [
                'id' => 23,
                'name' => 'Shqip',
                'title' => 'Unë flas anglisht',
                'key' => 'al',
            ],
            [
                'id' => 24,
                'name' => 'Slovenčina',
                'title' => 'Hovorím po slovensky',
                'key' => 'sk',
            ],
            [
                'id' => 25,
                'name' => 'Slovenščina',
                'title' => 'Govorim slovensko',
                'key' => 'sl',
            ],
            [
                'id' => 26,
                'name' => 'Srpski jezik',
                'title' => 'Ja govorim srpski',
                'key' => 'rs',
            ],
            [
                'id' => 27,
                'name' => 'Suomi',
                'title' => 'Puhun suomea',
                'key' => 'fi',
            ],
            [
                'id' => 28,
                'name' => 'Svenska',
                'title' => 'Jag talar svenska',
                'key' => 'se',
            ],
            [
                'id' => 29,
                'name' => 'Tagalog',
                'title' => 'Nagsasalita ako ng Tagalog',
                'key' => 'ph',
            ],
            [
                'id' => 30,
                'name' => 'Tiếng Việt',
                'title' => 'Tôi nói tiếng Việt',
                'key' => 'vn',
            ],
            [
                'id' => 31,
                'name' => 'Türkçe',
                'title' => 'Türkçe konuşuyorum',
                'key' => 'tr',
            ],
            [
                'id' => 32,
                'name' => 'Íslenska',
                'title' => 'Ég tala íslensku',
                'key' => 'is',
            ],
            [
                'id' => 33,
                'name' => 'Čeština',
                'title' => 'Mluvím česky',
                'key' => 'cz',
            ],
            [
                'id' => 34,
                'name' => 'Ελληνικά',
                'title' => 'Μιλάω Ελληνικά',
                'key' => 'gr',
            ],
            [
                'id' => 35,
                'name' => 'Беларуская',
                'title' => 'Я размаўляю па-беларуску',
                'key' => 'by',
            ],
            [
                'id' => 36,
                'name' => 'Български език',
                'title' => 'Аз говоря български език',
                'key' => 'bg',
            ],
            [
                'id' => 37,
                'name' => 'Македонски',
                'title' => 'Зборувам македонски',
                'key' => 'mk',
            ],
            [
                'id' => 38,
                'name' => 'Русский',
                'title' => 'Я говорю по-русски',
                'key' => 'ru',
            ],
            [
                'id' => 39,
                'name' => 'Українська',
                'title' => 'Я розмовляю українською',
                'key' => 'ua',
            ],
            [
                'id' => 40,
                'name' => 'Հայերեն',
                'title' => 'Ես խոսում եմ հայերեն',
                'key' => 'am',
            ],
            [
                'id' => 41,
                'name' => 'עברית',
                'title' => 'אני מדבר עברית',
                'key' => 'il',
            ], [
                'id' => 42,
                'name' => 'اردو',
                'title' => 'میں اردو بولتا/بولتی ہوں',
                'key' => 'pk',
            ],
            [
                'id' => 43,
                'name' => 'اللغة العربية',
                'title' => 'أنا أتحدث العربية',
                'key' => 'sa',
            ],
            [
                'id' => 44,
                'name' => 'فارسی',
                'title' => 'من فارسی صحبت می‌کنم',
                'key' => 'ir',
            ],
            [
                'id' => 45,
                'name' => 'हिंदी',
                'title' => 'मैं हिंदी बोलता/बोलती हूँ',
                'key' => 'in',
            ],
            [
                'id' => 46,
                'name' => 'ਪੰਜਾਬੀ',
                'title' => 'ਮੈਂ ਪੰਜਾਬੀ ਬੋਲਦਾ/ਬੋਲਦੀ ਹਾਂ',
                'key' => 'panjab',
            ],
            [
                'id' => 47,
                'name' => 'ภาษาไทย',
                'title' => 'ผมพูดภาษาไทย / ฉันพูดภาษาไทย',
                'key' => 'th',
            ],
            [
                'id' => 48,
                'name' => 'ქართული',
                'title' => 'მე ვლაპარაკობ ქართულად',
                'key' => 'ge',
            ],
            [
                'id' => 49,
                'name' => 'አማርኛ',
                'title' => 'አማርኛ እናገራለሁ',
                'key' => 'et',
            ],
            [
                'id' => 50,
                'name' => '中文',
                'title' => '我说中文',
                'key' => 'cn',
            ],
            [
                'id' => 51,
                'name' => '日本語',
                'title' => '私は日本語を話します',
                'key' => 'jp',
            ],
            [
                'id' => 52,
                'name' => '한국어',
                'title' => '저는 한국어를 합니다.',
                'key' => 'kr',
            ],
        ];
        DB::table('languages')->insert($array);
    }
}
