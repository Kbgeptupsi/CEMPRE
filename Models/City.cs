using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class City
    {
        [Key]
        public int SkCity { get; set; }

        public Department FkDpto { get; set; }

        [ForeignKey("FkDpto")]
        public int FkDepartment { get; set; }

        public string Name { get; set; }
    
    }
}