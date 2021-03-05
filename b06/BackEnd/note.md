B1: Truy cập vào thư mục
  - C:\Windows\System32\drivers\etc

B2: Mở file "hosts" với quyền admin

B3: Chỉnh sửa
  #	127.0.0.1       localhost
  #	::1             localhost

  127.0.0.1 learning-reactjs.xyz
  

====================== Cấu hình Xampp ======================
1. Open /Applications/XAMPP/etc/httpd.conf 
2. Enable the following Modules by removing the # at the front of the line.
 - LoadModule rewrite_module modules/mod_rewrite.so
 - LoadModule proxy_module modules/mod_proxy.so
 - LoadModule proxy_http_module modules/mod_proxy_http.so

3. Copy and Paste below to the bottom of httpd.conf

B1: Truy cập vào trong thư mục cài Xampp (Có thể là D hoặc C tùy máy)
  - C:\Users\luctc\Desktop\xampp\apache\conf

B2: Truy cập vào file "httpd.conf" 
  Tại dòng Listen 80 thêm vào Listen 999
    - Listen 80
    - Listen 9999

B3: Truy cập vào thư mục mở file "httpd-vhosts.conf"
  - C:\Users\luctc\Desktop\xampp\apache\conf\extra

  New Version
  <VirtualHost *:80>

      ProxyPass /wp-json/ http://127.0.0.1:9999/wp-api/wp-json/
      ProxyPassReverse /wp-json/ http://127.0.0.1:9999/wp-api/wp-json/

      ProxyPass /wp-api/ http://127.0.0.1:9999/wp-api/
      ProxyPassReverse /wp-api/ http://127.0.0.1:9999/wp-api/

      ProxyPass / http://127.0.0.1:3000/
      ProxyPassReverse / http://127.0.0.1:3000/

      ProxyRequests On
      ProxyPreserveHost On    

  </VirtualHost>

  <VirtualHost *:9999>

      DocumentRoot "C:/Users/luctc/Desktop/xampp/htdocs"
      ServerName learning-reactjs.xyz

  </VirtualHost>