using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;


namespace switch_enum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Monster M = new Monster("Monster", 50);
           
            while(true)
            {
                if (Console.KeyAvailable)
                {
                    M.keyinfo = Console.ReadKey();
                    M.Move();
                    M.reposition();
                }
            }

        }
    }
}
