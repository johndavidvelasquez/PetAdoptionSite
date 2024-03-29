﻿using System;
using System.Collections.Generic;

namespace PetAdoptionSite.Models
{
    public partial class PetPost
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int PetTypeId { get; set; }
        public int? PetSubTypeId { get; set; }
        public string Description { get; set; }
        public string ProvinceKey { get; set; }
        public string CityName { get; set; }
        public int UserId { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
    }
}
