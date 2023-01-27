using System.ComponentModel.DataAnnotations;

namespace Versta.Models
{
    public class Order
    {
        public int id { get; set; }
        public string order { get; set; }
        public string sendCity { get; set; }
        public string sendAddress { get; set; }
        public string recipCity { get; set; }
        public string recipAddress { get; set; }
        public int cargoWeight { get; set; }
        public string pickupDate { get; set; }
    }
}
