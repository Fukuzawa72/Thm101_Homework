using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace switch_enum
{
    public class Monster
    {
        int x;
        int y;
        string Name;
        int Level;
        public ConsoleKeyInfo keyinfo = Console.ReadKey();

        public Monster(string name, int level, int x = 0, int y = 0)
        {
            this.Name = name;
            this.Level = level;
            this.x = x;
            this.y = y;
        }

        public void Move()
        {
            switch (keyinfo.Key)
            {
                case ConsoleKey.UpArrow:
                    y = y > 0 ? y - 1 : 0;
                    break;
                case ConsoleKey.DownArrow:
                    y = y < Console.WindowHeight - 1 ? y + 1 : Console.WindowHeight - 1;
                    break;
                case ConsoleKey.LeftArrow:
                    x = x > 0 ? x - 1 : 0;
                    break;
                case ConsoleKey.RightArrow:
                    x = x < Console.WindowWidth - 1 ? x + 1 : Console.WindowWidth - 1;
                    break;
            }
        }

        public void reposition()
        {
            Console.SetCursorPosition(0, 0);
            Console.Write($"current position: {x},{y}");
        }
    }
}