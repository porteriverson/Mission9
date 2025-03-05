// See https://aka.ms/new-console-template for more information

internal class Program
{
    private static void Main(string[] args)
    {
        int num = int.Parse(args[1]);
        Console.WriteLine("Hello, " + args[0] + "!");
        Console.WriteLine(num + " squared is " + (num * num));
    }
}
