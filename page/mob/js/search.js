
var content = [
  { title: '关于举办北京航空航天大学第二届提案大赛的通知',
    des: ' ' ,
	url: 'http://v.xiumi.us/board/v5/22bRN/68550358'
  },

  { title: '第二届“爱权益，爱北航”提案大赛 报名规则',
    des: ' ' ,
	url: 'http://v.xiumi.us/board/v5/22bRN/68551100'
  },
  { title: '第二届“爱北航，爱权益”提案大赛 院系参赛类奖项设置及评选方法',
    des: ' ',
	url: 'http://v.xiumi.us/board/v5/3mKbi/68551443'
  },
  { title: '第二届“爱北航，爱权益”提案大赛，社团参赛类奖项设置及评选方法',
    des: ' ',
	url: 'http://v.xiumi.us/board/v5/2Sxir/68550596'
  },
  { title: '第二届“爱北航，爱权益”提案大赛 个人参赛类奖项设置及评选方法',
    des: ' ',
	url: 'http://v.xiumi.us/board/v5/3iVMX/68551801'
  },
  { title: '第六篇',
    des: '这是那个第六篇推送',
	url: 'http://www.w3school.com.cn/'
  },
  { title: '第七篇',
    des: '这是那个第七篇推送',
	url: 'http://www.w3school.com.cn/'
  }
  ];

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if ( r != null ){
       return decodeURI(r[2]);
    }else{
       return null;
    }
 }


function showList(keyword){

	var list = document.getElementById('list')
	if((!keyword)||(keyword.length==0)){
		for(var i=0;i<content.length;i++){
			var link = document.createElement("a");
			link.innerHTML = "题目："+content[i].title+"摘要："+content[i].des;
			link.href = content[i].url;
			var li = document.createElement("li");
			li.class = "in";
			list.append(li);
			li.append(link);
		}
	}
	else for(var i=0;i<content.length;i++){
		if(content[i].title.indexOf(keyword)>=0||content[i].des.indexOf(keyword)>=0){
			var link = document.createElement("a");
			link.innerHTML = content[i].title+content[i].des;
			link.href = content[i].url;
			var li = document.createElement("li");
			li.class = "in";
			list.append(li);
			li.append(link);
		}else{
			var link = document.createElement("a");
			link.innerHTML = content[i].title+content[i].des;
			link.href = content[i].url;
			var li = document.createElement("li");
			li.class = 'hidden';
			list.append(li);
			li.append(link);
		}

	}
}

function changeShow() {
     //$(this).addClass('hidden');

    var searchTerm = $("#search-text").val();
    var listItem = $('#list').children('li');


    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});


    $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });

    $("#list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });


      var jobCount = $('#list .in').length;
    $('.list-count').text('共 ' + jobCount + ' 条');

    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }

  }

$(document).ready(function() {

	console.log(getQueryString("searchvalue"));
	document.getElementById('search-text').value = getQueryString("searchvalue");
	showList(getQueryString("searchvalue"));
    changeShow();


  $("#search-text").keyup(changeShow);



     /*
     An extra! This function implements
     jQuery autocomplete in the searchbox.
     Uncomment to use :)


 function searchList() {
    //array of list items
    var listArray = [];

     $("#list li").each(function() {
    var listText = $(this).text().trim();
      listArray.push(listText);
    });

    $('#search-text').autocomplete({
        source: listArray
    });


  }

  searchList();
*/


});
