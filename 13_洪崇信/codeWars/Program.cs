using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace codeWars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine(Kata.SquareSum(new[] { 1, 2, 2 }));

            //int[] result1 = Kata.CountBy(1, 10);
            //Console.WriteLine(string.Join(",", result1));


            //Console.WriteLine(Kata.lovefunc(1,4));

            //Console.WriteLine(Kata.Paperwork(5,-5));

            //Console.WriteLine(Kata.Remove_char("strings"));
            //Console.WriteLine(Kata.Solution("abcdefgh"));

            //Kata01: 如果輸入的名字是店主，回傳hello boss，反之都是hello guset
            Console.WriteLine(/*Kata.Greet("Daniel", "Frank")*/ Kata.Greet("Frank", "Frank"));

            //Kata02: 回傳陣列內的所有值相乘的結果
            Console.WriteLine(Kata.Grow1(new[] {1,2,3,4, 5, 6}));
            Console.WriteLine(Kata.Grow2(new[] {1,2,3,4,5}));

            //Kata03: 如果給定的值是偶數，則*上8；反之，乘上9
            Console.WriteLine(Kata.Multiply(3));

            //Kata04: 每一頭龍需要兩個子彈才能消滅，計算總共要帶多少子彈。
            Console.WriteLine(Kata.Hero(7,4));

            //Kata05: 字串轉數字
            Console.WriteLine(Kata.StringToNumber("1234"));
            
            //Kata6: 將字串的首、尾字元刪除。
            Console.WriteLine(Kata.Remove_char("abcde"));

            //Kata7: 將含有字串與數字的陣列內的值全部相加。
            Console.WriteLine(Kata.SumMix1(new object[] { 2, 2, "3", "3" }));
            Console.WriteLine(Kata.SumMix2(new object[] { 4, 4, "6", "6" }));

            //Kata8: 將陣列內所有的值都乘兩倍。
            Console.WriteLine(string.Join(",", Kata.Maps1(new[] { 1, 2, 3 })));
            Console.WriteLine(string.Join(",", Kata.Maps2(new[] { 4, 5, 6 })));

            //Kata9: 當為True回傳Yes；反之回傳No。
            Console.WriteLine(Kata.boolToWord(true));

            //Kata10: 計算1 + num的總和。
            Console.WriteLine(Kata.summation(5));

            //Kata11: 取得字串陣列裡的數字，將數字做比較，我方隊伍>對方隊伍 總分+3；我方隊伍=對方隊伍 總分+1，回傳總分。
            Console.WriteLine(Kata.TotalPoints(new[] { "1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3" }));

            //Kata12: 有兩朵花，一朵花瓣為基數，一朵花瓣為偶數，回傳true；反之，則回傳false。
            Console.WriteLine(Kata.lovefunc(12, 15));

            //Kata13: 回傳n、m相乘的數，如果n或m小於0則回傳0
            Console.WriteLine(Kata.Paperwork(50,99));

            //Kata14: 將陣列所有數都平方後相加
            Console.WriteLine(Kata.SquareSum1(new int[] { 1, 2, 2 }));

            //Kata15:反轉字串
            Console.WriteLine(Kata.Solution("reven"));

            //Kata16:創建x的n倍數組，(1,3) => 1,2,3； (2,3)=> 2,4,6 (3,3)=> 3,6,9
            Console.WriteLine(String.Join(",", Kata.CountBy(5, 5)));

            //Kata17:從二維陣列中取出age和hadicap，如果age大於55，hadicap大於7回傳senior，否則回傳open
            Console.WriteLine(String.Join(",", Kata.OpenOrSenior(new[] { new[] { 45, 12 }, new[] { 55, 21 }, new[] { 19, 2 }, new[] { 104, 20 } })));

        }
    }
}
