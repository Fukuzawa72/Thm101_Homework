using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace codeWars
{
    internal class Kata
    {
        //public static IEnumerable<string> OpenOrSenior(int[][] data)
        //{
        //    //your code here
        //    List<string> result = new List<string>();

        //    foreach (int[] pair in data)
        //    {
        //        int age = pair[0];
        //        int hadicap = pair[1];

        //        if(age >= 55 && hadicap > 7)
        //        {
        //            result.Add("senior");
        //        }
        //        else
        //        {
        //            result.Add("open");
        //        }
        //    }

        //    return result.ToArray();
        //}

        //Kata01: 如果輸入的名字是店主，回傳hello boss，反之都是hello guset
        public static string Greet(string name, string owner)
        {
            //return name == owner ? $"Hello boss" : $"Hello guest";
            return $"HELLO {(name == owner ? "boss" : "guest")}";
        }

        //Kata02: 回傳陣列內的所有值相乘的結果(有2種做法)
        public static int Grow1(int[] x)
        {
            int Sum = 1;

            foreach(int i in x)
            {
                Sum *= i;
            }
            return Sum;
        }

        public static int Grow2(int[] x)
        {
            return x.Aggregate((a,b) => a * b);
        }

        //Kata03: 如果給定的值是偶數，則*上8；反之，乘上9
        public static int Multiply(int x)
        {
            return x % 2 == 0 ? x * 8 : x * 9;
        }

        //Kata04: 每一頭龍需要兩個子彈才能消滅，計算總共要帶多少子彈。
        public static bool Hero(int bullets, int dragons)
        {
            //Do Some Magic...
            return bullets / 2 >= dragons;
        }

        //Kata05: 字串轉數字
        public static int StringToNumber(String str)
        {
            //return Convert.ToInt32(str);
            return int.Parse(str);
        }
        //Kata6: 將字串的首、尾字元刪除。
        public static string Remove_char(string s)
        {
            return s.Substring(1, s.Length - 2);
            //return  s.Remove(s.Length - 1, 1).Remove(0, 1);
    }

        //Kata7: 將含有字串與數字的陣列內的值全部相加。
        public static int SumMix1(object[] x)
        {
            int sum2 = 0;

            foreach (object o in x)
            {
                sum2 += int.Parse(o.ToString());
            }
            
            return sum2;
        }

        public static int SumMix2(object[] x)
        {
            return x.Sum(Convert.ToInt32);
        }

        //Kata8: 將陣列內所有的值都乘兩倍。
        public static int[] Maps1(int[] x)
        {
            for (int i = 0; i < x.Length; i++)
            {
                x[i] = x[i] * 2;
            }
            return x;
        }

        public static int[] Maps2(int[] x)
        {
            return x.Select(e => e * 2).ToArray();
        }

        //Kata9: 當為True回傳Yes；反之回傳No。
        public static string boolToWord(bool word)
        {
            //TODO
            return word ? "Yes" : "No";
        }

        //Kata10: 計算1 + num的總和。
        public static int summation(int num)
        {
            //Code here
            return (num * (num + 1)) / 2;
            //return Enumerable.Range(1, num).Sum();
        }

        //Kata11: 取得字串陣列裡的數字，將數字做比較，我方隊伍>對方隊伍 總分+3；我方隊伍=對方隊伍 總分+1，回傳總分。
        public static int TotalPoints(string[] games)
        {
            // insert magic here
            int total = 0;

            foreach(string game in games)
            {
                int x = int.Parse(game.Split(':')[0]);
                int y = int.Parse(game.Split(':')[1]);

                if(x > y)
                {
                    total += 3;
                }else if( x == y)
                {
                    total += 1;
                }
            }

            return total;
        }

        //Kata12: 有兩朵花，一朵花瓣為基數，一朵花瓣為偶數，回傳true；反之，則回傳false。
        public static bool lovefunc(int flower1, int flower2)
        {
            //Moment of truth...
            return flower1 + flower2 % 2 != 0;
        }

        //Kata13: 回傳n、m相乘的數，如果n或m小於0則回傳0。
        public static int Paperwork(int n, int m)
        {
            //#Happy Coding! ^_^
            return n > 0 && m > 0 ? n * m : 0;
        }

        //Kata14: 將陣列所有數都平方後相加
        public static int SquareSum1(int[] numbers)
        {
            //int sum = 0;

            //foreach (int number in numbers)
            //{
            //    sum += (int)Math.Pow(number, 3);
            //}

            //return sum;
            
            //return numbers.Select(x => x *x).Sum();
            return numbers.Sum(i => i * i);
        }

        //Kata15:反轉字串
        public static string Solution(string str)
        {
            //char[] charArray = str.ToCharArray();
            //Array.Reverse(charArray);
            //return new string(charArray);

            return new string(str.ToArray().Reverse().ToArray());
            throw new NotImplementedException("TODO: Kata.Solution(string) => string");
        }

        //Kata16:創建x的n倍數組，(1,3) => 1,2,3； (2,3)=> 2,4,6 (3,3)=> 3,6,9
        public static int[] CountBy(int x, int n)
        {
            int[] z = new int[n];

            for(int i = 1; i <= n; i++)
            {
                z[i - 1] = i * x;
            }
            return z;

            //return Enumerable.Range(1, n).Select(i => i * x).ToArray();
        }

        //Kata17:從二維陣列中取出age和hadicap，如果age大於55，hadicap大於7回傳senior，否則回傳open
        public static IEnumerable<string> OpenOrSenior(int[][] data)
        {
            //List<string> result = new List<String>();

            //foreach (int[] pair in data)
            //{
            //    int age = pair[0];
            //    int handicap = pair[1];

            //    if(age >= 55 && handicap> 7) {
            //        result.Add("Senior");
            //    }
            //    else
            //    {
            //        result.Add("Open");
            //    }
            //}
            ////your code here
            //return result.ToArray();

            return data.Select(pair => pair[0] >= 55 && pair[1] >7 ? "Senior" : "Open").ToList();
        }
    }

}
