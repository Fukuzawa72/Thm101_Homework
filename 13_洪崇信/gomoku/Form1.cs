namespace gomoku
{
    public partial class Form1 : Form
    {
        private bool isBlack = true;
        private Board board = new Board();

        public Form1()
        {
            InitializeComponent();

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            
        }

        private void Form1_MouseDown_1(object sender, MouseEventArgs e)
        {
            if (isBlack)
            {
                this.Controls.Add(new BlackPiece(e.X, e.Y));
                isBlack= false;
            }
            else
            {
                this.Controls.Add(new WhitePiece(e.X, e.Y));
                isBlack = true;
            }
        }

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            if(board.CanBePlaced(e.X, e.Y))
            {
                this.Cursor= Cursors.Hand;
            }
            else
            {
                this.Cursor= Cursors.Default;
            }

        }
    }
}