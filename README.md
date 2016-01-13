<h1> Async Demo Example </h1>
<strong> Source code </strong>: index.js
# Introduction
Callback Hell là hiện tượng hàm lồng hàm trong javascript. Nó lồng dưới nhiều cấp, nó làm cho đoạn code dài dòng và rối rắm. Nó không phải là lỗi nhưng nó gây ra các lỗi khiến các đoạn mã vượt qúa tầm kiểm soát. Một trong những giải pháp Callback Hell sử dụng thư viện Async.
# Task 1: series
Thực thi một dãy các hàm, mỗi hàm được chạy một lần và sau khi hàm trước nó được gọi. Nếu một trong số các hàm bị lỗi khi gọi callback, thì các hàm khác không được gọi và nó lập thức trả về các giá trị lỗi. Khi hoàn thành nó sẽ trả về một mảng các kết quả.
# Task 2: parallel, parellelLimit
Chạy một mảng các hàm song song, không đợi lần lượt kết thúc như series. Nếu bất cứ một lỗi từ một hàm callback thì lập tức trả về lỗi. Kết quả sẽ được trả về một mảng từ kết quả của các hàm callback. 
# Task 3: waterfall
Chạy một mảng các hàm, gọi tuần tự các hàm giống như series nhưng kết quả trả về là kết quả của hàm cuối cùng. Nếu một trong các hàm bị lỗi thì waterfall sẽ trả về lỗi.
# Task 4: each, eachLimit, eachSeries
Duyệt tuần tự mảng
**Note:** 
* forEachOf, forEachOfSeries, forEachOfLimit duyệt tuần tự object.
* each: Run parallel, there is no guarantee that the iterator functions will complete in order.
* each: Run Sequence
# Task 5: map, mapLimit, mapSeries
**Note:**
* map: Run parallel and the results array will be in the same order as the original arr.
# Task 6:  filter, filterLimit, filterSeries
có thể gọi hàm select (nó làm hàm ẩn danh của filter)
hàm callback của iterator phải trả về true hoặc false
hàm thực thi song song (parallel)
Kết quả theo thứ tự như array truyền vào.
# Task 7: reduce, reduceRight
# Task 8: detect, detectSeries, detectLimit
trả về giá trị đầu tiên trong mảng khi mà hàm iterator return true,
hàm iterator chạy song song (parallel)


