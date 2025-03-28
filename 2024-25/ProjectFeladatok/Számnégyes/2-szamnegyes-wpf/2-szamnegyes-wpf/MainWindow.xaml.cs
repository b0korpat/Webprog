using System.Windows;
using System.Windows.Controls;

namespace _2_szamnegyes_wpf;

/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : Window
{
        private int[][] table;

        public MainWindow()
        {
            InitializeComponent();
            InitializeTable();
            UpdateBoard();
        }

        private void InitializeTable()
        {
            table = new int[3][];
            for (int i = 0; i < 3; i++)
                table[i] = new int[3];
        }

        private void UpdateBoard()
        {
            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    var label = (Label)FindName($"Cell{row}{col}");
                    if (label != null)
                    {
                        label.Content = table[row][col].ToString();
                    }
                }
            }
        }

        private void IncreaseValues(int button)
        {
            switch (button)
            {
                case 0: // A gomb (bal felső 2×2)
                    table[0][0]++;
                    table[0][1]++;
                    table[1][0]++;
                    table[1][1]++;
                    break;
                case 1: // B gomb (jobb felső 2×2)
                    table[0][1]++;
                    table[0][2]++;
                    table[1][1]++;
                    table[1][2]++;
                    break;
                case 2: // C gomb (bal alsó 2×2)
                    table[1][0]++;
                    table[1][1]++;
                    table[2][0]++;
                    table[2][1]++;
                    break;
                case 3: // D gomb (jobb alsó 2×2)
                    table[1][1]++;
                    table[1][2]++;
                    table[2][1]++;
                    table[2][2]++;
                    break;
            }
            UpdateBoard();
            CheckTable();
        }

        private void CheckTable()
        {
            var result = TableGame(table);
            if (result.Length == 1 && result[0] == -1)
            {
                MessageBox.Show("Hibás állapot!", "Figyelmeztetés", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        public int[] TableGame(int[][] table)
        {
            if (table[0][0] + table[0][2] != table[0][1])
            {
                return new int[] { -1 };
            }

            if (table[1][0] + table[1][2] != table[1][1])
            {
                return new int[] { -1 };
            }

            if (table[2][0] + table[2][2] != table[2][1])
            {
                return new int[] { -1 };
            }

            if (table[0][0] + table[2][0] != table[1][0])
            {
                return new int[] { -1 };
            }

            if (table[0][1] + table[2][1] != table[1][1])
            {
                return new int[] { -1 };
            }

            if (table[0][2] + table[2][2] != table[1][2])
            {
                return new int[] { -1 };
            }

            int[] result = new int[4];
            result[0] = table[0][0];
            result[1] = table[0][2];
            result[2] = table[2][0];
            result[3] = table[2][2];

            return result;
        }

        private void ResetTable(object sender, RoutedEventArgs e)
        {
            InitializeTable();
            UpdateBoard();
        }

        private void ButtonA_Click(object sender, RoutedEventArgs e) => IncreaseValues(0);
        private void ButtonB_Click(object sender, RoutedEventArgs e) => IncreaseValues(1);
        private void ButtonC_Click(object sender, RoutedEventArgs e) => IncreaseValues(2);
        private void ButtonD_Click(object sender, RoutedEventArgs e) => IncreaseValues(3);
    }

