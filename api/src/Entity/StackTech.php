<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\StackTechRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Liste des compétences techniques (ex : javascript - php ...)
 * 
 * @ApiResource()
 * @ORM\Entity(repositoryClass=StackTechRepository::class)
 */
class StackTech
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $id;

    /**
     * Nom de la compétence
     * @ORM\Column(type="string", length=255)
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity=Mentor::class, mappedBy="stack_techs")
     */
    private $mentors;

    public function __construct()
    {
        $this->mentors = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|Mentor[]
     */
    public function getMentors(): Collection
    {
        return $this->mentors;
    }

    public function addMentor(Mentor $mentor): self
    {
        if (!$this->mentors->contains($mentor)) {
            $this->mentors[] = $mentor;
            $mentor->addStackTech($this);
        }

        return $this;
    }

    public function removeMentor(Mentor $mentor): self
    {
        if ($this->mentors->removeElement($mentor)) {
            $mentor->removeStackTech($this);
        }

        return $this;
    }
}
