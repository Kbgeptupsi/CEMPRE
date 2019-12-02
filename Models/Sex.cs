using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Sex
    {
        [Key]
        public int SkSex { get; set; }

        public string Name { get; set; }
    }
}