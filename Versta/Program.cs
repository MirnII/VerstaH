using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using Versta.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

string connection = "Server=MRN;Database=Versta;Trusted_Connection=True;TrustServerCertificate=True;";
builder.Services.AddDbContext<OrderContext>(options => options.UseSqlServer(connection));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRouting();
app.MapGet("/api/viewing-orders", async (OrderContext db) => await db.Orders.ToListAsync());
app.MapGet("/api/order/{id:int}", async (int id, OrderContext db) =>
{
    Order? order = await db.Orders.FirstOrDefaultAsync(u => u.id == id);
    if (order == null) return Results.NotFound(new { message = "Заказ не найден" });
    return Results.Json(order);
});
app.MapPost("/api/create-order", async (Order order, OrderContext db) => {
    await db.Orders.AddAsync(order);
    await db.SaveChangesAsync();
    return order;
});
app.MapFallbackToFile("index.html");

app.Run();
