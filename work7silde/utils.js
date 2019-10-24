//冒泡排序
function bubbleSort(str) {
    //把字符串切分成数组
    let arr = str.split(',')
    //声明排序步骤记录数组sortLog数组的数据用于动画演示
    let sortLog = []
    //比较轮数,数组有多少个数字,就比较数组长度-1轮
    for (let i = 0; i < arr.length - 1; i++) {
        //从第一个开始比较相邻的两个数值，
        for (let j = 0; j < arr.length - i - 1; j++) {
            //把比较前的数组状态和定位指针保存到sortLog中，为保持演示效果，加多两行。
            sortLog.oush([arr.concat(), [j, j + 1]])
            sortLog.push([arr.concat(), [j, j + 1]])
            sortLog.push([arr.concat(), [j, j + 1]])
            //比较相邻的两个元素，如果左面的大，那么就把大的交换到右边
            if (arr[j] > arr[j + 1]) {
                //使用结构赋值的方法，把两个元素交换位置
                [arr[j], arr[j + 1]] = [arr[j + 1],arr[j]]
                //把比较之后的数组状态和定位指针保存到sortLog中
                sortLog.push([arr.concat(), [j, j + 1]])
            }
        }
    }
    //把排序最终状态的数组和取消定位指针保存到sortLog中，因为动画的最后状态是不显示比较数据的。
    sortLog.push([arr.concat(), [-1, -1]])
    //调试时请认真分析sortLog的数据结构
    //console.log(sortLog)
    return sortLog
}
//显示排序的每一个步骤
function showLog(logValues, showElement) {
    let str = ''
    //结构赋值的方式，从排序日志遍历器去取出一条结果，赋值给row和pos变量
    let {
        done,
        value: [row, pos]
    } = logValues.next()
    //比对一下row和pos的值是否与排序时保存一致
    //console.log(row)
    //console.log(pos)
    //遍历row数组，构建显示当前排序状态的html代码
    for (const key in row) {
        
    }
}
//插入排序
function instertSort(str) {
    let arr = str.split(',')
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }
    return arr
}