//
// Loads the appropriate files when user touches a tab option. Add common prep code here.
//
function Load(opt) {
  console.log(window.location);

  console.log($(html).find('pregnancy'));

  var feedingMethod = $.session.get('feedingMethod');

  //
  // Tabs
  //
  if (opt == 'feed') {
    window.location = window.location.origin + '/feed.html';
  }

  if (opt == 'topics') {
    switch (feedingMethod) {
      case 'ff':
        window.location = window.location.origin + '/topics-ff.html';
        break;
      case 'bf':
        window.location = window.location.origin + '/topics-bf.html';
        break;
      case 'mf':
        window.location = window.location.origin + '/topics-mf.html';
        break;
      case 'py':
        window.location = window.location.origin + '/topics-py.html';
        break;
      default:
        break;
    }
  }

  if (opt == 'tools') {
    switch (feedingMethod) {
      case 'ff':
        window.location = window.location.origin + '/tools/index-ff.html';
        break;
      case 'bf':
        window.location = window.location.origin + '/tools/index-bf.html';
        break;
      case 'mf':
        window.location = window.location.origin + '/tools/index-mf.html';
        break;
      case 'py':
        window.location = window.location.origin + '/tools/index-py.html';
        break;
      default:
        break;
    }
  }

  if (opt == 'forum') {
    window.location = window.location.origin + '/forum.html';
  }

  if (opt == 'more') {
    window.location = window.location.origin + '/more/index.html';
  }

  //
  // Tools options
  //
  if (opt == 'baby-food') {
    window.location = window.location.origin + '/tools/baby-food/quiz.html';
  }

  if (opt == 'bottle-feed') {
    window.location = window.location.origin + '/tools/bottle-feed/quiz.html';
  }

  if (opt == 'feeding-practices') {
    window.location =
      window.location.origin + '/tools/feeding-practices/quiz.html';
  }

  if (opt == 'formula-preparation') {
    window.location =
      window.location.origin + '/tools/formula-preparation/quiz.html';
  }

  if (opt == 'healthy-eating') {
    window.location =
      window.location.origin + '/tools/healthy-eating/quiz.html';
  }

  if (opt == 'milk-supply') {
    window.location = window.location.origin + '/tools/milk-supply/quiz.html';
  }

  if (opt == 'bmi-calc') {
    window.location = window.location.origin + '/tools/bmi/bmi.html';
  }

  if (opt == 'veg-tracker') {
    window.location = window.location.origin + '/tools/veg-tracker/index.html';
  }

  if (opt == 'bf-goals') {
    window.location =
      window.location.origin + '/tools/my-breastfeeding-goals/quiz.html';
  }

  if (opt == 'mixed-feed') {
    window.location = window.location.origin + '/tools/mixed-feeding/quiz.html';
  }

  if (opt == 'ready-for-solids') {
    window.location = window.location.origin + '/tools/start-solid/quiz.html';
  }

  if (opt == 'baby-play') {
    window.location = window.location.origin + '/tools/play-section/quiz.html';
  }

  if (opt == 'ff-calc') {
    window.location = window.location.origin + '/tools/ffcalc/ffcalc.html';
  }

  //
  // Topics
  //
  if (opt == 'menu-fav') {
    window.location = window.location.origin + '/menu-fav.html';
  }

  if (opt == 'menu-py') {
    window.location = window.location.origin + '/menu-py.html';
  }

  if (opt == 'menu-for-parents') {
    window.location = window.location.origin + '/menu-for-parents.html';
  }

  if (opt == 'menu-bf') {
    window.location = window.location.origin + '/menu-bf.html';
  }

  if (opt == 'menu-tips') {
    window.location = window.location.origin + '/menu-tips.html';
  }

  if (opt == 'menu-fpsp') {
    window.location = window.location.origin + '/menu-fpsp.html';
  }

  if (opt == 'menu-solids') {
    window.location = window.location.origin + '/menu-solids.html';
  }

  if (opt == 'menu-recipes') {
    window.location = window.location.origin + '/menu-recipes.html';
  }

  if (opt == 'menu-play') {
    window.location = window.location.origin + '/menu-play.html';
  }

  if (opt == 'menu-hs') {
    window.location = window.location.origin + '/menu-hs.html';
  }

  if (opt == 'menu-mf') {
    window.location = window.location.origin + '/menu-mf.html';
  }

  if (opt == 'menu-ff') {
    window.location = window.location.origin + '/menu-ff.html';
  }

  //
  // Breastfeeding
  //
  if (opt == 'r1.1.1') {
    window.location = window.location.origin + '/content/bf/bf-111.html';
  }

  if (opt == 'r1.1.2') {
    window.location = window.location.origin + '/content/bf/bf-112.html';
  }

  if (opt == 'r1.1.3') {
    window.location = window.location.origin + '/content/bf/bf-113.html';
  }

  if (opt == 'r1.1.4') {
    window.location = window.location.origin + '/content/bf/bf-114.html';
  }

  if (opt == 'r1.1.5') {
    window.location = window.location.origin + '/content/bf/bf-115.html';
  }

  if (opt == 'r1.1.6') {
    window.location = window.location.origin + '/content/bf/bf-116.html';
  }

  if (opt == 'r1.1.7') {
    window.location = window.location.origin + '/content/bf/bf-117.html';
  }

  if (opt == 'r1.1.8') {
    window.location = window.location.origin + '/content/bf/bf-118.html';
  }

  if (opt == 'r1.1.9') {
    window.location = window.location.origin + '/content/bf/bf-119.html';
  }

  if (opt == 'r1.1.10') {
    window.location = window.location.origin + '/content/bf/bf-1110.html';
  }

  if (opt == 'r1.1.11') {
    window.location = window.location.origin + '/content/bf/bf-1111.html';
  }

  if (opt == 'r1.1.12') {
    window.location = window.location.origin + '/content/bf/bf-1112.html';
  }

  if (opt == 'r1.1.13') {
    window.location = window.location.origin + '/content/bf/bf-1113.html';
  }

  if (opt == 'r1.1.14') {
    window.location = window.location.origin + '/content/bf/bf-1114.html';
  }

  if (opt == 'r1.1.15') {
    window.location = window.location.origin + '/content/bf/bf-1115.html';
  }

  if (opt == 'r1.1.16') {
    window.location = window.location.origin + '/content/bf/bf-1116.html';
  }

  if (opt == 'r1.1.17') {
    window.location = window.location.origin + '/content/bf/bf-1117.html';
  }

  if (opt == 'r1.1.18') {
    window.location = window.location.origin + '/content/bf/bf-1118.html';
  }

  if (opt == 'r1.1.19') {
    window.location = window.location.origin + '/content/bf/bf-1119.html';
  }

  if (opt == 'r1.1.20') {
    window.location = window.location.origin + '/content/bf/bf-1120.html';
  }

  //
  // Formula feeding
  //
  if (opt == 'r2.1.1') {
    window.location = window.location.origin + '/content/ff/ff-211.html';
  }

  if (opt == 'r2.1.2') {
    window.location = window.location.origin + '/content/ff/ff-212.html';
  }

  if (opt == 'r2.1.3') {
    window.location = window.location.origin + '/content/ff/ff-213.html';
  }

  if (opt == 'r2.1.4') {
    window.location = window.location.origin + '/content/ff/ff-214.html';
  }

  if (opt == 'r2.1.5') {
    window.location = window.location.origin + '/content/ff/ff-215.html';
  }

  if (opt == 'r2.1.6') {
    window.location = window.location.origin + '/content/ff/ff-216.html';
  }

  if (opt == 'r2.1.7') {
    window.location = window.location.origin + '/content/ff/ff-217.html';
  }

  if (opt == 'r2.1.8') {
    window.location = window.location.origin + '/content/ff/ff-218.html';
  }

  if (opt == 'r2.1.9') {
    window.location = window.location.origin + '/content/ff/ff-219.html';
  }

  if (opt == 'r2.1.10') {
    window.location = window.location.origin + '/content/ff/ff-2110.html';
  }

  if (opt == 'r2.1.11') {
    window.location = window.location.origin + '/content/ff/ff-2111.html';
  }

  if (opt == 'r2.1.12') {
    window.location = window.location.origin + '/content/ff/ff-2112.html';
  }

  //
  // Mixed feeding
  //
  if (opt == 'r3.1.1') {
    window.location = window.location.origin + '/content/mf/mf-311.html';
  }

  if (opt == 'r3.1.2') {
    window.location = window.location.origin + '/content/mf/mf-312.html';
  }

  if (opt == 'r3.1.3') {
    window.location = window.location.origin + '/content/mf/mf-313.html';
  }

  if (opt == 'r3.1.4') {
    window.location = window.location.origin + '/content/mf/mf-314.html';
  }

  if (opt == 'r3.1.5') {
    window.location = window.location.origin + '/content/mf/mf-315.html';
  }

  if (opt == 'r3.1.6') {
    window.location = window.location.origin + '/content/mf/mf-316.html';
  }

  if (opt == 'r3.1.7') {
    window.location = window.location.origin + '/content/mf/mf-317.html';
  }

  //
  // Solids
  //
  if (opt == 'r4.1.1') {
    window.location =
      window.location.origin + '/content/solids/solids-411.html';
  }

  if (opt == 'r4.1.2') {
    window.location =
      window.location.origin + '/content/solids/solids-412.html';
  }

  if (opt == 'r4.1.3') {
    window.location =
      window.location.origin + '/content/solids/solids-413.html';
  }

  if (opt == 'r4.1.4') {
    window.location =
      window.location.origin + '/content/solids/solids-414.html';
  }

  if (opt == 'r4.1.5') {
    window.location =
      window.location.origin + '/content/solids/solids-415.html';
  }

  if (opt == 'r4.1.6') {
    window.location =
      window.location.origin + '/content/solids/solids-416.html';
  }

  if (opt == 'r4.1.7') {
    window.location =
      window.location.origin + '/content/solids/solids-417.html';
  }

  if (opt == 'r4.1.8') {
    window.location =
      window.location.origin + '/content/solids/solids-418.html';
  }

  if (opt == 'r4.1.9') {
    window.location =
      window.location.origin + '/content/solids/solids-419.html';
  }

  if (opt == 'r4.1.10') {
    window.location =
      window.location.origin + '/content/solids/solids-4110.html';
  }

  if (opt == 'r4.1.11') {
    window.location =
      window.location.origin + '/content/solids/solids-4111.html';
  }

  if (opt == 'r4.1.12') {
    window.location =
      window.location.origin + '/content/solids/solids-4112.html';
  }

  if (opt == 'r4.1.13') {
    window.location =
      window.location.origin + '/content/solids/solids-4113.html';
  }

  if (opt == 'r4.1.14') {
    window.location =
      window.location.origin + '/content/solids/solids-4114.html';
  }

  if (opt == 'r4.1.15') {
    window.location =
      window.location.origin + '/content/solids/solids-4115.html';
  }

  if (opt == 'r4.1.16') {
    window.location =
      window.location.origin + '/content/solids/solids-4116.html';
  }

  if (opt == 'r4.1.17') {
    window.location =
      window.location.origin + '/content/solids/solids-4117.html';
  }

  //
  // Load SFP
  //
  if (opt == 'r5.1.1') {
    window.location = window.location.origin + '/content/sfp/sfp-511.html';
  }

  if (opt == 'r5.1.2') {
    window.location = window.location.origin + '/content/sfp/sfp-512.html';
  }

  if (opt == 'r5.1.3') {
    window.location = window.location.origin + '/content/sfp/sfp-513.html';
  }

  if (opt == 'r5.1.4') {
    window.location = window.location.origin + '/content/sfp/sfp-514.html';
  }

  if (opt == 'r5.1.5') {
    window.location = window.location.origin + '/content/sfp/sfp-515.html';
  }

  if (opt == 'r5.1.6') {
    window.location = window.location.origin + '/content/sfp/sfp-516.html';
  }

  if (opt == 'r5.1.7') {
    window.location = window.location.origin + '/content/sfp/sfp-517.html';
  }

  if (opt == 'r5.1.8') {
    window.location = window.location.origin + '/content/sfp/sfp-518.html';
  }

  if (opt == 'r5.1.9') {
    window.location = window.location.origin + '/content/sfp/sfp-519.html';
  }

  if (opt == 'r5.1.10') {
    window.location = window.location.origin + '/content/sfp/sfp-5110.html';
  }

  if (opt == 'r5.1.11') {
    window.location = window.location.origin + '/content/sfp/sfp-5111.html';
  }

  if (opt == 'r5.1.12') {
    window.location = window.location.origin + '/content/sfp/sfp-5112.html';
  }

  if (opt == 'r5.1.13') {
    window.location = window.location.origin + '/content/sfp/sfp-5113.html';
  }

  if (opt == 'r5.1.14') {
    window.location = window.location.origin + '/content/sfp/sfp-5114.html';
  }

  if (opt == 'r5.1.15') {
    window.location = window.location.origin + '/content/sfp/sfp-5115.html';
  }

  if (opt == 'r5.1.16') {
    window.location = window.location.origin + '/content/sfp/sfp-5116.html';
  }

  //
  // Load Recipes
  //
  if (opt == 'r6.1.1') {
    window.location =
      window.location.origin + '/content/recipe/recipe-611.html';
  }

  if (opt == 'r6.2.1') {
    window.location =
      window.location.origin + '/content/recipe/recipe-621.html';
  }

  if (opt == 'r6.3.1') {
    window.location =
      window.location.origin + '/content/recipe/recipe-631.html';
  }

  if (opt == 'r6.4.1') {
    window.location =
      window.location.origin + '/content/recipe/recipe-641.html';
  }

  if (opt == 'r6.5.1') {
    window.location =
      window.location.origin + '/content/recipe/recipe-651.html';
  }

  if (opt == 'r6.6.1') {
    window.location =
      window.location.origin + '/content/recipe/recipe-661.html';
  }

  if (opt == 'r6.7.1') {
    window.location =
      window.location.origin + '/content/recipe/recipe-671.html';
  }

  //
  // For parents
  //
  if (opt == 'r7.1.1') {
    window.location =
      window.location.origin + '/content/parents/parents-711.html';
  }

  if (opt == 'r7.1.2') {
    window.location =
      window.location.origin + '/content/parents/parents-712.html';
  }

  if (opt == 'r7.1.3') {
    window.location =
      window.location.origin + '/content/parents/parents-713.html';
  }

  if (opt == 'r7.1.4') {
    window.location =
      window.location.origin + '/content/parents/parents-714.html';
  }

  if (opt == 'r7.1.5') {
    window.location =
      window.location.origin + '/content/parents/parents-715.html';
  }

  if (opt == 'r7.1.6') {
    window.location =
      window.location.origin + '/content/parents/parents-716.html';
  }

  if (opt == 'r7.1.7') {
    window.location =
      window.location.origin + '/content/parents/parents-717.html';
  }

  //
  // Help and support
  //
  if (opt == 'r8.1') {
    window.location = window.location.origin + '/content/hs/hs-81.html';
  }

  if (opt == 'r8.1.1') {
    window.location = window.location.origin + '/content/hs/hs-811.html';
  }

  if (opt == 'r8.1.2') {
    window.location = window.location.origin + '/content/hs/hs-812.html';
  }

  if (opt == 'r8.1.3') {
    window.location = window.location.origin + '/content/hs/hs-813.html';
  }

  if (opt == 'r8.1.4') {
    window.location = window.location.origin + '/content/hs/hs-814.html';
  }

  if (opt == 'r8.1.5') {
    window.location = window.location.origin + '/content/hs/hs-815.html';
  }

  if (opt == 'r8.1.6') {
    window.location = window.location.origin + '/content/hs/hs-816.html';
  }

  if (opt == 'r8.1.7') {
    window.location = window.location.origin + '/content/hs/hs-817.html';
  }

  if (opt == 'r8.1.8') {
    window.location = window.location.origin + '/content/hs/hs-818.html';
  }

  if (opt == 'r8.1.9') {
    window.location = window.location.origin + '/content/hs/hs-819.html';
  }

  if (opt == 'r8.1.10') {
    window.location = window.location.origin + '/content/hs/hs-8110.html';
  }

  //
  // Play
  //
  if (opt == 'r9.1.1') {
    window.location = window.location.origin + '/content/play/play-911.html';
  }

  if (opt == 'r9.1.2') {
    window.location = window.location.origin + '/content/play/play-912.html';
  }

  if (opt == 'r9.1.3') {
    window.location = window.location.origin + '/content/play/play-913.html';
  }

  if (opt == 'r9.1.4') {
    window.location = window.location.origin + '/content/play/play-914.html';
  }

  if (opt == 'r9.1.5') {
    window.location = window.location.origin + '/content/play/play-915.html';
  }

  if (opt == 'r9.1.5a') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5a';
  }

  if (opt == 'r9.1.5p') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5p';
  }

  if (opt == 'r9.1.5ac') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5ac';
  }

  if (opt == 'r9.1.5ap') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5ap';
  }

  if (opt == 'r9.1.5bd') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5bd';
  }

  if (opt == 'r9.1.5bq') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5bq';
  }

  if (opt == 'r9.1.5ce') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5ce';
  }

  if (opt == 'r9.1.5ct') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5ct';
  }

  if (opt == 'r9.1.5dh') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5dh';
  }

  if (opt == 'r9.1.5dv') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5dv';
  }

  if (opt == 'r9.1.5ek') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5ek';
  }

  if (opt == 'r9.1.5ey') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5ey';
  }

  if (opt == 'r9.1.5fn') {
    window.location =
      window.location.origin + '/content/play/play-915.html#9.1.5fn';
  }

  if (opt == 'r9.1.6') {
    window.location = window.location.origin + '/content/play/play-916.html';
  }

  //
  // Pregnancy
  //
  if (opt == 'r10.1.1') {
    window.location = window.location.origin + '/content/py/py-1011.html';
  }

  if (opt == 'r10.1.2') {
    window.location = window.location.origin + '/content/py/py-1012.html';
  }

  if (opt == 'r10.1.3') {
    window.location = window.location.origin + '/content/py/py-1013.html';
  }

  if (opt == 'r10.1.4') {
    window.location = window.location.origin + '/content/py/py-1014.html';
  }

  if (opt == 'r10.1.5') {
    window.location = window.location.origin + '/content/py/py-1015.html';
  }

  if (opt == 'r10.1.6') {
    window.location = window.location.origin + '/content/py/py-1016.html';
  }

  if (opt == 'r10.1.2a') {
    window.location =
      window.location.origin + '/content/py/py-1012.html#10.1.2a';
  }

  if (opt == 'r10.1.2s') {
    window.location =
      window.location.origin + '/content/py/py-1012.html#10.1.2s';
  }

  if (opt == 'r10.1.2u') {
    window.location =
      window.location.origin + '/content/py/py-1012.html#10.1.2u';
  }

  if (opt == 'r10.1.2w') {
    window.location =
      window.location.origin + '/content/py/py-1012.html#10.1.2w';
  }

  if (opt == 'r10.1.2ae') {
    window.location =
      window.location.origin + '/content/py/py-1012.html#10.1.2ae';
  }

  if (opt == 'r10.1.2ah') {
    window.location =
      window.location.origin + '/content/py/py-1012.html#10.1.2ah';
  }

  //
  // Top tips
  //
  if (opt == 'r11.1.1a') {
    window.location = window.location.origin + '/content/tips/tips-1111a.html';
  }

  if (opt == 'r11.1.1b') {
    window.location = window.location.origin + '/content/tips/tips-1111b.html';
  }

  if (opt == 'r11.1.1c') {
    window.location = window.location.origin + '/content/tips/tips-1111c.html';
  }

  if (opt == 'r11.1.1d') {
    window.location = window.location.origin + '/content/tips/tips-1111d.html';
  }

  if (opt == 'r11.1.1e') {
    window.location = window.location.origin + '/content/tips/tips-1111e.html';
  }

  if (opt == 'r11.1.1f') {
    window.location = window.location.origin + '/content/tips/tips-1111f.html';
  }

  if (opt == 'r11.1.1g') {
    window.location = window.location.origin + '/content/tips/tips-1111g.html';
  }

  if (opt == 'r11.1.1h') {
    window.location = window.location.origin + '/content/tips/tips-1111h.html';
  }

  if (opt == 'r11.1.1i') {
    window.location = window.location.origin + '/content/tips/tips-1111i.html';
  }

  if (opt == 'r11.1.1j') {
    window.location = window.location.origin + '/content/tips/tips-1111j.html';
  }

  if (opt == 'r11.1.1k') {
    window.location = window.location.origin + '/content/tips/tips-1111k.html';
  }
}

