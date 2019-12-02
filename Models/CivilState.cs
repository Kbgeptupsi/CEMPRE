using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class CivilState
    {
        [Key]
        public int SkState { get; set; }

        public string Name { get; set; }

    }
}