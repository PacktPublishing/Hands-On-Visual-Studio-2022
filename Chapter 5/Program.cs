var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.Environment.EnvironmentName = "Testing Data Breakpoints";

app.UseHttpsRedirection();
app.UseStaticFiles();


app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");


for(int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}


StopHere();

CommonMethod("Before invocation of NewMethod()");
NewMethod();
CommonMethod("After invocation of NewMethod()");


TestLocalsAndAutos();


void StopHere()
{
    Console.WriteLine("Hi!");
}

void NewMethod()
{
    Console.WriteLine("New Method");
}

void CommonMethod(string message)
{
    Console.WriteLine(message);
}

void TestLocalsAndAutos()
{
    var currentString = "Hello World";

    for (int i = 0; i < 10; i++)
    {
        Console.WriteLine(i);
    }
}

app.Run();
