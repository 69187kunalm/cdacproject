using System;
using System.Collections.Generic;

namespace RentIT.Models
{
    public partial class Appliance
    {
        public int AppId { get; set; }
        public string? Description { get; set; }
        public byte[]? Image { get; set; }
        public string? Name { get; set; }
        public double? Pricepermonth { get; set; }
        public int? CatId { get; set; }
        public int? UserId { get; set; }
        public int? Isverified { get; set; }
        public int? Onrent { get; set; }

        public virtual Category? Cat { get; set; }
        public virtual User? User { get; set; }
    }
}
