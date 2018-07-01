//資料來源
var rtnList = [{
    EMP_ID: "A1",
    level: "A",
    ratio: 3
        }, {
    EMP_ID: "A2",
    level: "B",
    ratio: 3
        }, {
    EMP_ID: "A3",
    level: "C",
    ratio: 5
        }, {
    EMP_ID: "A4",
    level: "D",
    ratio: 6
        }, {
    EMP_ID: "A5",
    level: "E",
    ratio: 1
        }, {
    EMP_ID: "A6",
    level: "B",
    ratio: 2
        }, {
    EMP_ID: "A7",
    level: "C",
    ratio: 3
        }, {
    EMP_ID: "A8",
    level: "D",
    ratio: 4
        }, {
    EMP_ID: "A9",
    level: "E",
    ratio: 6
        }, {
    EMP_ID: "A10",
    level: "A",
    ratio: 9
        }, {
    EMP_ID: "B1",
    level: "A",
    ratio: 10
        }, {
    EMP_ID: "B2",
    level: "C",
    ratio: 12
        }, {
    EMP_ID: "B3",
    level: "E",
    ratio: 34
        }, {
    EMP_ID: "B4",
    level: "B",
    ratio: 56
        }, {
    EMP_ID: "B5",
    level: "D",
    ratio: 77
        }, {
    EMP_ID: "B6",
    level: "D",
    ratio: 88
        }, {
    EMP_ID: "B7",
    level: "C",
    ratio: 28
        }, {
    EMP_ID: "B8",
    level: "B",
    ratio: 19
        }, {
    EMP_ID: "B9",
    level: "A",
    ratio: 21
        }, {
    EMP_ID: "B10",
    level: "E",
    ratio: 22
        }, {
    EMP_ID: "C1",
    level: "C",
    ratio: 23
        }, {
    EMP_ID: "C2",
    level: "D",
    ratio: 34
        }, {
    EMP_ID: "C3",
    level: "E",
    ratio: 33
        }, {
    EMP_ID: "C4",
    level: "B",
    ratio: 13
        }, {
    EMP_ID: "C5",
    level: "C",
    ratio: 14
        }, {
    EMP_ID: "C6",
    level: "C",
    ratio: 41
        }, {
    EMP_ID: "C7",
    level: "B",
    ratio: 52
        }, {
    EMP_ID: "C8",
    level: "E",
    ratio: 63
        }, {
    EMP_ID: "C9",
    level: "B",
    ratio: 46
        }, {
    EMP_ID: "C10",
    level: "B",
    ratio: 123
        }, {
    EMP_ID: "C11",
    level: "A",
    ratio: 16
        }];


var button = {

    displayData: function (element) {
        console.log(element);
    }


};

// 動態生成tr td
function createTrTd(trCount, fileNames) {
    //console.log(trCount);
    //console.log(fileNames);
    var trList = [];

    var tr;
    for (var i = 0; i < trCount; i++) {
        // 純 javascript 的寫法
        //var a = document.createElement('tr');
        //a.setAttribute('class', 'foo');
        //a.setAttribute('href', '/foo.html');
        //a.appendChild(document.createTextNode("Next page"));

        // prototype.js 的寫法
        // var a = new Element('a', {
        //     'class': 'foo',
        //     href: '/foo.html'
        // }).update("Next page");

        tr = new Element("tr", {
            id: "tr" + i
        });


        var checkBox = new Element("input", {
            type: "checkbox",
            id: "tr" + i + "Checkbox",
            name: "checkedBox"
        });


        tr.insert(new Element("td", {
            id: "tr" + i + "checkBox"
        }).update(checkBox));




        // 將每列的資料開始帶進來
        for (var j = 0; j < fileNames.length; j++) {
            var tdId = "tr" + i + j;
            tr.insert(new Element("td", {
                id: tdId
            }).update("abc"));

        }

        trList.push(tr);


    }
    //console.log(tr);
    //console.log(trList);
    return trList;

};

