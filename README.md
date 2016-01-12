<h1> Async Demo Example </h1>
<strong> Source code </strong>: index.js
# Introduction
Callback Hell là hiện tượng hàm lồng hàm trong javascript. Nó lồng dưới nhiều cấp, nó làm cho đoạn code dài dòng và rối rắm. Nó không phải là lỗi nhưng nó gây ra các lỗi khiến các đoạn mã vượt qúa tầm kiểm soát. Một trong những giải pháp Callback Hell sử dụng thư viện Async.
# series
Thực thi một dãy các hàm, mỗi hàm được chạy một lần và sau khi hàm trước nó được gọi. Nếu một trong số các hàm bị lỗi khi gọi callback, thì các hàm khác không được gọi và nó lập thức trả về các giá trị lỗi. Khi hoàn thành nó sẽ trả về một mảng các kết quả.

