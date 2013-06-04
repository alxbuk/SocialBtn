/*!
  Social Button Lite
  AlxBuk <http://www.alxbuk.ru>
*/
Share = {
vkontakte: function(purl, ptitle, text) {
url='http://vkontakte.ru/share.php?';url+='url='+ encodeURIComponent(purl);
url+='&title='+ encodeURIComponent(ptitle);url +='&description='+encodeURIComponent(text);
url+='&noparse=true';Share.popup(url);},
facebook: function(purl, ptitle, text) {
url='http://www.facebook.com/sharer.php?s=100';url+='&p[title]='+ encodeURIComponent(ptitle);url+='&p[summary]='+ encodeURIComponent(text);
url+='&p[url]='+ encodeURIComponent(purl);Share.popup(url);},
twitter: function(purl, ptitle) {
url='http://twitter.com/share?';url+='text='+ encodeURIComponent(ptitle);url+='&url='+ encodeURIComponent(purl);
url+='&counturl=' + encodeURIComponent(purl);Share.popup(url);},
tumblr: function(purl, ptitle) {
url='http://www.tumblr.com/share?v=3';url+='&u='+ encodeURIComponent(purl);
url+='&t='+ encodeURIComponent(ptitle);Share.popup(url);},
gplus: function(purl) {url='https://plus.google.com/share?';url+='url='+ encodeURIComponent(purl);Share.popup(url);},
popup: function(url) {window.open(url,'','toolbar=0,status=0,width=626,height=436');}};
