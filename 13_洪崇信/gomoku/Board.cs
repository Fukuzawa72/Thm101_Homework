using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gomoku
{
    class Board
    {
        private static readonly Point NO_MATCH_NODE = new Point(-1, -1);

        private static readonly int OFFSET = 75;
        private static readonly int NODE_RADIUS = 40;
        private static readonly int NODE_DISTANCE = 75;
        public bool CanBePlaced(int x, int y)
        {
            Point nodeId = FindTheClosetNode(x, y);

            if (nodeId == NO_MATCH_NODE)
                return false;
            
            return true;
        }
        private Point FindTheClosetNode(int x, int y)
        {
            int nodeIdX = FindTheClosetNode(x);
            if (nodeIdX == -1 )
            {
                return NO_MATCH_NODE;
            }

            int nodeIdY = FindTheClosetNode(y);
            if (nodeIdY == -1)
            {
                return NO_MATCH_NODE;
            }
            
            return new Point(nodeIdX, nodeIdY);
        }

        private int FindTheClosetNode(int pos)
        {
            pos -= OFFSET;
            int quotient = pos / NODE_RADIUS;
            int reminder = pos % NODE_RADIUS;

            if (reminder <= NODE_RADIUS) 
            {
                return quotient;
            }
            else if (reminder >= NODE_DISTANCE - NODE_RADIUS)
            {
                return quotient + 1;
            }
            else
            {
                return -1;
            }
        }
    }
}