//這個要有分頁功能
function generateTbodyData(dataList, recordLimit) {
    // dataList 是傳進來的 json
    // recordLimit 是每頁的筆數
    // 製作空表格
    //console.log(dataList);
    var trList = createTrTd(dataList.length, ["id", "level", "ratio"]);
    //console.log(trList);
    //trList.forEach(function(element) {
    //    console.log(element);
    //    $("dataBody").insert(element);
    //
    //    // 塞資料
    //    var childs = element.children;
    //
    //    //console.log(childs.length);
    //    console.log(childs[0]);
    //    console.log(childs[1]);
    //    console.log(childs[2]);
    //    console.log(childs[3]);
    //
    //
    //});


    //for (var i = 0; i < trList.length; i++) {
    for (var i = 0; i < recordLimit; i++) {
        //每10頁為1筆 先做出第一頁

        var tmp = trList[i];
        //console.log(tmp.childNodes[1]);
        //tmp.childNodes[1].innerHTML = "測試";
        //tmp.childNodes[0];
        tmp.childNodes[1].innerHTML = dataList[i].EMP_ID;
        tmp.childNodes[2].innerHTML = dataList[i].level;
        tmp.childNodes[3].innerHTML = dataList[i].ratio;
        $("dataBody").insert(trList[i]);
    }

};



function pageChangeData(dataList, countOnePage, nthPage) {
    // dataList 傳進來的json
    // countOnePage 每頁筆數
    // nthPage 現在準備顯示的頁數

    var totalPage = Math.ceil(dataList / countOnePage);
    if (nthPage > totalPage) {
        nthPage = totalPage;
    }

    console.log(dataList);


    var rowNumber;
    var trNumber;
    for (var i = 0; i < dataList.length; i++) {

        rowNumber = Math.floor(i / countOnePage);
        trNumber = i % countOnePage;
        //console.log(Math.floor(i / countOnePage));
        //console.log(i % countOnePage);
        //console.log($("tr" + rowNumber + columnNumber));
        //console.log($("tr" + trNumber));
    }

    // 第幾頁nthPage 的資料
    for (var i = 0; i < countOnePage; i++) {
        //console.log(dataList[i + (10 * (nthPage - 1))]);
        console.log($("tr" + i));
        if (dataList[i + (10 * (nthPage - 1))]) {
            $("tr" + i + "checkBox").checked = false;
            $("tr" + i + "0").update(dataList[i + (10 * (nthPage - 1))].EMP_ID);
            $("tr" + i + "1").update(dataList[i + (10 * (nthPage - 1))].level);
            $("tr" + i + "2").update(dataList[i + (10 * (nthPage - 1))].ratio);
        } else {
            $("tr" + i + "checkBox").update("")

            $("tr" + i + "0").update("");
            $("tr" + i + "1").update("");
            $("tr" + i + "2").update("");
        }


    }






};


function clearTbody() {
    //$("dataBody").empty();
    $("dataBody").update("");
    //$("dataBody").innerHTML = "";
};


function getCheckedBoxData(rtnList) {
    var checkedData = []

    // 抓dataBody資料
    var data = $("dataBody").children;
    // 將collection 轉為 Array
    var arr = Array.prototype.slice.call(data);
    //var arr = [].slice.call(data);
    //console.log(data);

    for (var i = 0; i < arr.length; i++) {
        // 第一個element-td的第一個element input checkbox
        var tmp = arr[i].childNodes[0].childNodes[0];
        //document.
        //tmp.checked = true;
        //console.log(tmp);

        if (tmp.checked) {
            checkedData.push(this.rtnList[i]);
            //console.log(rtnList[i]);
        }

    }


    //console.log(input);
    return checkedData;


};


function createDropDownElement(selectId, rtnList) {
    // 首先處理array不重複的問題
    var arr = [];


    for (var i = 0; i < this.rtnList.length; i++) {
        arr.push(this.rtnList[i].level);
    }


    var uniqueArr = arr.filter(onlyUnique);




    // 然後抓到id，並且塞資料進去
    var selectElement = $(selectId);
    selectElement.innerHTML = "";
    for (var i = 0; i < uniqueArr.length; i++) {
        var option = new Element("option", {
            value: arr[i]
        });
        option.update("等級" + arr[i]);
        selectElement.insert(option);

    }


};


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}



function filterLevel(level, rtnList) {
    var arr = rtnList;
    var arr2 = arr.filter(function (item, index, array) {
        return (item.level == level);
    })
    clearTbody();
    generateTbodyData(arr2);

    console.log(arr2);


}