$(document).ready(function() {
  $('.mbn-name').text($.session.get('babyName') + ' Now');
});

(function($) {
  $.session = {
    _id: null,

    _cookieCache: undefined,

    _init: function() {
      if (!window.name) {
        window.name = Math.random();
      }
      this._id = window.name;
      this._initCache();

      // See if we've changed protcols

      var matches = new RegExp(this._generatePrefix() + '=([^;]+);').exec(
        document.cookie
      );
      if (matches && document.location.protocol !== matches[1]) {
        this._clearSession();
        for (var key in this._cookieCache) {
          try {
            window.sessionStorage.setItem(key, this._cookieCache[key]);
          } catch (e) {}
        }
      }

      document.cookie =
        this._generatePrefix() +
        '=' +
        document.location.protocol +
        ';path=/;expires=' +
        new Date(new Date().getTime() + 120000).toUTCString();
    },

    _generatePrefix: function() {
      return '__session:' + this._id + ':';
    },

    _initCache: function() {
      var cookies = document.cookie.split(';');
      this._cookieCache = {};
      for (var i in cookies) {
        var kv = cookies[i].split('=');
        if (new RegExp(this._generatePrefix() + '.+').test(kv[0]) && kv[1]) {
          this._cookieCache[kv[0].split(':', 3)[2]] = kv[1];
        }
      }
    },

    _setFallback: function(key, value, onceOnly) {
      var cookie = this._generatePrefix() + key + '=' + value + '; path=/';
      if (onceOnly) {
        cookie += '; expires=' + new Date(Date.now() + 120000).toUTCString();
      }
      document.cookie = cookie;
      this._cookieCache[key] = value;
      return this;
    },

    _getFallback: function(key) {
      if (!this._cookieCache) {
        this._initCache();
      }
      return this._cookieCache[key];
    },

    _clearFallback: function() {
      for (var i in this._cookieCache) {
        document.cookie =
          this._generatePrefix() +
          i +
          '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
      this._cookieCache = {};
    },

    _deleteFallback: function(key) {
      document.cookie =
        this._generatePrefix() +
        key +
        '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      delete this._cookieCache[key];
    },

    get: function(key) {
      return window.sessionStorage.getItem(key) || this._getFallback(key);
    },

    set: function(key, value, onceOnly) {
      try {
        window.sessionStorage.setItem(key, value);
      } catch (e) {}
      this._setFallback(key, value, onceOnly || false);
      return this;
    },

    delete: function(key) {
      return this.remove(key);
    },

    remove: function(key) {
      try {
        window.sessionStorage.removeItem(key);
      } catch (e) {}
      this._deleteFallback(key);
      return this;
    },

    _clearSession: function() {
      try {
        window.sessionStorage.clear();
      } catch (e) {
        for (var i in window.sessionStorage) {
          window.sessionStorage.removeItem(i);
        }
      }
    },

    clear: function() {
      this._clearSession();
      this._clearFallback();
      return this;
    }
  };

  $.session._init();
})(jQuery);
