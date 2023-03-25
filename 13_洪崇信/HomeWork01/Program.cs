// See https://aka.ms/new-console-template for more information
/*===== 九九乘法表 =====*/
using HomeWork01;

Console.WriteLine("九九乘法表:");
for (int i = 1; i < 10; i++)
{
    for (int j = 1; j < 10; j++)
    {
        string ans = (i * j).ToString("00");
        Console.Write($"{j} * {i} = {ans}  ");
    }
    Console.Write("\r\n");
}
Console.Write("\r\n"); //換行，與主程式無關。

/*===== struct型態下，字串相加的兩種寫法 =====*/
Console.WriteLine("struct型態下，字串相加的兩種寫法:");
AddTwoString01 combine01 = new AddTwoString01();
combine01.s1 = "abc";
combine01.s2 = "def";
combine01.StringCombined = combine01.s1 + combine01.s2;
Console.WriteLine(combine01.StringCombined);

AddTwoString01 combined02 = new AddTwoString01();
combined02.s1 = "ABC";
combined02.s2 = "DEF";
Console.WriteLine($"{combined02.s1}{combined02.s2}");
Console.Write("\r\n");//換行，與主程式無關。


/*===== Car為基底類別的衍伸類別 =====*/
Console.WriteLine("Car為基底類別的衍伸類別:");
Car Toyota = new Car();
Toyota.Price = 1000;
Toyota.Name = "corolla cross";
Toyota.QuantityOfPassenger = 5;
Console.WriteLine($"車名:{Toyota.Name}  價格:{Toyota.Price} 座位數量:{Toyota.QuantityOfPassenger}");